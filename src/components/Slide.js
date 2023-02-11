import { View, Text, Image } from 'react-native'
import React from 'react'
const logo = require('../../asset/Home/logo1.png')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Slide() {
    return (
        <View style={{ flex: 1, }}>
            <View >
                <Image
                    resizeMode="contain"
                    source={logo}
                    style={{
                        width: wp(70), height: hp(35), borderRadius: 63,
                    }}
                />
            </View>
        </View>
    )
}