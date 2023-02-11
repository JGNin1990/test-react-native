import { View, Text } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

const Rendererror = ({ oldvalue, touched, error }) => {
    if (touched && error) {
        return (
            <Text style={{
                color: 'red', marginLeft: 20,
            }}>{error}</Text>
        )
    }
}

export default function RadioSelect(props) {
    const { input, fun_newinstall, data, oldvalue } = props
    input.onChange(data)
    return (
        <RadioButton.Group onValueChange={e => fun_newinstall(e)} value={oldvalue ? oldvalue : data}>
            {/* */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>Yes</Text>
                    <RadioButton value="1" />
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>No</Text>
                    <RadioButton value="2" />
                </View>
            </View>
            {Rendererror(props.meta)}
        </RadioButton.Group>
        
    )
}