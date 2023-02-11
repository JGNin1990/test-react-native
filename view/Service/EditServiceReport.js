import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CustomTextInput from '../../src/components/CustomTextInput'
import FatBoxDropdown from '../../src/components/FatBoxDropdown'
import FatBoxPortDropdown from '../../src/components/FatBoxPortDropdown'
import RadioSelect from '../../src/components/RadioSelect'
import SelectDropdownUI from '../../src/components/SelectDropdown'
import DatePicker from '../../src/components/DatePicker'
import TimePicker from '../../src/components/TimePicker'
import RenderImage from '../../src/components/RenderImage'
import ImagePicker from 'react-native-image-crop-picker';
import { fetch_all_withdrawals, fetch_fetbox, fetch_fatbox_ports } from '../../src/redux/WithDrawalReducer'
import { send_remrk_reject } from '../../src/redux/Client_requestReducer'
import SweetAlert from 'react-native-sweet-alert'
import { PHOTO_URL } from '../../src/components/common'
import FatBoxSelect from '../../src/components/FatBoxSelect'
import FatBoxPortSelect from '../../src/components/FatBoxPortSelect'

const EditServiceReport = (props) => {
    const [completedatepicker, setCompletedatepicker] = useState(false)
    const [completedate, setCompletedate] = useState()
    const [completetimepicker, setCompleteTimePicker] = useState(false)
    const [completetime, setCompletetime] = useState()
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState();
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState();
    const [images, setmages] = useState()
    const [imagemodalVisible, setimageVisible] = useState(false);
    const [resourcePath, setfilePath] = useState({});
    const [fileData, setfileData] = useState();
    const [fileUri, setfileUri] = useState();
    const [filetype, setfiletype] = useState();
    const [imageArray, setImageArray] = useState();
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState();
    const [showBox, setShowBox] = useState(false);
    const [oldport, setOldport] = useState(false)
    const [testopt, setTest] = useState()

    const { all_fatboxs, all_fatboxs_port_list, all_withdrawals } = props
    const data = props.route.params
    const newItems = {};
    if (testopt) {

        Object.keys(all_fatboxs_port_list).forEach(key => {
            if (testopt == data.fatbox_data.id) {
                newItems[key] = all_fatboxs_port_list[key];
                newItems[data.fatboxport_data.id] = { box_port: data.fatboxport_data.box_port };
            } else {
                newItems[key] = all_fatboxs_port_list[key];
                // newItems['1'] = { name: 'new' };
            }

        });
    }
    const sendimg = require('../../src/image/send.png');
    const task_status = [
        'complete', 'pending', 'other'
    ]

    const get_arraivaldate = props.route.params.arrival_date_time.split("-",);
    const get_completedate = props.route.params.complete_date_time.split("-",);

    var newArr = [];


    for (var i = 0; i < all_withdrawals.length; i++) {
        for (var j = 0; j < all_withdrawals[i].length; j++) {
            newArr = newArr.concat(all_withdrawals[i][j].serial_no);

        }
    }

    useEffect(() => {
        // setShowBox(false);
        let imageArrayList = [];
        var image_array = data.image && data.image.split(',').slice(0, -1);
        image_array && image_array.map((image) => {
            // console.log('image', image);
            imageArrayList.push({
                path: PHOTO_URL + '/service_team_members/' + image,

                // path: 'https://demo1.aggademo.me/anynetmm/public/img/63282cf568394IMG20220919151819.jpg',
                name: image,
                type: image.mime
            })
        })
        setImageArray(imageArrayList);


        props.initialize(props.route.params)
        props.fetch_fetbox()
        props.fetch_all_withdrawals(props.route.params.service_team_admin_id)
    }, [])

    //date time 


    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected(event, value) {
        setDatePicker(Platform.OS === 'ios');
        setDate(value);
    };

    function onTimeSelected(event, value) {
        setTimePicker(false);
        setTime(value);

    };

    function showCompleteDatePicker() {
        setCompletedatepicker(true)
    }

    function onCompletedDateSelected(event, value) {
        setCompletedatepicker(Platform.OS === 'ios');
        setCompletedate(value);
    };

    function showCompleteTimepicker() {
        setCompleteTimePicker(true)
    }
    function onCompleteTimeSelected(event, value) {
        setCompleteTimePicker(false);
        setCompletetime(value);

    };

    const modalvisibile = () => {

        setimageVisible(true)
    }

    // const imageGalleryLaunch = () => {
    //     let options = {
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',

    //         },
    //     };

    //     launchImageLibrary(options, (res) => {
    //         try {
    //             if (photos.length >= 1) {
    //                 // merge photo
    //                 setPhotos(photos.concat(res.assets));
    //             } else {
    //                 setPhotos(res.assets);
    //             }
    //         } catch (error) {
    //             console.log('error ::', error);
    //         }
    //         if (res.didCancel) {
    //             setPhotos([])
    //             console.log('User cancelled image picker');
    //         }
    //         // if (res.didCancel) {
    //         //     console.log('User cancelled image picker');
    //         // } else if (res.error) {
    //         //     console.log('ImagePicker Error: ', res.error);
    //         // } else if (res.customButton) {
    //         //     console.log('User tapped custom button: ', res.customButton);
    //         //     alert(res.customButton);
    //         // } else {
    //         //     const source = { uri: res.fileName };
    //         //     setfilePath(res);
    //         //     setfileData(res.assets[0]);
    //         //     setfileUri(res.assets[0].uri)
    //         //     setfiletype(res.assets[0].type)

    //         // }
    //     });
    //     setimageVisible(!imagemodalVisible)
    // }

    const imageGalleryLaunch = () => {
        let imageList = []
        ImagePicker.openPicker({
            multiple: true
        })
            .then(response => {

                response.map((image) => {
                    imageList.push({
                        // filename: image.filename,
                        path: Platform.OS === "android" ? image.path : image.path.replace("file://", ""),
                        name: image.path.substring(image.path.lastIndexOf('/') + 1, image.path.length),
                        type: image.mime
                    })
                })
                setmages(imageList)

            });

    }

    const camera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (res) => {
            const requestCameraPermission = async () => {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: "App Camera Permission",
                            message: "App needs access to your camera ",
                            buttonNeutral: "Ask Me Later",
                            buttonNegative: "Cancel",
                            buttonPositive: "OK"
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log("Camera permission given");
                    } else {
                        console.log("Camera permission denied");
                    }
                } catch (err) {
                    console.warn(err);
                }
            };


            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                // alert(res.customButton);
            } else {
                const source = { uri: res.fileName };
                setfilePath(res);
                setfileData(res.assets[0]);
                setfileUri(res.assets[0].uri);
                setfiletype(res.assets[0].type)
            }
        });
        setimageVisible(!modalimageVisible)
    }
    const btnsend = (value) => {
        const edit_report_list = Object.assign({}, value, {
            old_fatport: data.fatboxport_data.box_port,
        })
        // alert(JSON.stringify(edit_report_list))
        setLoading(true)
        props.send_remrk_reject(images, edit_report_list, (type) => {
            if (type == 'remarkrejectsuccess') {
                setLoading(false)
                SweetAlert.showAlertWithOptions({
                    title: "Report Update Successfully",
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'success',
                    cancellable: true
                },
                    callback => console.log('callback'));

                props.navigation.navigate('Main');
            }
        })
    }

    function call_fatboxport_data(id) {
        setTest(id)
        props.fetch_fatbox_ports(id)

    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', }}>
            {showBox && <View style={{
                width: 300,
                height: 300,
                backgroundColor: "red",
                marginBottom: 30,
            }}></View>}
            <View style={{
                justifyContent: 'center', marginTop: 40
            }}>
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Service Team Name</Text>

                <Field editable placeholder='Service Team Name' formname name="service_team_name" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Ref No</Text>

                <Field placeholder='Ref No' formname name="ref_no" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Customer Name</Text>

                <Field editable placeholder='Customer Name' formname name="customer_name" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Customer ID</Text>

                <Field placeholder='Customer ID' formname name="customer_id" component={CustomTextInput} editable />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Remark</Text>

                <Field name="installation_address" component={CustomTextInput} placeholder="Installation Address" Remark={'Remark'} multiple />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Contact Person</Text>

                <Field placeholder='Contact Person' formname name="contact_person" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Contact Telephone</Text>

                <Field placeholder='Contact Telephone' formname name="contact_telephone" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Service Type</Text>

                <Field placeholder='Service Type' formname name="service_type" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>BandWidth</Text>

                <Field placeholder='Bandwitdh' formname name="bandwidth" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Customer Location</Text>

                <Field placeholder='Customer location' formname name="customer_location" component={CustomTextInput} />

                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Cable Length</Text>

                <Field placeholder='Cable Length' formname name="cable_length" component={CustomTextInput} />
                {/* <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Fat Box</Text>

                <Field ediitable oldvalue={props.route.params.fatbox_data ? props.route.params.fatbox_data.box_name : ''} fatbox_list={all_fatboxs} fun_fatbox_port_list={call_fatboxport_data} name="fat_box_name" component={FatBoxDropdown} labelname="Select Box" /> */}
                {/* <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Fat Box Port</Text>

                <Field ediitable oldvalue={props.route.params.fatboxport_data ? props.route.params.fatboxport_data.box_port : ''} fatbox_portlist={all_fatboxs_port_list} name="port_no" component={FatBoxPortDropdown} labelname="Select Port Number" /> */}
                <View style={{
                    borderRadius: 30,
                    width: '90%',
                    marginLeft: 12,
                    marginRight: 12,
                }}>
                    <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Fat Box</Text>

                    <Field
                        oldvalue={data.fatbox_data ? data.fatbox_data.box_name : ''}
                        name="fat_box_name"
                        getvalue={selected}
                        component={FatBoxSelect}
                        options={all_fatboxs}
                        setValue={setSelected}
                        onChange={call_fatboxport_data}
                        titleText="Please select Fat Box"
                    />
                </View>

                <View style={{
                    borderRadius: 30,
                    marginTop: 18,
                    width: '90%',
                    marginLeft: 12,
                    marginRight: 12,
                    marginBottom: 15
                }}>
                    <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Fat Box Port</Text>

                    <Field
                        oldvalue={oldport ? '' : data && data.fatboxport_data.box_port}
                        // oldvalue={ data && data.fatboxport_data.box_port}
                        name="port_no"
                        getvalue={selected}
                        component={FatBoxPortSelect}
                        portoptions={newItems}
                        setValue={setSelected}
                        titleText="Please select Fat Box Port "

                    />
                </View>



                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Fat Port Tx</Text>
                <Field placeholder='FAT Port TX' formname name="fat_port_tx" component={CustomTextInput} />

                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Customer RX</Text>

                <Field placeholder='Customer RX' formname name="customer_rx" component={CustomTextInput} />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Onu Loss</Text>

                <Field placeholder='ONU Loss' formname name="onu_loss" component={CustomTextInput} />
                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600' }}>New Installation?</Text>

                <View style={{
                    flex: 1,
                    // shadowColor: '#000000',
                    // shadowOpacity: 0.1,
                    // elevation: 3,
                    // backgroundColor: 'white',
                    // marginTop: 20, marginLeft: 10,
                    // marginRight: 12, borderRadius: 20,
                    // paddingHorizontal: 10,
                    // marginVertical: 10,
                    // shadowOffset: { width: -2, height: 4 },
                    // shadowRadius: 3,
                }}>

                    <Field component={RadioSelect} name="new_installation" oldvalue={props.route.params.new_installation} />


                </View>
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Ticket Number</Text>

                <Field placeholder='Ticket Number' formname name="ticket_no" component={CustomTextInput} />
                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600' }}> Installation?</Text>
                <View style={{
                    flex: 1,
                    // shadowColor: '#000000',
                    // shadowOpacity: 0.1,
                    // elevation: 3,
                    // backgroundColor: 'white',
                    // marginTop: 20, marginLeft: 10,
                    // marginRight: 12, borderRadius: 20,
                    // paddingHorizontal: 10,
                    // marginVertical: 10,
                    // shadowOffset: { width: -2, height: 4 },
                    // shadowRadius: 3,
                }}>

                    <Field component={RadioSelect} name="installation" oldvalue={props.route.params.installation} />


                </View>
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Complain Ticket Number</Text>

                <Field placeholder='Complain Ticket Number' formname name="complain_ticket_no" component={CustomTextInput} />

                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600' }}> Relocation</Text>
                <View style={{
                    flex: 1,
                    // shadowColor: '#000000',
                    // shadowOpacity: 0.1,
                    // elevation: 3,
                    // backgroundColor: 'white',
                    // marginTop: 20, marginLeft: 10,
                    // marginRight: 12, borderRadius: 20,
                    // paddingHorizontal: 10,
                    // marginVertical: 10,
                    // shadowOffset: { width: -2, height: 4 },
                    // shadowRadius: 3,
                }}>
                    <Field component={RadioSelect} name="relocation" oldvalue={props.route.params.relocation} />


                </View>
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Other</Text>


                <Field name="other" component={CustomTextInput} placeholder="Other" Remark={'Remark'} multiple />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Text Status</Text>

                <Field oldvalue={props.route.params.text_status} all_withdrawals_result={task_status} name="text_status" component={SelectDropdownUI} serviceui labelname="Task Status" />
                <Text style={{ color: 'black', marginLeft: 15 }}>Fill out if task status other </Text>
                <Field name="text_box" component={CustomTextInput} placeholder="Other" Remark={'Remark'} multiple />

                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600' }}>Arrival Date & Time </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>

                    <Field component={DatePicker} pickup_date={date}
                        date_selected={onDateSelected}
                        pressshowdate={showDatePicker}
                        showdate_picker={datePicker} name="arrival_date" oldvalue={get_arraivaldate[0]} />

                    <Field component={TimePicker} press_show_time={showTimePicker}
                        show_time={timePicker} time_selected={onTimeSelected} get_time={time} name="arrival_time" oldvalue={get_arraivaldate[1]} />
                </View>

                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600', marginTop: 20 }}>Complete Date & Time </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 20 }}>

                    <Field component={DatePicker} pickup_date={completedate}
                        date_selected={onCompletedDateSelected}
                        pressshowdate={showCompleteDatePicker}
                        showdate_picker={completedatepicker} name="complete_date" oldvalue={get_completedate[0]} />

                    <Field component={TimePicker} press_show_time={showCompleteTimepicker} name="complete_time" oldvalue={get_completedate[1]}
                        show_time={completetimepicker} time_selected={onCompleteTimeSelected} get_time={completetime} />
                </View>
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Equipment Installed Replaced</Text>

                <Field name="equipment_installed_replaced" component={CustomTextInput} placeholder="Equipment Installed/ Replaced" />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Serial Number</Text>

                {/* <Field name="serial_no" component={CustomTextInput} placeholder="Serial No" /> */}
                <Field editable name="serial_no" oldvalue={props.route.params.serial_no}
                    component={SelectDropdownUI}

                    serviceui
                    labelname='Select Serial Number'
                />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Asser Number</Text>

                <Field name="asset_no" component={CustomTextInput} placeholder="Asset No" editable />

                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Service Engineer Comment</Text>

                <Field name="service_engineer_cmt" component={CustomTextInput} placeholder="Service Engineer Comment" Remark={'Remark'} multiple />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Service Engineer Name</Text>

                <Field name="service_engineer_name" component={CustomTextInput} placeholder="Service Engineer Name" />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Service Complete Testing</Text>

                <Field name="service_complete_testing" component={CustomTextInput} placeholder="Service Complete Testing" Remark={'Remark'} multiple />
                <Text style={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', marginLeft: 15, }}>Customer Comment</Text>

                <Field name="customer_cmt" component={CustomTextInput} placeholder="Customer  Comment" Remark={'Remark'} multiple />

                {/* <Field placeholder='Enter Guide' formname label="Guide" name="guide" component={CustomTextInput} /> */}

                <Field label="Upload Photo" camera={camera} modalVisible={imagemodalVisible}
                    modalvisibile={modalvisibile} fileData={fileData}
                    fileUri={fileUri} name="photo" imageGalleryLaunch={imageGalleryLaunch}
                    component={RenderImage}
                    viewimg={images ? images : imageArray}
                />

                {/* <Text style={{ color: 'black' }}>dsd</Text> */}

                {/* <TouchableOpacity onPress={handleSubmit(btnsend)
                } style={{ width: '96%', marginTop: 30, marginLeft: 8, marginBottom: 10, flex: 1 }} >
                    <View style={{
                        backgroundColor: '#f7b840',
                        height: 45,
                        borderRadius: 10,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center'


                    }} >
                        {
                            loading ? (
                                <ActivityIndicator size={30} color={'white'} />
                            ) :
                                (
                                    <>
                                        <Text style={{ textAlign: 'center', color: 'white' }}>Send To Service Team Admin</Text>
                                        <Image
                                            resizeMode="cover"
                                            source={sendimg}
                                            style={{ width: 20, height: 20, marginLeft: 10 }}
                                        />
                                    </>
                                )

                        }


                    </View>
                </TouchableOpacity> */}
                <Pressable style={{
                    backgroundColor: '#f7b840',
                    height: 45,
                    borderRadius: 10,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 40,
                    marginTop: 30,
                    marginLeft: 10,
                    marginRight: 10
                }} onPress={props.handleSubmit(btnsend)}>
                    {loading && <ActivityIndicator size="large" color="yellow" />}
                    <Text style={{ textAlign: 'center', color: 'white' }}>Send To Admin </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}
const stateToprops = state => {
    return {
        all_fatboxs: state.withdrawals.all_fatbox,
        all_fatboxs_port_list: state.withdrawals.all_fatbox_port,
        all_withdrawals: state.withdrawals.all_withdrawal,

    }
}
const ServiceReportwrap = reduxForm({
    form: "editservicereportform",
    // validate
})(EditServiceReport)

export default connect(stateToprops, { send_remrk_reject, fetch_all_withdrawals, fetch_fatbox_ports, fetch_fetbox })(ServiceReportwrap)