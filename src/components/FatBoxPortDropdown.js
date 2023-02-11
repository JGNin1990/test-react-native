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

export default function FatBoxPortDropdown(props) {
    return (
        <>

            <SelectDropdown
                {...props}
                data={props.fatbox_portlist}
                onSelect={(selectedItem, index) => {
                    // props.call_fatboxport()
                    props.input.onChange(selectedItem.id)

                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.box_port
                }}
                rowTextForSelection={(item, index) => {
                    return item.box_port
                }}
                dropdownStyle={{ width: '90%', marginLeft: 6, }}
                buttonTextStyle={{ color: 'black', fontFamily: 'Quicksand-Regular' }}
                buttonStyle={{ width: '91%', left: 13, borderRadius: 15, marginBottom: 15, backgroundColor: props.ediitable ? '#D8D8D8' : '#e6e6e6' }}
                defaultButtonText={props.oldvalue ? props.oldvalue : props.labelname}
                dropdownIconPosition='left'
                disabled={props.ediitable ? true : false}
            />
            {Rendererror(props.meta)}
        </>
    )
}