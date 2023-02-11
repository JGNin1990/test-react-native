import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SweetAlert from 'react-native-sweet-alert';
import {
    Modal,
} from 'react-native-paper';
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import Textarea from './Textarea';
import validate from '../../view/Service/validate';
import { send_remrk_reject } from '../redux/Client_requestReducer';
import * as RootNavigation from '../../navigation/Rootnavigation'
import TextInput from './TextInput';
const RejectModal = (props) => {

    const btnreject = (value) => {
        const report_list = Object.assign({}, value, {
            status: 'reject',
            client_id: props.client_id.id,
            by_service_team_member: props.team_member
        })
        props.send_remrk_reject(report_list, (type) => {
            if (type == 'remarkrejectsuccess') {
                SweetAlert.showAlertWithOptions({
                    title: "Send Reject Remark Successfully",
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'success',
                    cancellable: true
                },
                    callback => console.log('callback'));

                RootNavigation.navigate('Main');
            }
        })
    }
    return (
        <>
            {/* Reject Modal */}
            < Modal
                // animationIn='zoomIn'
                animationType="slide"
                transparent={true}
                // coverScreen={true}
                visible={props.dataFromParent}
                onRequestClose={() => {
                    props.callclosefun();
                }
                }
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginTop: 15
                }}>
                    <View style={{
                        width: '94%',
                        margin: 20,
                        backgroundColor: "white",
                        // backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: 20,
                        padding: 35,
                        // alignItems: "center",
                        // shadowColor: "#000",
                        // shadowOffset: {
                        //     width: 0,
                        //     height: 2
                        // },
                        // shadowOpacity: 0,
                        // shadowRadius: 4,
                        // elevation: 5,
                        height: 400

                    }}>
                        <Field name="description" component={Textarea} placeholder="Description" />

                        <Field formname="reject" name="serialno" component={TextInput} placeholder='Enter Serial Number' />

                        <Field formname="reject" name="gide" component={TextInput} placeholder='Enter gide' />

                        <TouchableOpacity onPress={props.handleSubmit(btnreject)
                        } style={{ width: '45%', marginTop: 35, position: 'absolute', right: 0, bottom: 0, marginRight: 40, marginBottom: 10 }} >
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
                            <TouchableOpacity onPress={() => props.callclosefun()}>
                                <Image style={{ width: 25, height: 25, }} source={require('../../src/image/cancel.png')} />
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </Modal >

        </>
    )
}
const requestreject = reduxForm({
    form: "RequestrejectForm",
    validate
})(RejectModal)

export default connect(null, { send_remrk_reject })(requestreject)