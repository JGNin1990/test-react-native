import { BASE_URL, DEFAULT_CONFIG } from "../components/common";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const FETCH_CLIENTREQUEST_LIST = 'FETCH_TEAMFETCH_CLIENTREQUEST_LISTMEMBERLIST'
const INITIAL_STATE = {
    client_request_list: []
};

export function fetch_clientrequest_list(id, callback = () => { }) {
    return async (dispatch) => {
        axios.get(`${BASE_URL}/get_clientrequest/${id}`, {
            responseType: 'json',
            headers: {
                'Content-Type': 'multipart/form-data;',
                "Authorization": await AsyncStorage.getItem("token")
            }
        })
            .then(({ data }) => {
                dispatch({
                    type: FETCH_CLIENTREQUEST_LIST,
                    payload: data,
                });

                callback();
            })
            .then(error => console.log(error));
    }
}

export function send_remrk(images, values, callback = () => { }) {
    var remarksuccess = 'remarksuccess';
    return async (dispatch) => {

        let formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            var fileType = images[i].path[images[i].path - 1];
            formData.append(`image[${i}]`, {
                name: images[i].name,
                type: `image/${fileType}`,
                uri: images[i].path

            });
        }
        formData.append('service_team_admin_id', values.by_service_team_member);
        formData.append('date', values.date);
        formData.append('service_team_name', values.service_team_name);
        formData.append('ref_no', values.ref_no);
        formData.append('customer_name', values.customer_name);
        formData.append('customer_id', values.customer_id);
        formData.append('installation_address', values.installation_address);
        formData.append('contact_person', values.contact_person);
        formData.append('contact_telephone', values.contact_telephone);
        formData.append('service_type', values.service_type);
        formData.append('bandwidth', values.bandwidth);
        formData.append('customer_location', values.customer_location);
        formData.append('cable_length', values.cable_length);
        formData.append('fat_box_name', values.fat_box_name);
        formData.append('port_no', values.port_no);
        formData.append('fat_port_tx', values.fat_port_tx);
        formData.append('customer_rx', values.customer_rx);
        formData.append('onu_loss', values.onu_loss);
        formData.append('new_installation', values.new_installation);
        formData.append('ticket_no', values.ticket_no == undefined ? '' : values.ticket_no); //return name:nill
        formData.append('installation', values.installation);
        formData.append('complain_ticket_no', values.complain_ticket_no == undefined ? '' : values.complain_ticket_no);
        formData.append('relocation', values.relocation);
        formData.append('other', values.other == undefined ? '' : values.other);
        formData.append('text_status', values.text_status == undefined ? '' : values.text_status);
        formData.append('text_box', values.text_box == undefined ? '' : values.text_box);
        formData.append('arrival_date_time', values.arrival_date + '-' + values.arrival_time);
        formData.append('complete_date_time', values.complete_date + '-' + values.complete_time);
        formData.append('equipment_installed_replaced', values.equipment_installed_replaced);
        formData.append('serial_no', values.serial_no);
        formData.append('asset_no', values.asset_no);
        formData.append('service_engineer_cmt', values.service_engineer_cmt);
        formData.append('service_engineer_name', values.service_engineer_name);
        formData.append('service_complete_testing', values.service_complete_testing);
        formData.append('customer_cmt', values.customer_cmt);
        formData.append('report_type', 1);
        formData.append('service_team_member_id', values.service_team_member_id)

        axios.post(`${BASE_URL}/update_remark_byclient`, formData,
            {
                responseType: 'json',
                headers: {
                    // "Content-Type": "multipart/form-data",
                    // "Authorization": await AsyncStorage.getItem("token")
                    "Content-Type": "multipart/form-data",
                    "cache-control": "no-cache",
                    "processData": false,
                    "contentType": false,
                    "Authorization": await AsyncStorage.getItem("token")
                }

            })
            .then(({ data }) => {
                if (data.status == 'success') {
                    callback(remarksuccess);

                }
                // alert(JSON.stringify(data))
            })
            .then(error => console.log(error));
    }
}

export function send_remrk_reject(images, values, callback = () => { }) {
    var remarkrejectsuccess = 'remarkrejectsuccess';
    return async (dispatch) => {
        let formData = new FormData();



        if (images && images.length > 0) {
            for (let i = 0; i < images.length; i++) {
                var fileType = images[i].path[images[i].path - 1];
                formData.append(`image[${i}]`, {
                    name: images[i].name,
                    type: `image/${fileType}`,
                    uri: images[i].path

                });
            }
        } else {
            formData.append('image', values.image)
        }
        // formData.append('by_service_team_member', values.by_service_team_member);
        // formData.append('date', values.date);
        formData.append('id', values.id);
        formData.append('service_team_admin_id', values.service_team_admin_id);
        // formData.append('client_id', values.client_id);
        formData.append('date', values.date);
        formData.append('service_team_name', values.service_team_name);
        formData.append('ref_no', values.ref_no);
        formData.append('customer_name', values.customer_name);
        formData.append('customer_id', values.customer_id);
        formData.append('installation_address', values.installation_address);
        formData.append('contact_person', values.contact_person);
        formData.append('contact_telephone', values.contact_telephone);
        formData.append('service_type', values.service_type);
        formData.append('bandwidth', values.bandwidth);
        formData.append('customer_location', values.customer_location);
        formData.append('cable_length', values.cable_length);
        formData.append('fat_box_name', values.fat_box_name);
        formData.append('port_no', values.port_no);
        formData.append('fat_port_tx', values.fat_port_tx);
        formData.append('customer_rx', values.customer_rx);
        formData.append('onu_loss', values.onu_loss);
        formData.append('new_installation', values.new_installation);
        // formData.append('ticket_no', values.ticket_no);
        formData.append('installation', values.installation);
        // formData.append('complain_ticket_no', values.complain_ticket_no);
        formData.append('relocation', values.relocation);
        formData.append('other', values.other);
        formData.append('text_status', values.text_status);
        formData.append('text_box', values.text_box == undefined ? '' : values.text_box);
        formData.append('arrival_date_time', values.arrival_date + '-' + values.arrival_time);
        formData.append('complete_date_time', values.complete_date + '-' + values.complete_time);
        formData.append('equipment_installed_replaced', values.equipment_installed_replaced);
        formData.append('serial_no', values.serial_no);
        formData.append('asset_no', values.asset_no);
        formData.append('service_engineer_cmt', values.service_engineer_cmt);
        formData.append('service_engineer_name', values.service_engineer_name);
        formData.append('service_complete_testing', values.service_complete_testing);
        formData.append('customer_cmt', values.customer_cmt);
        formData.append('report_type', 0);
        formData.append('date', values.date)
        formData.append('service_team_member_id', values.service_team_member_id)
        formData.append('old_fatport', values.old_fatport)

        axios.post(`${BASE_URL}/reject_servicereport`, formData,
            {
                responseType: 'json',
                headers: {
                    // 'Content-Type': 'multipart/form-data;',
                    // "Authorization": await AsyncStorage.getItem("token")
                    "Content-Type": "multipart/form-data",
                    "cache-control": "no-cache",
                    "processData": false,
                    "contentType": false,
                    "Authorization": await AsyncStorage.getItem("token")
                }

            })
            .then(({ data }) => {
                console.log('data', data);
                if (data.status == 'success') {
                    callback(remarkrejectsuccess);

                }


            })
            .then(error => console.log(error));
    }
}

const Client_requestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CLIENTREQUEST_LIST:
            return { ...state, client_request_list: action.payload };
        default:
            return state
    }
};

export default Client_requestReducer