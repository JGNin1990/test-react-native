//login newe
import React, { useContext, } from 'react'
import { Dimensions, StyleSheet, ActivityIndicator, TouchableOpacity, View, Text } from 'react-native';
import { connect, } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import { fetch_loged_user } from '../../src/redux/LoginReducer';
import { useNavigation } from '@react-navigation/core';
import { createNavigationContainerRef } from '@react-navigation/native';
import { AuthContext } from '../../src/components/context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomTextInput from '../../src/components/CustomTextInput';
import { ScrollView } from 'react-native-gesture-handler';
import Slide from '../../src/components/Slide';
export const navigationRef = createNavigationContainerRef()
const { width, height } = Dimensions.get("window")
const Login = (props) => {
    const { logedin, loading } = useContext(AuthContext)
    const navigation = useNavigation();
    const { handleSubmit } = props
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.slider}>
                    <Slide />
                </View>
                <View style={styles.footer}>
                    <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#BFC6FD' }} />
                    <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 75 }}>
                        <Text style={{ fontWeight: '700', color: '#151522', fontSize: 25, marginLeft: 20, fontFamily: 'Mulish-VariableFont_wght', marginTop: 20 }}>Welcome Back!</Text>
                        <Text style={{ color: "black", fontFamily: "Quicksand-Regular", fontSize: 16, bottom: 10, marginLeft: 20, marginTop: 10 }}>Login to your existant account</Text>
                        <Field formname keyboardType name="phone_number" iconname="phone" component={CustomTextInput} placeholder={'Enter Phone Number'} />

                        <Field formname name="password" iconname="lock" component={CustomTextInput} placeholder="Enter Password" secureTextEntry />
                        <TouchableOpacity onPress={handleSubmit(logedin)}
                            style={{
                                backgroundColor: '#A483FF', width: wp('80%'), height: hp('6%'),
                                alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 20, flexDirection: 'row', marginLeft: 35
                            }}>
                            {loading ? (
                                <ActivityIndicator size={30} color={'white'} />)
                                : (
                                    <Text style={{ fontFamily: 'Quicksand-Regular', color: 'white' }} >Login</Text>
                                )

                            }

                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: 'relative', bottom: 0, marginLeft: '30%', }} onPress={() => navigation.navigate('Forgot password')}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', color: '#654EA3', marginTop: 10 }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    slider: {
        height: 0.35 * height, backgroundColor: '#BFC6FD', borderBottomLeftRadius: 75, justifyContent: 'center', alignItems: 'center'
    },
    footer: {
        flex: 1
    }
})


const formwrapp = reduxForm({
    form: "LoginForm",
    validate
})(Login)
export default connect(null, { fetch_loged_user })(formwrapp)

