import { View, Text } from 'react-native'
import React from 'react'
import SelectPicker from 'react-native-form-select-picker';

export default function FatBoxSelect(props) {
    const { options, input, titleText, oldvalue, meta } = props
    const test = options.map((value) => value)
    const select_value = input.value
    const Rendererror = ({ touched, error }) => {
        if (touched && error) {
            return (
                <Text style={{ color: 'red' }}>{error}</Text>
            )
        }
    }
    return (
        <>
            <SelectPicker
                onValueChange={input.onChange}
                style={{
                    borderColor: 'black',
                    // backgroundColor: '#5da7ec',
                    borderWidth: 0.6,
                    width: '100%',
                    borderRadius: 15,
                    // marginLeft: 20
                }}
                titleText={titleText}
                //   defaultValue={oldvalue}
                onSelectedStyle={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', }}
                placeholder={oldvalue}
                placeholderStyle={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', }}
                doneButtonTextStyle={{ fontFamily: 'Quicksand-Regular', color: '#8D8B8B', }}


            >


                {Object.values(test).map((val, index) => (
                    <SelectPicker.Item label={val.box_name} value={val.id} key={val.id} />
                ))}

            </SelectPicker>
            {Rendererror(meta)}
        </>
    )
}