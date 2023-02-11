import { Pressable, View, Text, TouchableOpacity, ScrollView, Image, Button, ActivityIndicator, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import { send_remrk } from '../../src/redux/Client_requestReducer'
import { connect } from 'react-redux'
import Textarea from '../../src/components/Textarea'
import TextInput from '../../src/components/TextInput'
import RenderImage from '../../src/components/RenderImage'
import SweetAlert from 'react-native-sweet-alert'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import validate from './validate'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import SelectDropdownUI from '../../src/components/SelectDropdown'
import CustomTextInput from '../../src/components/CustomTextInput'
import { fetch_all_withdrawals, fetch_fetbox, fetch_fatbox_ports, killfatboxport } from '../../src/redux/WithDrawalReducer'
import { RadioButton } from 'react-native-paper';
import RadioSelect from '../../src/components/RadioSelect'

import SelectDropdown from 'react-native-select-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../src/components/DatePicker'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TimePicker from '../../src/components/TimePicker'
import FatBoxDropdown from '../../src/components/FatBoxDropdown'
import FatBoxPortDropdown from '../../src/components/FatBoxPortDropdown'
import ImagePicker from 'react-native-image-crop-picker';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
import FatBoxSelect from '../../src/components/FatBoxSelect'
import FatBoxPortSelect from '../../src/components/FatBoxPortSelect'
const options = ["Apple", "Banana", "Orange"];

const ServiceReport = (props) => {
    const [selected, setSelected] = useState();

    const [imagemodalVisible, setimageVisible] = useState(false);
    const [resourcePath, setfilePath] = useState({});
    const [fileData, setfileData] = useState();
    const [fileUri, setfileUri] = useState();
    const [filetype, setfiletype] = useState();
    const [openModal, setopenModal] = useState()
    const [team_member_id, setTeam_member_id] = useState()
    const [photos, setPhotos] = useState([])
    //datetime
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState();
    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState();
    const [newinstall_data, setNewinstall] = useState()
    const [install_data, setInstall] = useState()
    const [relocation_data, setRelocation] = useState()
    const [completedatepicker, setCompletedatepicker] = useState(false)
    const [completedate, setCompletedate] = useState()
    const [completetimepicker, setCompleteTimePicker] = useState(false)
    const [completetime, setCompletetime] = useState()
    const [asset_no, set_Assetno] = useState()
    const [select, setSelect] = useState(false)
    const [images, setmages] = useState()
    const [loading, setLoading] = useState(false)

    const task_status = [
        'complete', 'pending', 'other'
    ]
    const sendimg = require('../../src/image/send.png');
    // const { handleSubmit } = props
    const teamid = props.route.params.serteam_admin
    useEffect(() => {
        AsyncStorage.getItem("id").then((teammember_id) => {
            setTeam_member_id(teammember_id)
            props.fetch_all_withdrawals(teamid)
            props.fetch_fetbox()
        });

        // return () => {
        //     props.killfatboxport()
        // }



    }, [])

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

    const { all_withdrawals, all_fatboxs, all_fatboxs_port_list } = props
    console.log('all_fatboxs_port_list', all_fatboxs_port_list);
    const get_client = props.route.params.get_client.id
    var newArr = [];


    for (var i = 0; i < all_withdrawals.length; i++) {
        for (var j = 0; j < all_withdrawals[i].length; j++) {
            newArr = newArr.concat(all_withdrawals[i][j].serial_no);

        }
    }
    var no_data = [];
    no_data = no_data.concat('No Data Here!');

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

    function get_newinstallation(val) {
        setNewinstall(val)
    }

    function get_installtiion(val) {
        setInstall(val)
    }
    function get_relocation(val) {
        setRelocation(val)
    }

    function showCompleteTimepicker() {
        setCompleteTimePicker(true)
    }
    function onCompleteTimeSelected(event, value) {
        setCompleteTimePicker(false);
        setCompletetime(value);

    };
    const get_assetno = (value) => {
        for (var i = 0; i < all_withdrawals.length; i++) {
            for (var j = 0; j < all_withdrawals[i].length; j++) {
                if (all_withdrawals[i][j].serial_no == value) {
                    set_Assetno(all_withdrawals[i][j].asset_no)

                }


            }
        }
    }

    function call_fatboxport_data(id) {
        props.fetch_fatbox_ports(id)
    }

    const btnsend = (value) => {
        setLoading(true)
        // photos.map(photo => {
        //     uploadDdata.append('images[]', {
        //         type: photo.type,
        //         name: photo.fileName,
        //         uri: photo.uri,
        //         width: photo.width,
        //         height: photo.height,
        //     });
        // });
        const report_list = Object.assign({}, value, {
            client_id: get_client,
            by_service_team_member: teamid,
            service_team_member_id: team_member_id,
            date: moment().format('YYYY-MM-DD'),

        })

        props.send_remrk(images, report_list, (type) => {
            if (type == 'remarksuccess') {
                setLoading(false)
                SweetAlert.showAlertWithOptions({
                    title: "Send Remark Successfully",
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

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', }}>
            <View style={{
                justifyContent: 'center', marginTop: 40
            }}>

                <Field editable teamname={props.route.params.get_client.team_admin.name} placeholder='Service Team Name' formname name="service_team_name" component={CustomTextInput} />
                <Field placeholder='Ref No' formname name="ref_no" component={CustomTextInput} />
                <Field editable cust_name={props.route.params.get_client.customer_data.first_name + '-' + props.route.params.get_client.customer_data.last_name} placeholder='Customer Name' formname name="customer_name" component={CustomTextInput} />
                <Field placeholder='Customer ID' formname name="customer_id" component={CustomTextInput} editable customerno={props.route.params.get_client.customer_no} />
                <Field name="installation_address" component={CustomTextInput} placeholder="Installation Address" Remark={'Remark'} multiple />
                <Field placeholder='Contact Person' formname name="contact_person" component={CustomTextInput} />
                <Field placeholder='Contact Telephone' formname name="contact_telephone" component={CustomTextInput} keyboardType />
                <Field placeholder='Service Type' formname name="service_type" component={CustomTextInput} />
                <Field keyboardType placeholder='Bandwitdh' formname name="bandwidth" component={CustomTextInput} />
                <Field placeholder='Customer location' formname name="customer_location" component={CustomTextInput} />
                <Field keyboardType placeholder='Cable Length' formname name="cable_length" component={CustomTextInput} />

                {/* <Field options={call_fatboxport_data}  name="fat_box_name" component={FatBoxDropdown} fatbox_list={all_fatboxs} labelname="Select Box" /> */}


                <View style={{
                    borderRadius: 30,
                    marginTop: 8,
                    width: '90%',
                    marginLeft: 12,
                    marginRight: 12
                }}>
                    <Field
                        name="fat_box_name"
                        getvalue={selected}
                        component={FatBoxSelect}
                        options={all_fatboxs}
                        setValue={setSelected}
                        onChange={call_fatboxport_data}
                        titleText="Please select Fat Box"
                        oldvalue="Select Fat Box"

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
                    <Field
                        name="port_no"
                        getvalue={selected}
                        component={FatBoxPortSelect}
                        portoptions={all_fatboxs_port_list}
                        setValue={setSelected}

                        titleText="Please select Fat Box Port "
                        oldvalue="Select Fat Box Port"

                    />
                </View>

                {/* <Field name="port_no" component={FatBoxPortDropdown} fatbox_portlist={all_fatboxs_port_list} labelname="Select Port Number" /> */}

                <Field placeholder='FAT Port TX' formname name="fat_port_tx" component={CustomTextInput} />
                <Field placeholder='Customer RX' formname name="customer_rx" component={CustomTextInput} />
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

                    <Field component={RadioSelect} name="new_installation" fun_newinstall={get_newinstallation} data={newinstall_data} />

                </View>

                <Field editable placeholder='Ticket Number' formname name="ticket_no" component={CustomTextInput} />
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

                    <Field component={RadioSelect} name="installation" fun_newinstall={get_installtiion} data={install_data} />


                </View>

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
                    <Field component={RadioSelect} name="relocation" fun_newinstall={get_relocation} data={relocation_data} />


                </View>

                <Field name="other" component={CustomTextInput} placeholder="Other" Remark={'Remark'} multiple />

                <Field name="text_status" component={SelectDropdownUI} all_withdrawals_result={task_status} serviceui labelname="Task Status" />
                <Text style={{ color: 'black', marginLeft: 15, fontFamily: 'Quicksand-Regular', }}>Fill out if You selected task status other </Text>
                <Field name="text_box" component={CustomTextInput} placeholder="Other" Remark={'Remark'} multiple />


                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600' }}>Arrival Date & Time </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>

                    <Field component={DatePicker} pickup_date={date}
                        date_selected={onDateSelected}
                        pressshowdate={showDatePicker}
                        showdate_picker={datePicker} name="arrival_date" />

                    <Field component={TimePicker} press_show_time={showTimePicker}
                        show_time={timePicker} time_selected={onTimeSelected} get_time={time} name="arrival_time" />
                </View>

                <Text style={{ color: 'black', textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: '600', marginTop: 20 }}>Complete Date & Time </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 20 }}>

                    <Field component={DatePicker} pickup_date={completedate}
                        date_selected={onCompletedDateSelected}
                        pressshowdate={showCompleteDatePicker}
                        showdate_picker={completedatepicker} name="complete_date" />

                    <Field component={TimePicker} press_show_time={showCompleteTimepicker} name="complete_time"
                        show_time={completetimepicker} time_selected={onCompleteTimeSelected} get_time={completetime} />
                </View>

                <Field name="equipment_installed_replaced" component={CustomTextInput} placeholder="Equipment Installed/ Replaced" />

                {/* <Field name="serial_no" component={CustomTextInput} placeholder="Serial No" /> */}
                <Field name="serial_no"
                    component={SelectDropdownUI}
                    all_withdrawals_result={newArr.length > 0 ? newArr : no_data}
                    serviceui
                    labelname='Select Serial Number'
                    onChange={get_assetno} />

                <Field name="asset_no" component={CustomTextInput} placeholder="Asset No" data={asset_no} editable />


                <Field name="service_engineer_cmt" component={CustomTextInput} placeholder="Service Engineer Comment" Remark={'Remark'} multiple />

                <Field name="service_engineer_name" component={CustomTextInput} placeholder="Service Engineer Name" />

                <Field name="service_complete_testing" component={CustomTextInput} placeholder="Service Complete Testing" Remark={'Remark'} multiple />

                <Field name="customer_cmt" component={CustomTextInput} placeholder="Customer  Comment" Remark={'Remark'} multiple />

                {/* <Field placeholder='Enter Guide' formname label="Guide" name="guide" component={CustomTextInput} /> */}

                <Field label="Upload Photo" camera={camera} modalVisible={imagemodalVisible}
                    modalvisibile={modalvisibile} fileData={fileData}
                    fileUri={fileUri} name="photo" imageGalleryLaunch={imageGalleryLaunch}
                    component={RenderImage}
                    viewimg={images}
                />


                {/* <TouchableWithoutFeedback onPress={handleSubmit(btnsend)
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
                                        <Text style={{ textAlign: 'center', color: 'white' }}>Send To Admin </Text>

                                        <Image
                                            resizeMode="cover"
                                            source={sendimg}
                                            style={{ width: 20, height: 20, marginLeft: 10 }}
                                        />
                                    </>
                                )

                        }



                    </View>
                </TouchableWithoutFeedback> */}

                {/* <Button
                    onPress={props.handleSubmit(btnsend)}
                    title="Send"
                    buttonStyle={{ borderRadius: 15, backgroundColor: 'red' }}
                    containerStyle={{ marginRight: 10, marginLeft: 10, marginTop: 20, marginBottom: 40 }}
                /> */}

                {/* <TouchableOpacity onPress={props.handleSubmit(btnsend)}>
                    <View style={{
                        backgroundColor: '#f7b840',
                        height: 45,
                        borderRadius: 10,
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center'


                    }} >
                        {loading && <ActivityIndicator size="large" color="yellow" />}
                        <Text style={{ textAlign: 'center', color: 'white' }}>Send To Admin </Text>

                    </View>
                </TouchableOpacity> */}

                {/* <Button
                    onPress={props.handleSubmit(btnsend)}
                    title={loading ? 'Sending....' : "Send "}
                buttonStyle={{ borderRadius: 15, backgroundColor: '#f7b840' }}
                containerStyle={{ marginRight: 10, marginLeft: 10, marginTop: 20, marginBottom: 40 }}
                /> */}

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

            </View >
        </ScrollView >
    )
}
const stateToprops = state => {
    return {
        all_withdrawals: state.withdrawals.all_withdrawal,
        all_fatboxs: state.withdrawals.all_fatbox,
        all_fatboxs_port_list: state.withdrawals.all_fatbox_port,
    }
}
const ServiceReportwrap = reduxForm({
    form: "servicereportform",
    validate
})(ServiceReport)

export default connect(stateToprops, { killfatboxport, fetch_all_withdrawals, fetch_fatbox_ports, fetch_fetbox, send_remrk })(ServiceReportwrap)