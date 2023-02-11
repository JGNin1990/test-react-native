import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import {
    Modal,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
// import { styles } from '../Service/ServiceDetailStyle';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Textarea from '../../src/components/Textarea';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from "react-redux";
import { send_remrk, send_remrk_reject } from '../../src/redux/Client_requestReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SweetAlert from 'react-native-sweet-alert';
import RejectModal from '../../src/components/RejectModal';
import TextInput from '../../src/components/TextInput';
import moment from 'moment';
import styles from './Maintainlist_DetailStyle';
import { maintain_report } from '../../src/redux/MaintainReducer';

const Maintainlist_Detail = (props) => {
    const data = props.route.params.params
    console.log('maintain data', data);
    const teamadmin_id = props.route.params.teamadmin_id
    const [openmodal, setOpenModal] = useState(false)

    const profile = require('../../src/image/user.png')
    const report = require('../../src/image/report.png')
    const btnsend = (values) => {
        const all_data = Object.assign({}, values, {
            id: data.id,

        })

        props.maintain_report(all_data, (type) => {
            if (type == 'updatesuccess') {
                SweetAlert.showAlertWithOptions({
                    title: "User Update Successfully",
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

    return (
        <>

            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={{ flex: 1, paddingLeft: 10, marginTop: 20, }}>
                    <Text style={{ color: "#302a69", fontSize: 19, fontFamily: 'Quicksand-Bold', }}>Issue Request From </Text>
                    <Text style={{ color: "black", fontSize: 15, fontFamily: "Quicksand-Regular", }}> {data.contact_name}</Text>
                </View>

                <View style={{
                    flex: 1,
                    shadowColor: '#000000',
                    shadowOpacity: 0.1,
                    elevation: 3,
                    backgroundColor: '#302a69',
                    marginTop: 20, marginLeft: 10,
                    marginRight: 12, borderRadius: 20,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                    shadowOffset: { width: -2, height: 4 },
                    shadowRadius: 3,
                }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5, marginTop: 20 }}>
                        <Text style={{ color: "white", fontFamily: "Quicksand-Regular", }}>10/3/22</Text>
                        <Text style={{ color: "white", fontFamily: "Quicksand-Regular", }}>{data.customer_no}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5 }}>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'Quicksand-Bold', fontSize: 16 }}>Contact Name :</Text>
                        <Text style={{ color: "white", fontFamily: "Quicksand-Regular", marginTop: 10 }}>{data.contact_name}</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5 }}>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'Quicksand-Bold', fontSize: 16 }}>Phone Number :</Text>
                        <Text style={{ color: "white", fontFamily: "Quicksand-Regular", marginTop: 10 }}>{data.contact_telephone}</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', padding: 5, marginTop: 8 }}>
                        <Text style={{ color: "white", fontFamily: 'Quicksand-Bold', fontSize: 16, }}>Ticket Number :</Text>
                        <Text style={{ color: "white", fontFamily: "Quicksand-Regular", marginTop: 1 }}>{data.ticket_no}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />
                    <View style={{ justifyContent: 'space-between', padding: 5, marginTop: 8 }}>
                        <Text style={{ color: "white", fontFamily: 'Quicksand-Bold', fontSize: 16, }}>Installation Adrress :</Text>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.installation_address}</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />

                    <View style={{ justifyContent: 'space-between', padding: 10, marginTop: 8, marginBottom: 20 }}>
                        <Text style={{ color: "white", fontFamily: 'Quicksand-Bold', fontSize: 16, }}>Remark :</Text>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.others}</Text>
                    </View>

                </View>

                <TouchableOpacity
                    // onPress={() => setOpenModal(true)}
                    onPress={() => props.navigation.navigate('maintainreport', { params: data, id: teamadmin_id })}
                    style={{
                        position: 'absolute',
                        right: 0, top: 0,
                        marginTop: 20,
                        marginRight: 10
                    }}>
                    <Image
                        resizeMode="cover"
                        source={
                            report

                        }
                        style={{
                            width: 30,
                            height: 30,

                        }}
                    />
                </TouchableOpacity>
            </ScrollView>

            <Modal
                // animationIn='zoomIn'
                animationType="slide"
                transparent={true}
                // coverScreen={true}
                visible={openmodal}
                onRequestClose={() => {
                    setOpenModal(!openmodal);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginTop: 15
                }}>
                    <View style={{
                        width: '90%',
                        margin: 20,
                        backgroundColor: "white",
                        // backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: 20,
                        padding: 35,
                        height: 550

                    }}>
                        <Field iconname="lock" formname name="bandwidth" component={TextInput} placeholder="Bandwidth" />

                        <Field iconname="lock" formname name="equitment" component={TextInput} placeholder="Equipment Replace" />

                        <Field iconname="lock" formname name="serialno" component={TextInput} placeholder="Serial NUmber" />
                        <Field iconname="lock" formname name="assetno" component={TextInput} placeholder="Asset Number" />

                        <Field name="description" component={Textarea} placeholder="Description" />

                        <TouchableOpacity
                            onPress={props.handleSubmit(btnsend)}
                            style={{ width: '45%', marginTop: 20, position: 'absolute', right: 0, bottom: 0, marginRight: 20, marginBottom: 10 }} >
                            <View style={{
                                backgroundColor: '#f7b840',
                                // width: '50%',
                                height: 45,
                                // marginLeft: 10,
                                borderRadius: 10,
                                // justifyContent: 'flex-end'
                                justifyContent: 'center',


                            }} >
                                <Text style={{ textAlign: 'center', color: 'black' }}>Send</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ position: 'absolute', right: 0, marginRight: 20, marginTop: 20 }}>
                            <TouchableOpacity onPress={() => setOpenModal(!openmodal)}>
                                <Image style={{ width: 25, height: 25, }} source={require('../../src/image/cancel.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal >
        </>

    )
}
const Maintainlist_Detailwrap = reduxForm({
    form: "serviceForm",

})(Maintainlist_Detail)

export default connect(null, { maintain_report })(Maintainlist_Detailwrap)


