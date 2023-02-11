import React from "react";
import { Input, } from "react-native-elements";
import { Icon } from 'react-native-elements';
import moment from 'moment';
import { StyleSheet, TouchableOpacity, Text, View, Button, Image, } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
const arrow = require('../../src/image/down-arrow.png');

const DatePickerInput = ({ pickershow, showPicker, finaldate, onChangevalue, meta, input, time_abel, starttimeonchange, showtests, testdate, showTimepicker, selecttime, hidedate, gatvalue, showdate, onConfirm, visible, label, ...inputProps }) => {
    input.onChange(moment(finaldate).format("YYYY-MM-DD"))

    return (
        <>
            {/* <View style={{ flex: 1, flexDirection: 'row', }}> */}
            {/* <Button title="Choose Payment Date" color="purple" onPress={showPicker} style={{ width: '50%' }} /> */}
            <TouchableOpacity onPress={showPicker} style={{ justifyContent: 'center', flex: 1, height: 50, width: 220, marginTop: 18, backgroundColor: '#302a69', marginLeft: 10, borderRadius: 25, marginBottom: 20 }}>
                <Text style={{ color: 'white', marginLeft: 15, fontFamily: 'Quicksand-Regular' }}>Choose Payment Date</Text>
                <Image
                    resizeMode="cover"
                    source={arrow}
                    style={{ width: 20, height: 20, position: "absolute", top: 0, right: 0, marginTop: 17, marginRight: 9, }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Input
                    errorStyle={{ height: 0 }}
                    labelStyle={styles.labelStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIconContainerStyle={styles.leftIconContainerStyle}
                    leftIcon={
                        <Icon
                            name='clock-o'
                            type='font-awesome'
                            color='#4a8dcb'
                            size={22}
                        />
                    }
                    inputStyle={styles.inputStyle}
                    label={time_abel}
                    value={moment(finaldate).format("YYYY-MM-DD")}
                    // onFocus={showPicker}
                    onChangeText={input.onChange}
                />

                {pickershow ?
                    <DateTimePicker
                        value={finaldate}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        onChange={onChangevalue}
                        style={{
                            width: 320,
                            height: 260,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                        }}
                    />
                    :
                    <></>
                }
                {/* <Text style={{ color: "red" }}>{finaldate}</Text> */}
            </TouchableOpacity>
            {/* </View> */}

        </>


    )
}
export default DatePickerInput

const styles = StyleSheet.create({
    labelStyle: {
        marginBottom: 6,
        fontSize: 13,
    },
    inputContainerStyle: {
        borderWidth: 0.8,
        borderColor: "#c9c9c9",
        borderRadius: 15,
        height: 50,
    },
    leftIconContainerStyle: {
        height: 25,
        width: 48,
        borderRightWidth: 0.8,
        borderColor: "#c9c9c9",
    },
    inputStyle: {
        marginLeft: 10,
        fontSize: 13,
    },
    inputDate: {
        width: "100%",
    },
})
