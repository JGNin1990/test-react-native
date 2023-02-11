import React, { useEffect, useState, } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../view/Login/Login';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from '../src/components/context';
import { BASE_URL } from '../src/components/common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Forgotpassword from '../view/Login/Forgotpassword';
import SweetAlert from 'react-native-sweet-alert';
import Otp from '../view/Login/Otp';
import Newpasswordform from '../view/Login/Newpasswordform';
import { navigationRef } from './Rootnavigation';
import { useNavigation } from '@react-navigation/core';
// import { MMKV } from 'react-native-mmkv'
// const storage = new MMKV()

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>



            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Forgot password"
                component={Forgotpassword}
                options={{
                    headerShown: false,
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#302a69',
                    },
                }}
            />

            <Stack.Screen
                name="OTP"
                component={Otp}
                options={{
                    //  headerShown: false,
                    // headerLeft: () => false,
                    // headerBackVisible: false,
                    headerShown: false,
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#302a69',
                    },
                }}
            />

            <Stack.Screen
                name="Create New Password"
                component={Newpasswordform}
                options={{
                    //  headerShown: false,
                    // headerLeft: () => false,
                    // headerBackVisible: false,
                    headerShown: false,
                    headerTintColor: '#ffffff',
                    headerStyle: {
                        backgroundColor: '#302a69',
                    },
                }}
            />
        </Stack.Navigator>

    )
}
const AuthNavigation = () => {
    const [authstate, setAuthState] = useState()
    const [lang, setLang] = useState('en')
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    // const navigation = useNavigation();
    useEffect(() => {
        getAuthState();
        getlang()
    }, [])

    const logedin = (values, callback = () => { }) => {
        setLoading(true)
        axios.post(`${BASE_URL}/service_team_member_login`, values)
            .then(async ({ data }) => {
                setLoading(false)
                if (data.status == 'success') {
                    // storage.set('token', data.access_token)
                    // storage.set('id', data.data.id)
                    // storage.set('role', data.data.role)
                    try {
                        await AsyncStorage.setItem('token', data.access_token)
                        await AsyncStorage.setItem('id', data.data.id.toString())
                        await AsyncStorage.setItem('role', data.data.role.toString())
                        setAuthState(await AsyncStorage.getItem('token'))

                        SweetAlert.showAlertWithOptions({
                            title: "Login Successfully",
                            subTitle: '',
                            confirmButtonTitle: 'OK',
                            confirmButtonColor: '#000',
                            otherButtonTitle: 'Cancel',
                            otherButtonColor: '#dedede',
                            style: 'success',
                            cancellable: true
                        },
                            callback => console.log('loged'));

                    } catch (e) {
                        // saving error
                    }
                } else {
                    SweetAlert.showAlertWithOptions({
                        title: 'Login Invalid',
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
            .then(error => console.log(error));
    }

    const getAuthState = async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            setAuthState(token);
        } catch (err) {
            setAuthState({});
        }
    };

    const removetoken = async () => {
        try {
            const token = await AsyncStorage.clear();
            setAuthState(token);
            SweetAlert.showAlertWithOptions({
                title: "Logout Successfully",
                subTitle: '',
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#000',
                otherButtonTitle: 'Cancel',
                otherButtonColor: '#dedede',
                style: 'success',
                cancellable: true
            },
                callback => console.log('logout'));
        } catch (err) {
            setAuthState({});
        }
    };

    const addlang = async (value) => {
        try {

            await AsyncStorage.setItem('lng', value)
            setLang(value)
        } catch (error) {

        }
    };

    const getlang = async (value) => {
        try {

            await AsyncStorage.getItem('lng')
            setLang(value)
        } catch (error) {

        }
    };

    const getshow = (value) => {
        setShow(value)
        // navigation.navigate('Otp')
    };


    // const authcontext={
    //     authstate,
    //     removetoken:


    // }
    // const context={
    //     authstate
    // }


    if (authstate) {
        return (
            <AuthContext.Provider value={{ authstate, removetoken }}>
                <NavigationContainer>
                    <Navigation />
                </NavigationContainer>
            </AuthContext.Provider>
        )
    } else {
        return (
            <AuthContext.Provider value={{ authstate, logedin, addlang, lang, getshow, show, loading }}>
                <NavigationContainer>
                    <AuthNavigator />
                </NavigationContainer>
            </AuthContext.Provider>
        )
    }


}
export default AuthNavigation