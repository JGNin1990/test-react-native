import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input, Icon } from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import moment from 'moment';

const Rendererror = ({ touched, error }) => {
    if (touched && error) {
        return (
            <Text style={{
                color: 'red', marginLeft: 20
            }}>{error}</Text>
        )
    }
}

export default function DatePicker(props) {
    const { oldvalue, input, pressshowdate, showdate_picker, date_selected, pickup_date, datemode, paymentdate, payment_date_picker } = props
    pickup_date ? input.onChange(moment(pickup_date).format('l')) : oldvalue ? input.onChange(oldvalue) : ''
    return (
        <View>
            {payment_date_picker == 'payment_date_picker' ?
                <TouchableOpacity onPress={pressshowdate}

                    style={{ width: wp(91), marginLeft: 13, backgroundColor: '#e3e3e3', height: hp(5), borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 14 }}>
                    <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>{pickup_date ? moment(pickup_date).format('l') : oldvalue ? oldvalue : 'Select Date'}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={pressshowdate}

                    style={{ width: wp(45), backgroundColor: '#e3e3e3', height: hp(5), borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 14 }}>
                    <Text style={{ color: 'black', fontFamily: 'Quicksand-Regular' }}>{pickup_date ? moment(pickup_date).format('l') : oldvalue ? oldvalue : 'Select Date'}</Text>
                </TouchableOpacity>
            }

            {showdate_picker && (
                <DateTimePicker

                    value={pickup_date ? pickup_date : new Date()}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    is24Hour={true}
                    onChange={date_selected}

                // style={{
                //     justifyContent: 'center',
                //     alignItems: 'flex-start',
                //     width: 320,
                //     height: 260,
                //     display: 'flex',
                // }}
                // style={{
                //     width: '95%',
                //     left: 20,
                //     marginTop: 20
                // }}

                />
            )}
            {Rendererror(props.meta)}
        </View>
    )
}