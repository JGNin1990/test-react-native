import { BASE_URL, DEFAULT_CONFIG } from "../components/common";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { call } from "react-native-reanimated";
export const FETCH_TEAMMEMBERLIST = 'FETCH_TEAMMEMBERLIST'
export const FETCH_LOGEDTEAMMEMBER = 'FETCH_LOGEDTEAMMEMBER'
export const UPDATE_USER = 'UPDATE_USER'
export const FETCH_SERVICE_REPORT = 'FETCH_SERVICE_REPORT'
const INITIAL_STATE = {
    team_member_list: [],
    team_member: [],
    service_report_list: []
};

export function fetch_teammember_list(id, callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/service_team_memberByteamid/${id}`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'multipart/form-data;',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: FETCH_TEAMMEMBERLIST,
                    payload: data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}

export function fetch_loged_team_member(id, callback = () => { }) {

    return async (dispatch) => {
        axios.get(`${BASE_URL}/service_team_member/${id}`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'multipart/form-data;',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: FETCH_LOGEDTEAMMEMBER,
                    payload: data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}
export function updateuser(values, callback = () => { }) {
    var updatesuccess = 'updatesuccess';
    var updatefail = 'updatefail';

    return async (dispatch) => {
        let formData = new FormData();

        formData.append('email', values.email);
        formData.append('id', values.id);
        formData.append('name', values.name);
        // formData.append('gender', values.gender == null ? '' : values.gender);
        formData.append('phone', values.phone);
        formData.append('password', values.password ? values.password : null);
        formData.append('role', values.role);
        formData.append('service_team_admin_id', values.service_team_admin_id);
        values.photo && values.photo.fileName ?
            formData.append('image', {
                type: values.photo.type,
                name: values.photo.fileName,
                uri: values.photo.uri,
                width: values.photo.width,
                height: values.photo.height,
                //
                // uri:
                //     Platform.OS === "android" ? values.photo.uri : values.image.uri.replace("file://", "")
            })
            :
            formData.append('image', '')
        axios.post(`${BASE_URL}/update_user`, formData, {
            responseType: 'json',
            headers: {
                "Content-Type": "multipart/form-data",
                "cache-control": "no-cache",
                "processData": false,
                "contentType": false,
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                if (data.status == 'success') {
                    dispatch({
                        type: FETCH_LOGEDTEAMMEMBER,
                        payload: data,
                    });

                    callback(updatesuccess);
                } else {
                    callback(updatefail)
                }

            })
            .then(error => console.log(error));
    }
}

export function update_password(values, callback = () => { }) {
    var updatesuccess = 'updatesuccess';
    var updateerror = 'updateerror';
    return async (dispatch) => {
        axios.post(`${BASE_URL}/service_team_member_updatepassword`, values, {
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                if (data.status == 'success') {
                    callback(updatesuccess)
                } else {
                    callback(updateerror)
                }
            })
            .then(error => console.log(error));
    }
}

export function fetch_service_report_list(callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/get_service_report_list`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                console.log('fetttt :: ', data);
                dispatch({
                    type: FETCH_SERVICE_REPORT,
                    payload: data.data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}


// export const fetch_teammember_list = () => (
//     {
//         type: 'FETCH_TEAMMEMBERLIST',
//         payload: 'redux',
//     }
// );

const Team_memberReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TEAMMEMBERLIST:
            return { ...state, team_member_list: action.payload };
        case FETCH_LOGEDTEAMMEMBER:
            return { ...state, team_member: action.payload };
        case FETCH_SERVICE_REPORT:
            return { ...state, service_report_list: action.payload };
        default:
            return state
    }
};

export default Team_memberReducer