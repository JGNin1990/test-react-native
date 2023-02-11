import { BASE_URL, DEFAULT_CONFIG } from "../components/common";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FETCH_PAYMENTSTATUS = 'FETCH_PAYMENTSTATUS'

const INITIAL_STATE = {
    payment_list: []
};
export function fetch_paymentstatus(values, callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/all_paymentmethod`,
            {
                responseType: 'json',
                headers: {
                    // 'Content-Type': 'multipart/form-data;',
                    "Authorization": await AsyncStorage.getItem("token")
                }

            })
            .then(({ data }) => {
                dispatch({
                    type: FETCH_PAYMENTSTATUS,
                    payload: data.data,
                });


            })
            .then(error => console.log(error));
    }
}

const PaymentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PAYMENTSTATUS:
            return { ...state, payment_list: action.payload };
        default:
            return state
    }
};
export default PaymentReducer