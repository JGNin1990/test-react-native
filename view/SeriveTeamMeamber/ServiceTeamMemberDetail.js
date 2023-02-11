import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { PHOTO_URL } from '../../src/components/common'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const width = Dimensions.get('window').width
const defaultimage = require('../../src/image/user.png')
const adminimage = require('../../src/image/user1.png')
const phoneimage = require('../../src/image/telephone.png')
const email = require('../../src/image/email.png')
const team = require('../../src/image/team.png')
const profile = require('../../src/image/account.png');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ServiceTeamMemberDetail(props) {

    const service_list = props.route.params.value
    const Tab = createMaterialTopTabNavigator();

    const MemenerDetail = (props) => {
        return (
            <View style={{ backgroundColor: "white", height: hp(100), padding: 10, flex: 1, }}>
                <View style={{ marginTop: 40 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#707070', fontSize: 15, fontWeight: '700' }}>Name :</Text>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>{props.memberdetail.name}</Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <Text style={{ color: '#707070', fontSize: 15, fontWeight: '700' }}>Phone Number :</Text>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>{props.memberdetail.phone} </Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <Text style={{ color: '#707070', fontSize: 15, fontWeight: '700', }}>Email :</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>{props.memberdetail.email} </Text>
                    </View>
                </View>

            </View >
        )
    }

    const AdminDetail = (props) => {
        return (
            <View style={{ backgroundColor: "white", height: hp(100), padding: 10 }}>
                <View style={{ marginTop: 40 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10, marginLeft: 20, marginRight: 20 }}>
                        <Text style={{ color: '#707070', fontSize: 15, fontWeight: '700' }}>Name :</Text>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>{props.memberdetail.service_admin.name}</Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <Text style={{ color: '#707070', fontSize: 15, fontWeight: '700' }}>Phone Number :</Text>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>{props.memberdetail.service_admin.phone} </Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginVertical: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}>
                        <Text style={{ color: '#707070', fontSize: 15, fontWeight: '700', }}>Email :</Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={{ color: '#000000', fontSize: 16, fontWeight: '700' }}>{props.memberdetail.service_admin.email} </Text>
                    </View>
                </View>

            </View >
        )
    }
    return (
        <View style={{ backgroundColor: 'white', height: '100%', }}>

            <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 20 }}>
                <View >
                    {service_list.photo ?
                        <Image
                            resizeMode="cover"
                            source={{ uri: `${PHOTO_URL}` + '/service_team_members/' + service_list.photo }}

                            style={{ width: 90, height: 90, marginTop: 15, borderRadius: 20 }}

                        />
                        :
                        <Image
                            resizeMode="cover"
                            source={profile}

                            style={{ width: 90, height: 90, marginTop: 15, borderRadius: 20 }}

                        />
                    }

                </View>

                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{
                        color: '#302A68', fontWeight: 'bold', fontSize: 24, fontFamily: 'Mulish-VariableFont_wght'
                    }}>
                        {service_list.name}
                    </Text>
                    <Text style={{
                        color: '#302A68',
                        fontSize: 15,
                        fontWeight: '500'
                    }}>
                        {service_list.service_admin.name}'s Service Team
                    </Text>
                </View>


            </View>
            <View style={{ flex: 1, marginTop: 20 }}>

                <Tab.Navigator
                    screenOptions={{
                        tabBarIndicatorStyle: { backgroundColor: '#302a69', marginLeft: 10 },
                        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                        tabBarActiveTintColor: "#8993DA",
                        tabBarInactiveTintColor: "#9E9E9E",
                        tabBarStyle: { height: 55, justifyContent: 'center' },
                        tabBarIndicatorContainerStyle: { width: '100%', width: '87%' }

                    }}
                >
                    <Tab.Screen name="Member Detail" component={() => <MemenerDetail memberdetail={service_list} />}

                    />
                    <Tab.Screen name="Admin Detail" component={() => <AdminDetail memberdetail={service_list} />} />
                </Tab.Navigator>
            </View>
        </View>



    )
}

