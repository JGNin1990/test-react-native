import { View, Text, ScrollView, TouchableOpacity, Image, _View, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { fetch_teammember_list } from '../../src/redux/Team_memberReducer';
import styles from './ServiceTeamMemeber_Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PHOTO_URL } from '../../src/components/common';
import { useFocusEffect } from '@react-navigation/native';
const email = require('../../src/image/email.png')
const telephone = require('../../src/image/telephone.png')
const profile = require('../../src/image/account.png');

const ServiceTeamMemberList = (props) => {

    // useEffect(() => {
    //     AsyncStorage.getItem("id").then((id) => {
    //         props.fetch_teammember_list(id)
    //     })

    // }, [])

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem("id").then((id) => {
                if (id) {
                    props.fetch_teammember_list(id)

                }
            })

            // return () => unsubscribe();
        }, [])
    );
    return (
        <ScrollView>
            <View style={{ padding: 10, flex: 1 }}>
                <View style={{ margin: 5, padding: 10 }}>
                    <Text style={{ color: '#302A68', fontFamily: 'Mulish-VariableFont_wght', fontWeight: 'bold', fontSize: 18, }}>Team Member List</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: 'space-between'
                }}>

                    {props.all_memberlist.length > 0 ?
                        props.all_memberlist.map((value, key) => {
                            return (
                                <View onStartShouldSetResponder={() =>
                                    props.navigation.navigate('Service Team Member List Detail', { value })
                                } style={{ backgroundColor: '#302a69', marginTop: 20, width: '48%', borderRadius: 13 }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
                                        {value.photo ?
                                            <Image
                                                resizeMode="cover"
                                                source={{ uri: `${PHOTO_URL}` + '/service_team_members/' + value.photo }}

                                                style={{ width: 50, height: 50, borderRadius: 160 }}

                                            />
                                            :
                                            <Image
                                                resizeMode="cover"
                                                source={profile}

                                                style={{ width: 50, height: 50, borderRadius: 160 }}

                                            />
                                        }
                                        {/* <Text style={{ fontSize: 15, color: 'white' }} >{value.name}</Text> */}

                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                                        <Text style={{ fontSize: 15, color: 'white', alignItems: 'center' }} >{value.name}</Text>

                                    </View>

                                    <View
                                        style={{
                                            width: '90%',
                                            height: 7,
                                            borderWidth: 0,
                                            borderBottomWidth: 1,
                                            borderBottomColor: 'white',
                                            left: 8
                                        }}
                                    />

                                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                        <Image
                                            resizeMode="contain"
                                            source={email}
                                            style={{ width: 15, height: 20, borderRadius: 30, marginLeft: 7, marginTop: 2 }}
                                        />
                                        <Text style={{ marginLeft: 10, fontSize: 11, color: 'white' }}>{value.email}</Text>



                                    </View>

                                    <View style={{ flexDirection: 'row', marginTop: 10, paddingBottom: 20 }}>
                                        <Image
                                            resizeMode="contain"
                                            source={telephone}
                                            style={{ width: 15, height: 20, borderRadius: 30, marginLeft: 7 }}
                                        />
                                        <Text style={{ fontSize: 11, marginLeft: 10, color: 'white' }}>{value.phone}</Text>
                                    </View>

                                </View>
                            )
                        })
                        :
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 60 }}>
                            <LottieView
                                source={require("../../src/image/no-data.json")}
                                autoPlay style={{ width: 200, height: 200 }}
                            />
                        </View>
                    }

                </View >
            </View >
        </ScrollView >
    )
}
const stateToProps = state => {
    return {
        all_memberlist: state.team_member.team_member_list
    };
}
export default connect(stateToProps, { fetch_teammember_list })(ServiceTeamMemberList)