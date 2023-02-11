import { View, Text } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
const Rendererror = ({ oldvalue, touched, error }) => {
    if (touched && error) {
        return (
            <Text style={{
                color: 'red', marginLeft: 20,
            }}>{error}</Text>
        )
    }
}
const SelectDropdownUI = (props) => {
    return (
        props.serviceui ?
            <>

                <SelectDropdown
                    {...props}
                    data={props.all_withdrawals_result}

                    onSelect={(selectedItem, index) => {
                        props.input.onChange(selectedItem)

                    }}

                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    dropdownStyle={{ width: '90%', marginLeft: 6, }}
                    buttonTextStyle={{ color: 'black', fontFamily: 'Quicksand-Regular' }}
                    buttonStyle={{ width: '91%', left: 13, borderRadius: 15, marginBottom: 15, backgroundColor: props.ediitable ? '#d1d1d1' : '#e6e6e6' }}
                    // defaultButtonText='Select Serial Number'
                    defaultButtonText={props.oldvalue ? props.oldvalue : props.labelname}
                    dropdownIconPosition='left'
                    disabled={props.editable ? true : false}
                />

                {Rendererror(props.meta)}
            </>
            :
            <>

                <SelectDropdown
                    {...props}
                    data={props.all_payment_status_list}
                    onSelect={(selectedItem, index) => {

                        props.input.onChange(selectedItem.id)

                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.name
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.name
                    }}
                    dropdownStyle={{ width: '90%' }}
                    buttonTextStyle={{ color: 'black', fontFamily: 'Quicksand-Regular' }}
                    buttonStyle={{ width: '95%', left: 10, borderRadius: 15 }}
                    defaultButtonText='Select Payment Method'
                    dropdownIconPosition='left'
                />
                {Rendererror(props.meta)}
            </>


    )
}
export default SelectDropdownUI