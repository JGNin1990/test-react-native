import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../src/components/TextInput'
import { connect } from 'react-redux'
import { update_password } from '../../src/redux/LoginReducer'
import SweetAlert from 'react-native-sweet-alert';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './LoginStyle'
import CustomTextInput from '../../src/components/CustomTextInput'
import validate from './validate'
import { useNavigation } from "@react-navigation/native";

const Newpasswordform = (props) => {
    const { goBack } = useNavigation();
    const arrow = require('../../src/image/arrow.png')


    const btnsubmit = (values) => {

        const userlist = Object.assign({}, values, {
            phone: props.route.params,
            password: values.password,

        })

        props.update_password(userlist, (type) => {
            if (type == 'updatepassword') {
                SweetAlert.showAlertWithOptions({
                    title: "Update Password Successfully",
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'success',
                    cancellable: true
                },
                    callback => console.log('callback'));

                props.navigation.navigate('login');
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
        <View style={styles.passcontainer} >

            <View style={{ width: 30, height: 30, borderRadius: 10, marginLeft: 20, marginTop: 40 }} onStartShouldSetResponder={goBack}>
                <Image source={arrow} style={{ width: 30, height: 30, }} />

            </View>
            <View style={{ marginTop: 50 }}>
                {/* <Text style={{ color: '#302A68', fontWeight: 'bold', fontSize: wp(6), color: '#f7b840', marginBottom: 10, marginLeft: 20 }}>Create New Password</Text> */}
                <Text style={styles.phonenumbertext}>Create New Password</Text>
                <View >
                    <Field formname name="password" iconname="lock" component={CustomTextInput} placeholder="Enter New Password" secureTextEntry form />
                </View>
                <TouchableOpacity style={{ width: '90%', marginLeft: 20, marginTop: 20 }} onPress={props.handleSubmit(btnsubmit)}>
                    <View style={styles.passbutton} >
                        <Text style={{ textAlign: 'center', color: 'white' }}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
const NewpasswordForm = reduxForm({
    form: "Newpassword",
    validate
})(Newpasswordform)
export default connect(null, { update_password })(NewpasswordForm)
