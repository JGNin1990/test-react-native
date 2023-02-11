import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Field, reduxForm } from 'redux-form'
import CustomTextInput from '../../src/components/CustomTextInput'
import { connect } from 'react-redux'
import validate from './validate'
import { update_password } from '../../src/redux/Team_memberReducer'
import { AuthContext } from '../../src/components/context'
import SweetAlert from 'react-native-sweet-alert'
const ChangePasswordScreen = (props) => {
    const { authstate, removetoken } = useContext(AuthContext)

    const userid = props.route.params

    const btnsend = (values) => {
        // alert(JSON.stringify(values))

        const updatedata = Object.assign({}, values, {
            id: userid,
            oldpassword: values.oldpassword,
            newpassword: values.newpassword

        })
        props.update_password(updatedata, (type) => {
            if (type == 'updatesuccess') {
                removetoken()
            } else {
                SweetAlert.showAlertWithOptions({
                    title: 'Your Old Password Is Incorrect',
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'error',
                    cancellable: true
                },
                    callback => console.log('callback'));

                // props.navigation.navigate('Main');
            }
        })

    }




    return (
        <View style={{ backgroundColor: 'white', }}>
            <View style={{
                justifyContent: 'center', marginTop: 40
            }}>
                <Field formname name="oldpassword" iconname="user" component={CustomTextInput} placeholder='Enter Old Password' secureTextEntry />

                <Field formname name="newpassword" iconname="user" component={CustomTextInput} placeholder='Enter New Password' secureTextEntry />

                <Field formname name="cpassword" iconname="user" component={CustomTextInput} placeholder='Enter Re-type New Password' secureTextEntry />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                    <TouchableOpacity onPress={props.handleSubmit(btnsend)} style={{
                        width: '90%',

                    }} >
                        <View style={{
                            backgroundColor: '#f7b840',
                            // width: '50%',
                            height: 45,
                            // marginLeft: 10,
                            borderRadius: 10,
                            justifyContent: 'center',


                        }} >
                            <Text style={{ textAlign: 'center', color: 'white' }}>Update Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
function maptoprops(state) {
    return {

    }
}

const PasswordScreen = reduxForm({
    form: "ChangePasswordScreenFrom",
    validate

})(ChangePasswordScreen)
export default connect(maptoprops, { update_password })(PasswordScreen)