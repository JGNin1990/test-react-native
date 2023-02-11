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
const Maintainlist_History = (props) => {
    const data = props.route.params
    const [openmodal, setOpenModal] = useState(false)

    // const profile = require('../../src/image/user.png')
    const profile = require('../../src/image/account.png');

    const report = require('../../src/image/report.png')


    return (
        <>

            <View style={{ backgroundColor: 'white' }} >
                <View style={{ backgroundColor: "#302a69", height: 80, }}>

                </View>


                <View style={{
                    width: '90%', backgroundColor: 'white',
                    borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomEndRadius: 20, borderBottomLeftRadius: 20,
                    position: 'absolute', top: 1,
                    padding: 20, margin: 20,
                }}>



                    {/* <Image
                        resizeMode="cover"
                        source={profile}
                        style={styles.profile}
                    /> */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: 'Quicksand-Bold' }}>Customer Name : </Text>
                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: "Quicksand-Regular" }}>{data.contact_name}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: 'Quicksand-Bold' }}>Address :</Text>

                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: "Quicksand-Regular" }}>{data.installation_address}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: 'Quicksand-Bold' }}>Phone Number :</Text>
                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: "Quicksand-Regular" }}>{data.contact_telephone}</Text>

                    </View>
                    <View
                        style={{
                            // flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />
                    {/* <View style={{ flex: 1, marginTop: 10 }}> */}
                    <Text style={{ color: "black", marginTop: 10, fontFamily: 'Quicksand-Bold' }}>Customer Number</Text>
                    <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.customer_no}</Text>
                    {/* </View> */}

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
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Bandwidth</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.bandwidth}</Text>
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
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Arrival Date Time</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.arrival_date_time}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />

                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Serial number</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.serial_no}</Text>
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

                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Equitment Replacd</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.equipment_replaced}</Text>
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
                    {/* <View style={{ flex: 1, marginTop: 10 }}>
                    <Text style={{ color: "black", }}>Equitment Replacd</Text>
                    <Text style={{ color: "black", marginTop: 10, fontWeight: 'bold' }}>Route lal ya ml</Text>
                </View> */}





                </View>

            </View>



        </>

    )
}
const Maintainlist_Historywrap = reduxForm({
    form: "HistoryForm",

})(Maintainlist_History)

export default connect(null, null)(Maintainlist_Historywrap)


