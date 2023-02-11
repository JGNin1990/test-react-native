import { BASE_URL, DEFAULT_CONFIG } from "../components/common";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FETCH_ALL_WITHDRWALS = 'FETCH_TEAMFETCH_ALL_WITHDRWALSMEMBERLIST'
export const FETCH_PORT_BOX = 'FETCH_PORT_BOX'
export const FETCH_FATPORT_BOX = 'FETCH_FATPORT_BOX'
export const KILLED_FATBOXPORT = 'FETCH_FATPORT_BOX'
const INITIAL_STATE = {
    all_withdrawal: [],
    all_fatbox: [],
    all_fatbox_port: []
};

export function fetch_all_withdrawals(id, callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/get_allwithdrawals/${id}`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: FETCH_ALL_WITHDRWALS,
                    payload: data.data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}

export function fetch_fetbox(callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/get_all_fatbox`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                // console.log('FETCH_PORT_BOX', data);
                dispatch({
                    type: FETCH_PORT_BOX,
                    payload: data.data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}

export function fetch_fatbox_ports(id, callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/get_all_fatbox_port/${id}`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: FETCH_FATPORT_BOX,
                    payload: data.data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}

export function killfatboxport(props, callback = () => { }) {
    return (dispatch) => {
        dispatch({
            type: KILLED_FATBOXPORT,

        });
    }
}



const WithDrawalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_WITHDRWALS:
            return { ...state, all_withdrawal: action.payload };
        case FETCH_PORT_BOX:
            return { ...state, all_fatbox: action.payload };
        case FETCH_FATPORT_BOX:
            return { ...state, all_fatbox_port: action.payload };
        case KILLED_FATBOXPORT:
            return INITIAL_STATE;

        default:
            return state
    }
};

export default WithDrawalReducer