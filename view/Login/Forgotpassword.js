import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { connect } from 'react-redux';
import { get_phoneno_By_forget } from '../../src/redux/LoginReducer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AuthContext } from '../../src/components/context';
// import { useNavigation } from '@react-navigation/core';
import { reduxForm } from 'redux-form';
import { styles } from './LoginStyle';
import { validate } from './validate'
import { useNavigation } from "@react-navigation/native";

const Forgotpassword = (props) => {
    const { goBack } = useNavigation();
    const { getshow } = useContext(AuthContext)
    const [phone, setPhone] = useState()
    const [errortext, setErrortext] = useState("");
    const [phoneerror, setPhoneerror] = useState()
    const arrow = require('../../src/image/arrow.png')


    const phonevalidator = () => {
        if (!phone) {
            setPhoneerror("Phone Number Field required");

        } else {
            setPhoneerror('')
        }
    }

    const btnsubmit = () => {
        // alert(JSON.stringify(parseInt(phone)))
        // if (phone == null) {
        //     setPhoneerror("Phone Number Field required");
        //     // alert("require")
        //     return;
        // }
        // else {
        //     setPhoneerror();
        // }
        props.get_phoneno_By_forget(phone, (code) => {
            if (code == 'fail') {

                setPhoneerror("Phone Number not same");
                // setPhone('')
                // setErrortext("phone file")
                // alert('not same')
                // return;

            }
            else {
                setPhoneerror('')
                getshow(true)
                props.navigation.navigate('OTP', { code, phone })
            }


        })

    }
    return (
        <View style={{ backgroundColor: 'white', flex: 1, }} >
            <View style={{ width: 30, height: 30, borderRadius: 10, marginLeft: 20, marginTop: 40 }} onStartShouldSetResponder={goBack}>
                <Image source={arrow} style={{ width: 30, height: 30, }} />

            </View>

            <View style={{ marginTop: 50, }}>

                <Text style={styles.phonenumbertext}>Forgot Password?</Text>
                <Text style={styles.verifysubtext}>We will send You the 4digit verification code.</Text>
                <View>


                    <TextInput

                        placeholder='Enter Phone Number'
                        placeholderTextColor="#8D8B8B"
                        style={styles.textinputStyle}
                        onChangeText={value => setPhone(value)}
                        keyboardType="phone-pad"

                    />

                    <Text
                        style={styles.codeerror}
                    >
                        {phoneerror ? phoneerror : ""}
                    </Text>

                </View>

                <TouchableOpacity style={{ width: '90%', marginLeft: 18 }} onPress={() => btnsubmit()} >
                    <View style={styles.getOptbuttonStyle} >
                        <Text style={{ textAlign: 'center', color: 'white' }}>GET OTP</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const forgotpasswrap = reduxForm({
    form: "LoginForm",
    validate
})(Forgotpassword)
export default connect(null, { get_phoneno_By_forget })(forgotpasswrap)
