import { Pressable, View, Text, TouchableOpacity, ScrollView, Image, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import Textarea from '../../src/components/Textarea'
// import TextInput from '../../src/components/TextInput'
import { maintain_report } from '../../src/redux/MaintainReducer'
import SweetAlert from 'react-native-sweet-alert';
import { connect } from 'react-redux';
import { Icon, Input, Button } from 'react-native-elements'
import moment from 'moment'
import CollapsibleList from "react-native-collapsible-list";
import SelectDropdownUI from '../../src/components/SelectDropdown'
import { fetch_paymentstatus } from '../../src/redux/PaymentStatusReducer'
import DatePickerInput from '../../src/components/Renderdatepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { fetch_all_withdrawals, fetch_fetbox, fetch_fatbox_ports, killfatboxport } from '../../src/redux/WithDrawalReducer'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const arrow = require('../../src/image/down-arrow.png');

import validate from './validate'
import CustomTextInput from '../../src/components/CustomTextInput'
import RadioSelect from '../../src/components/RadioSelect'
import DatePicker from '../../src/components/DatePicker'
import TimePicker from '../../src/components/TimePicker'
import RenderImage from '../../src/components/RenderImage'
import { array } from 'prop-types'
import FatBoxPortDropdown from '../../src/components/FatBoxPortDropdown'
import FatBoxDropdown from '../../src/components/FatBoxDropdown'
import ImagePicker from 'react-native-image-crop-picker';
import FatBoxSelect from '../../src/components/FatBoxSelect'
import FatBoxPortSelect from '../../src/components/FatBoxPortSelect'
const sendimg = require('../../src/image/send.png');

const Maintainreport = (props) => {
    const { all_payment_status, all_fatboxs, all_fatboxs_port_list, } = props
    const [imagemodalVisible, setimageVisible] = useState(false);
    const [selected, setSelected] = useState();

    const [resourcePath, setfilePath] = useState({});
    const [fileData, setfileData] = useState();
    const [fileUri, setfileUri] = useState();
    const [filetype, setfiletype] = useState();
    const [photos, setPhotos] = useState([])
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    //datetime
    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [datePicker, setDatePicker] = useState(false);
    const [newinstall_data, setNewinstall] = useState()
    const [install_data, setInstall] = useState()
    const [relocation_data, setRelocation] = useState()
    const [completedatepicker, setCompletedatepicker] = useState(false)
    const [completedate, setCompletedate] = useState()
    const [completetimepicker, setCompleteTimePicker] = useState(false)
    const [completetime, setCompletetime] = useState()
    const [asset_no, set_Assetno] = useState()
    const [images, setmages] = useState()
    const [team_member_id, setTeam_member_id] = useState()
    const [paymentdatepicker, setPaymentDatepicker] = useState(false)
    const [paymentdate, setpPaymentdate] = useState()
    const [loading, setLoading] = useState(false)

    const task_status = [
        'complete', 'pending', 'other'
    ]

    // test
    const [isDateTimePickerVisible, setisDateTimePickerVisible] = useState(false)
    const id = props.route.params.id;
    const props_data = props.route.params.params;
    console.log('data', props_data);
    useEffect(() => {

        props.fetch_paymentstatus()
        props.fetch_all_withdrawals(id)
        props.fetch_fetbox();

        AsyncStorage.getItem("id").then((teammember_id) => {
            setTeam_member_id(teammember_id)
        });

        return () => {
            props.killfatboxport()
        }

    }, [])


    const [isPickerShow, setIsPickerShow] = useState(false);
    // const [date, setDate] = useState(new Date(Date.now()));

    const btnsend = (values) => {
        setLoading(true)
        // console.log('btn_send arrival_date :: ', values);
        values = Object.assign({}, values, {
            // arrival_date_time : values.arrival_date + '-' + values.arrival_time,
            // complete_date_time : values.complete_date + '-' + values.complete_time,
            ticket_id: props_data.id,
            team_member_id: team_member_id,
            date: moment().format('YYYY-MM-DD'),
            service_team_admin_id: id,
            payment_status: 1,
            // report_type : 2,
            // payment_date: moment(date).format("YYYY-MM-DD")
            // report_type : 1,
            // status : 0
        });
        // const all_data = Object.assign({}, values, {
        //     id: data.id,
        //     complete_date: moment().format('YYYY-MM-DD'),
        //     customer_no: data.customer_no,
        //     ticket_no: data.ticket_no,
        //     payment_status: 1,
        //     payment_date: moment(date).format("YYYY-MM-DD")


        // })
        // alert(JSON.stringify(values));
        props.maintain_report(images, values, (type) => {
            if (type == 'updatesuccess') {
                setLoading(false)
                SweetAlert.showAlertWithOptions({
                    title: "Maintain Saved Successfully",
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

            } else {
                SweetAlert.showAlertWithOptions({
                    title: 'Update Fail',
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'error',
                    cancellable: true
                },
                    callback => console.log('callback'));
            }
        })

    }

    const showPicker = () => {
        // showMode('date');
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        // console.log('value', value);
        setDate(value);

        setShow(false);
        // if (Platform.OS === 'android') {
        //     setIsPickerShow(false);
        // }
        // setShow(false)
    };
    // const onChange = (event, selectedDate) => {
    //     // const currentDate = selectedDate || date;
    //     // setShow(Platform.OS === 'ios');
    //     setDate(selectedDate);
    //     setShow(false)
    // };


    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };


    const showDatepickerForPayment = () => {
        showMode('date');
    };

    //date time 
    function showDatePicker() {
        setDatePicker(true);
    };
    function showpaymentDatePicker() {
        setPaymentDatepicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    // const showDateTimePicker = () => {
    //     setisDateTimePickerVisible(true)
    // };
    function showCompleteTimepicker() {
        setCompleteTimePicker(true)
    }

    function onCompleteTimeSelected(event, value) {
        setCompleteTimePicker(false);
        setCompletetime(value);

    };

    function showCompleteDatePicker() {
        setCompletedatepicker(true)
    }

    function onCompletedDateSelected(event, value) {
        setCompletedatepicker(Platform.OS === 'ios');
        setCompletedate(value);
    };

    function onDateSelected(event, value) {
        setDatePicker(Platform.OS === 'ios');
        setDate(value);
    };

    function onTimeSelected(event, value) {
        setTimePicker(false);
        setTime(value);
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

    const handleChange = date => {
        setisDateTimePickerVisible(false)
        props.input.onChange(date);
    };
    function onPaymentDateSelected(event, value) {
        setPaymentDatepicker(Platform.OS === 'ios');
        setpPaymentdate(value);
    };



    const { input, meta, all_withdrawals, ...inputProps } = props;
    var newArr = [];
    for (var i = 0; i < all_withdrawals.length; i++) {
        for (var j = 0; j < all_withdrawals[i].length; j++) {
            newArr = newArr.concat(all_withdrawals[i][j].serial_no);
        }
    }
    var no_data = [];
    no_data = no_data.concat('No Data Here!');



    // console.log('withdra', all_withdrawals);
    function call_fatboxport_data(id) {
        props.fetch_fatbox_ports(id)
    }

    const get_assetno = (value) => {
        for (var i = 0; i < all_withdrawals.length; i++) {
            for (var j = 0; j < all_withdrawals[i].length; j++) {
                if (all_withdrawals[i][j].serial_no == value) {
                    set_Assetno(all_withdrawals[i][j].asset_no)
                }
            }
        }
        // console.log(newasset_no);
        // props.get_assetno_By_Serialno(value)
    }

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

    return (
        <ScrollView style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
            <View >

                {/* <Field iconname="lock" formname name="equitment" component={CustomTextInput} placeholder="Enter Equipment Replace" />

                <Field iconname="lock" formname name="bandwidth" component={CustomTextInput} placeholder="Enter BandWidth" editinput />
                <Field name="serialno" component={SelectDropdownUI} all_withdrawals_result={newArr} serviceui /> */}


                {/* <Field iconname="lock" formname name="assetno" component={CustomTextInput} placeholder="Enter Asset Number" /> */}
                {/* <Field name="service_team_comment" component={CustomTextInput} placeholder="Description" Remark={'Remark'} multiple /> */}

                <Field editable teamname={props_data.team_admin.name} placeholder='Service Team Name' formname name="service_team_name" component={CustomTextInput} />
                <Field placeholder='Ref No' formname name="ref_no" component={CustomTextInput} />
                <Field editable cust_name={props_data.customer_data.first_name + '-' + props_data.customer_data.last_name} placeholder='Customer Name' formname name="customer_name" component={CustomTextInput} />
                <Field placeholder='Customer ID' formname name="customer_id" component={CustomTextInput} editable customerno={props_data.customer_no} />
                <Field name="installation_address" component={CustomTextInput} placeholder="Installation Address" Remark={'Remark'} multiple editable installation_address={props_data.installation_address} />
                <Field placeholder='Contact Person' formname name="contact_person" component={CustomTextInput} editable contactperson={props_data.contact_name} />
                <Field placeholder='Contact Telephone' formname name="contact_telephone" component={CustomTextInput} editable contacttelephone={props_data.contact_telephone} />
                <Field placeholder='Service Type' formname name="service_type" component={CustomTextInput} />
                <Field keyboardType placeholder='Bandwitdh' formname name="bandwidth" component={CustomTextInput} />
                <Field placeholder='Customer location' formname name="customer_location" component={CustomTextInput} />
                <Field keyboardType placeholder='Cable Length' formname name="cable_length" component={CustomTextInput} />
                {/* <Field fun_fatbox_port_list={call_fatboxport_data} name="fat_box_name" component={FatBoxDropdown} fatbox_list={all_fatboxs} labelname="Select Box" />

                <Field name="port_no" component={FatBoxPortDropdown} fatbox_portlist={all_fatboxs_port_list} labelname="Select Port Number" /> */}

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
                    {/* <RadioButton.Group  >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>Yes</Text>
                                <RadioButton value="first" />
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>No</Text>
                                <RadioButton value="second" />
                            </View>
                        </View>
                    </RadioButton.Group> */}

                    <Field component={RadioSelect} name="new_installation" fun_newinstall={get_newinstallation} data={newinstall_data} />

                </View>

                <Field placeholder='Ticket Number' formname name="ticket_no" component={CustomTextInput} editable ticketno={props_data.ticket_no} />
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
                <Text style={{ color: 'black', marginLeft: 15, fontFamily: 'Quicksand-Regular', }}>Fill out if task status other </Text>
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

                {/* <Field label="Upload Photo" camera={camera} modalVisible={imagemodalVisible}
                    modalvisibile={modalvisibile} fileData={fileData}
                    fileUri={fileUri} name="photo" imageGalleryLaunch={imageGalleryLaunch}
                    component={RenderImage}
                    viewimg={photos}
                /> */}


                <CollapsibleList
                    numberOfVisibleItems={1}
                    wrapperStyle={{
                        flex: 1,
                        marginTop: 20,
                        overflow: "hidden",
                        backgroundColor: "#FFF",
                        borderRadius: 5
                    }}
                    buttonContent={
                        <View>
                            <Text style={{ color: 'black', marginLeft: 13, }}>+</Text>
                        </View>
                    }
                >
                    <View style={{
                        borderColor: "#CCC",
                        padding: 10
                    }} >
                        <Text style={{ color: '#8a8888', textAlign: 'left', alignSelf: 'stretch', marginLeft: 5, fontFamily: 'Quicksand-Bold', }}>Fill Your Invoice Form</Text>
                    </View>

                    <View style={{ backgroundColor: 'white', padding: 5, }}>
                        <Field keyboardType iconname="lock" formname name="amount" component={CustomTextInput} placeholder="Enter Amount" />

                        <Field payment_date_picker={'payment_date_picker'} paymentdate date_selected={onPaymentDateSelected} pickup_date={paymentdate} showdate_picker={paymentdatepicker} pressshowdate={showpaymentDatePicker} component={DatePicker} name="payment_date" />

                        <Field name="payment_method" component={SelectDropdownUI} all_payment_status_list={all_payment_status} />

                        <Field name="description" component={CustomTextInput} placeholder="Description" Remark={'Comment'} multiple />

                    </View>
                </CollapsibleList>

                {/* <Button
                    onPress={props.handleSubmit(btnsend)}
                    title="Send"
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
                    <Text style={{ textAlign: 'center', color: 'white' }}>Send To Admin</Text>
                </Pressable>
                {/* <TouchableOpacity onPress={handleSubmit(btnsend)
                } style={{ width: '96%', marginRight: 10, marginLeft: 8, marginBottom: 40, flex: 1 }} >
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
                </TouchableOpacity> */}
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
            </View>
        </ScrollView>
    )
}
const stateToProps = state => {
    return {
        all_payment_status: state.PaymentReducer.payment_list,
        all_withdrawals: state.withdrawals.all_withdrawal,
        all_fatboxs: state.withdrawals.all_fatbox,
        all_fatboxs_port_list: state.withdrawals.all_fatbox_port
    };
}
const MaintainreportWrap = reduxForm({
    form: "reportForm",
    validate
})(Maintainreport)

export default connect(stateToProps, { killfatboxport, fetch_paymentstatus, maintain_report, fetch_all_withdrawals, fetch_fetbox, fetch_fatbox_ports })(MaintainreportWrap)