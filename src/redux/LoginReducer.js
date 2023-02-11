import { BASE_URL, DEFAULT_CONFIG } from "../components/common";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import SweetAlert from 'react-native-sweet-alert';
export const FETCH_LOGEDUSER = 'FETCH_LOGEDUSER'
export const KILLED_USER = 'KILLED_USER'
export const FETCH_USER_BBY_PHONENO = 'FETCH_USER_BBY_PHONENO'
export const FETCHED_TOKEN = 'FETCHED_TOKEN'
const INITIAL_STATE = {
    isLoggedIn: false,
    loged_user: [],
    forget_user: [],
    token: ''
};



export const authicated_user = (data) => {
    return (dispatch) => {
        dispatch({
            type: FETCH_LOGEDUSER,
            payload: data,
        });
    }
}

export function fetch_loged_user(values, callback = () => { }) {
    var Loginsuccess = 'Loginsuccess';
    var loginerror = 'loginerror';


    return (dispatch) => {
        axios.post(`${BASE_URL}/service_team_member_login`, values)
            .then(async ({ data }) => {
                // if (data.status == 'success') {
                try {
                    await AsyncStorage.setItem('token', data.access_token)
                    await AsyncStorage.setItem('id', data.data.id.toString())
                    await AsyncStorage.setItem('role', data.data.role.toString())

                } catch (e) {
                    // saving error
                }
                dispatch({
                    type: FETCH_LOGEDUSER,
                    payload: data.data,
                    // type: FETCHED_TOKEN,
                    // payload: await AsyncStorage.getItem('token'),
                });

                // dispatch(authicated_user(data.data))
                callback(Loginsuccess)
                // } else {
                //     callback(loginerror)
                // }

            })
            .then(error => console.log(error));
    }
}
export function logout_user(values, callback = () => { }) {
    var logoutsuccess = 'logoutsuccess';
    return (dispatch) => {
        axios.post(`${BASE_URL}/service_team_member_logout`, values, {
            responseType: 'json',
            headers: {
                'Content-Type': 'multipart/form-data;',
                // "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                if (data.status == 'success') {
                    dispatch({
                        type: KILLED_USER,
                    });
                    callback(logoutsuccess)
                }

            })
            .then(error => console.log(error));
    }

}

export function get_phoneno_By_forget(values, callback = () => { }) {
    var Loginsuccess = 'Loginsuccess';
    return (dispatch) => {
        axios.post(`${BASE_URL}/get_phoneno_by_forget/${values}`)
            .then(({ data }) => {
                // console.log('response code>>>', data.data.random_code)

                if (data.status == 'success') {

                    dispatch({
                        type: FETCH_USER_BBY_PHONENO,
                        payload: data.data[0]
                    });
                    callback(data.data.random_code)
                } else {
                    callback('fail')
                }



            })
            .then(error => console.log(error));
    }

}

export function update_password(values, callback = () => { }) {
    var updatepassword = 'updatepassword';
    return (dispatch) => {
        axios.post(`${BASE_URL}/update_password`, values)
            .then(({ data }) => {
                if (data.status == 'success') {


                    callback(updatepassword)
                }



            })
            .then(error => console.log(error));
    }

}

export function Init() {

    return async dispatch => {
        let token = await AsyncStorage.getItem('token')
        dispatch({
            type: FETCHED_TOKEN,
            payload: token,
        });

    };

}

const Login_Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGEDUSER:
            return { ...state, loged_user: action.payload, isLoggedIn: true };
        case FETCH_USER_BBY_PHONENO:
            return { ...state, forget_user: action.payload };
        case FETCHED_TOKEN:
            return { ...state, token: action.payload };
        case KILLED_USER:
            return INITIAL_STATE
        default:
            return state
    }
}

export default Login_Reducer;