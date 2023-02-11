import { View, Text, Image, KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState, } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { AuthContext } from '../../src/components/context';
import { get_phoneno_By_forget } from '../../src/redux/LoginReducer';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { styles } from './LoginStyle';
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const cancel = require('@image/cancel.png')
const Otp = (props) => {
    const { show, getshow } = useContext(AuthContext)
    const [showcode, setCode] = useState()
    const [codeError, setcodeError] = useState()
    const phone = props.route.params.phone
    const code = props.route.params.code
    const arrow = require('../../src/image/arrow.png')
    const { goBack } = useNavigation();




    const code_checking = (value) => {
        if (value == code) {
            props.navigation.navigate('Create New Password', phone)
        } else {
            setcodeError('Your code is invalid.')
        }
    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, height: '100%', backgroundColor: 'white', }}
            behavior="padding"
        >
            <View style={styles.otpcontainer} >

                <View style={{ width: 30, height: 30, borderRadius: 10, marginLeft: 20, marginTop: 40 }} onStartShouldSetResponder={goBack}>
                    <Image source={arrow} style={{ width: 30, height: 30, }} />

                </View>

                {/* {show &&
                <View style={styles.otpsubcontainer}>


                    <Text style={styles.codetext} >Your OTP Code is 99</Text>




                </View>
                } */}

                <View style={styles.imgcontainer}>
                    {/* <Text style={{ color: '302A68' }}>OTP</Text> */}
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: wp(6), color: '#302A68', marginBottom: 10, marginLeft: 20 }}>OTP Verification</Text>

                    <Text style={{ color: '#838BA1', fontSize: 17, fontFamily: 'Mulish-VariableFont_wght', fontWeight: 'bold', marginLeft: 20 }}>Enter the code sent to <Text style={{ color: '#f7b840' }}>{phone}</Text></Text>
                    <Text style={{ color: '#838BA1', fontSize: 15, fontFamily: 'Mulish-VariableFont_wght', fontWeight: 'bold', marginTop: 10, marginLeft: 20 }}>Your OTP Code is <Text style={{ color: '#f7b840' }}>{code}</Text></Text>


                    <OTPInputView
                        style={styles.otpinputContainer}
                        pinCount={4}
                        autoFocusOnLoad={false}
                        codeInputFieldStyle={styles.otpinputFieldStyle}
                        codeInputHighlightStyle={{ borderColor: "black", }}
                        onCodeFilled={(code) => code_checking(code)}
                    />

                    <Text style={styles.codeerror}>{codeError ? codeError : ""}</Text>



                </View>

            </View>
        </KeyboardAvoidingView>

    )
}

const Otpwrap = reduxForm({
    form: "OtpForm",
})(Otp)
export default connect(null, { get_phoneno_By_forget })(Otpwrap)