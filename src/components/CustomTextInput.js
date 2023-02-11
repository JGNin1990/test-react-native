import { Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomTextInput = (props) => {

    const { cust_name, teamname, data, editable, multiple, secureTextEntry, meta, placeholder, keyboardType, input, customerno, ticketno, contactperson, contacttelephone, installation_address } = props

    if (input.name == 'asset_no') {
        data ? input.onChange(data) : ''
    }

    if (input.name == 'service_team_name') {
        teamname ? input.onChange(teamname) : ''
    }
    if (input.name == 'customer_name') {
        cust_name ? input.onChange(cust_name) : ''
    }


    if (input.name == 'customer_id') {
        customerno ? input.onChange(customerno) : ''
    }

    if (input.name == 'ticket_no') {
        input.onChange(ticketno)
    }

    if (input.name == 'contact_person') {
        contactperson ? input.onChange(contactperson) : ''
    }

    if (input.name == 'contact_telephone') {
        contacttelephone ? input.onChange(contacttelephone) : ''
    }

    if (input.name == 'installation_address') {
        installation_address ? input.onChange(installation_address) : ''
    }

    const Rendererror = ({ touched, error }) => {
        if (touched && error) {
            return (
                <Text style={{
                    color: 'red', marginLeft: 20
                }}>{error}</Text>
            )
        }
    }
    return (
        <>
            <TextInput
                {...input}
                placeholder={placeholder}
                placeholderTextColor="#8D8B8B"
                style={{
                    borderWidth: 0.5, backgroundColor: editable ? '#e3e1e1' : 'white', borderRadius: 10, width: wp('90%'), marginRight: 15, height: multiple ? hp('10%') : hp('6%'), shadowOffset: { width: 0, height: 15 },
                    shadowOpacity: 0.25,
                    elevation: 3, color: '#8D8B8B', fontFamily: 'Quicksand-Regular', padding: 10, marginLeft: 15, marginBottom: 15, marginTop: 7

                }}
                multiline={multiple && true}
                onChangeText={input.onChange}
                secureTextEntry={secureTextEntry ? true : false}
                keyboardType={keyboardType && "phone-pad"}
                editable={editable ? false : true}

            />
            {Rendererror(meta)}
        </>
    )
}
export default CustomTextInput