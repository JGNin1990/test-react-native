import { View, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import React from 'react'

const Rendererror = ({ touched, error }) => {
    if (touched && error) {
        return (
            <Text style={{
                color: 'red', marginLeft: 20
            }}>{error}</Text>
        )
    }
}

export default function TimePicker(props) {
    const { oldvalue, input, press_show_time, show_time, time_selected, get_time } = props
    get_time ? input.onChange(moment(get_time).format('LT')) : oldvalue ? input.onChange(oldvalue) : ''
    // console.log('time', moment(get_time).format('LT'));
    return (
        <View>
            <TouchableOpacity onPress={press_show_time} style={{ width: wp(45), backgroundColor: '#e3e3e3', height: hp(5), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>{get_time ? moment(get_time).format('LT') : oldvalue ? oldvalue : 'Select Time'}</Text>
            </TouchableOpacity>

            {show_time && (
                <DateTimePicker
                    value={get_time ? get_time : new Date(Date.now())}
                    mode={'time'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={false}
                    onChange={time_selected}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: 320,
                        height: 260,
                        display: 'flex',
                    }}
                />
            )}
            {Rendererror(props.meta)}
        </View>
    )
}