import { View, Text, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import SelectPicker from 'react-native-form-select-picker';

export default function FatBoxPortSelect(props) {
    const { portoptions, input, titleText, oldvalue, meta } = props
    var size = portoptions && Object.keys(portoptions).length;
    const Rendererror = ({ touched, error }) => {
        if (touched && error) {
            return (
                <Text style={{ color: 'red' }}>{error}</Text>
            )
        }
    }

    const showalert = () => {
        ToastAndroid.showWithGravity(
            "All Your Base Are Belong To Us",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }
    return (
        <>
            {/* {portoptions.length > 0 ? */}

            <SelectPicker
                onValueChange={input.onChange}
                // disabled={true}
                style={{
                    borderColor: 'black',
                    // backgroundColor: '#5da7ec',
                    borderWidth: 0.6,
                    width: '100%',
                    borderRadius: 15,
                    // marginLeft: 20
                }}
                titleText={size > 0 ? titleText : "No Data"}
                //   defaultValue={oldvalue}
                onSelectedStyle={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', }}
                placeholder={oldvalue}
                placeholderStyle={{ color: '#8D8B8B', fontFamily: 'Quicksand-Regular', }}
                doneButtonTextStyle={{ fontFamily: 'Quicksand-Regular', color: '#8D8B8B', }}

            >

                {portoptions && Object.values(portoptions).map((val, index) => (


                    <SelectPicker.Item label={val.box_port} value={val.box_port} key={val.id} />
                ))}

            </SelectPicker>

            {Rendererror(meta)}
        </>
    )
}