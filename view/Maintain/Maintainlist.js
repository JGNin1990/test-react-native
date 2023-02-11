import { View, Text, ScrollView, Image, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from './MaintainlistStyle'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { fetch_maintainlist } from '../../src/redux/MaintainReducer';
import { connect, useSelector } from 'react-redux';
import * as RootNavigation from '../../navigation/Rootnavigation'
import LottieView from 'lottie-react-native';
import { fetch_loged_team_member, fetch_service_report_list } from '../../src/redux/Team_memberReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator();
const viewicon = require('../../src/image/more.png')
const profile = require('../../src/image/account.png');


const MaintainScreen = (props) => {
    // console.log('maintain :: ', props);
    const filtered_data = props.maintainlist && props.maintainlist.filter((value) => value.status == 3 && props.loged_userlist.service_team_admin_id == value.service_team_admin)

    // const rejected_data = props.maintainlist && props.maintainlist.filter((value) => value.status == 3 && props.loged_userlist.service_team_admin_id == value.service_team_admin)
    const navigation = useNavigation();

    const [filteredData, setfilteredData] = useState(filtered_data)
    const [masterData, setmasterData] = useState(filtered_data)
    const [search, setSearch] = useState('')
    const searchfilter = (text) => {
        let searchdata = masterData.filter((item) => {
            return item.contact_name.toUpperCase().includes(text.toUpperCase())
        })
        setSearch(text)
        setfilteredData(searchdata)

    }
    const ItemView = ({ item }) => {
        // console.log('Item View :: ', item.customer_no);
        return (
            <LinearGradient
                colors={["#FFDAA8", "#2EC4B6"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width: wp(90), height: hp(15), backgroundColor: '#AA66BB', borderRadius: 20, marginLeft: 15,
                    justifyContent: 'center', marginLeft: 17, flex: 1, marginTop: 10
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                    {/* <View style={{ justifyContent: 'space-around', }}>
                        <Image
                            resizeMode="contain"
                            source={profile}
                            style={{ width: 50, height: 50, marginTop: 10 }}
                        />
                    </View> */}
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: "white", marginTop: 5, fontFamily: 'DMSans-Regular', fontSize: 14 }}>{item.request_date}</Text>
                        <Text style={{ color: "white", marginTop: 5, fontFamily: 'DMSans-Regular', fontSize: 16 }}>{item.contact_name}</Text>
                        <Text style={{ color: "white", marginTop: 5, fontFamily: 'DMSans-Regular', fontSize: 14 }}>{item.contact_telephone}</Text>

                    </View>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: '#654EA3', width: wp(25), height: hp(4), marginRight: 10, marginTop: 30, justifyContent: 'center',
                            alignItems: 'center', borderRadius: 8
                        }} onPress={() => navigation.navigate('Maintain List Detail', { params: item, teamadmin_id: props.loged_userlist.service_team_admin_id })}>
                            <Text style={{ color: 'white', fontSize: 11, fontFamily: 'Mulish-VariableFont_wght' }}>Send Report</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </LinearGradient>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList

                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{

                    marginTop: 10,

                    paddingBottom: 50,

                }}
                data={filteredData}
                ListHeaderComponent={
                    <>

                        <TextInput
                            style={{
                                color: "black",
                                width: '90%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderColor: '#ccc',
                                borderWidth: 0.5,
                                borderRadius: 15,
                                marginTop: 20,
                                marginLeft: 15,
                                padding: 10,
                                fontFamily: 'Quicksand-Regular',

                            }}
                            value={search}
                            onChangeText={(val) => searchfilter(val)}
                            placeholder="Search Here..."
                            placeholderTextColor='#697B7A'

                        />

                    </>

                }
                renderItem={ItemView}

            />
        </View>
    )
}

const CompletedScreen = (props) => {
    const navigation = useNavigation();
    const filtered_completeddata = props.completelist && props.completelist.filter((value) => value.status == 4 && props.loged_userlist.service_team_admin_id == value.service_team_admin)

    const [filteredData, setfilteredData] = useState(filtered_completeddata)
    const [masterData, setmasterData] = useState(filtered_completeddata)
    const [search, setSearch] = useState('')
    const searchfilter = (text) => {
        let searchdata = masterData.filter((item) => {
            return item.contact_name.toUpperCase().includes(text.toUpperCase())
        })
        setSearch(text)
        setfilteredData(searchdata)

    }
    const ItemView = ({ item }) => {
        return (
            <LinearGradient
                colors={["#FFDAA8", "#2EC4B6"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width: wp(90), height: hp(15), backgroundColor: '#AA66BB', borderRadius: 20, marginLeft: 15,
                    justifyContent: 'center', marginLeft: 17, flex: 1, marginTop: 10
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'DMSans-Regular', fontSize: 12 }}>{item.request_date}</Text>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'DMSans-Regular', fontSize: 14 }}>{item.contact_name}</Text>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'DMSans-Regular', fontSize: 12 }}>{item.contact_telephone}</Text>

                    </View>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: '#654EA3', width: wp(23), height: hp(4), marginRight: 5, marginTop: 30, justifyContent: 'center',
                            alignItems: 'center', borderRadius: 8
                        }} onPress={() => navigation.navigate('Maintainhistory', item)}>
                            <Text style={{ color: 'white', fontSize: 11 }}>View</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </LinearGradient>
        )
    }



    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList

                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{

                    marginTop: 10,

                    paddingBottom: 50,

                }}
                data={filteredData}
                ListHeaderComponent={
                    <>

                        <TextInput
                            style={{
                                color: "black",
                                width: '90%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderColor: '#ccc',
                                borderWidth: 0.5,
                                borderRadius: 15,
                                marginTop: 20,
                                marginLeft: 15,
                                padding: 10,
                                fontFamily: 'Quicksand-Regular',

                            }}
                            value={search}
                            onChangeText={(val) => searchfilter(val)}
                            placeholder="Search Here..."
                            placeholderTextColor='#697B7A'

                        />

                    </>

                }
                renderItem={ItemView}

            />
        </View>
    )
}

const RejectScreen = (rejected_client) => {
    const filtered_data = rejected_client.reject_data.filter((val) => val.service_team_admin_id == rejected_client.loged_userlist.service_team_admin_id && val.status == 2 && val.report_type == 1)

    // console.log('Rejected Data :: ', filtered_data);

    const navigation = useNavigation();
    const [filteredData, setfilteredData] = useState(filtered_data)
    const [masterData, setmasterData] = useState(filtered_data)
    const [search, setSearch] = useState('')
    const test = [
        {
            request_date: '9-9',
            contact_name: 'yy',
            contact_telephone: '09'



        }
    ]
    const searchfilter = (text) => {
        let searchdata = masterData.filter((item) => {
            return item.contact_name.toUpperCase().includes(text.toUpperCase())
        })
        setSearch(text)
        setfilteredData(searchdata)

    }
    const ItemView = ({ item }) => {
        // console.log('Item :: ', item);
        return (
            <LinearGradient
                colors={["#DB6846", "#9170EB"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{
                    width: wp(90), height: hp(15), backgroundColor: '#AA66BB', borderRadius: 20, marginLeft: 15,
                    justifyContent: 'center', marginLeft: 17, flex: 1, marginTop: 10
                }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'DMSans-Regular', fontSize: 12 }}>{item.date}</Text>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'DMSans-Regular', fontSize: 14 }}>{item.contact_person}</Text>
                        <Text style={{ color: "white", marginTop: 10, fontFamily: 'DMSans-Regular', fontSize: 12 }}>{item.contact_telephone}</Text>

                    </View>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: '#654EA3', width: wp(23), height: hp(4), marginRight: 5, marginTop: 30, justifyContent: 'center',
                            alignItems: 'center', borderRadius: 8
                        }} onPress={() => navigation.navigate('editmaintain', item)}>
                            <Text style={{ color: 'white', fontSize: 11 }}>Edit</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </LinearGradient>
        )
    }



    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList

                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{

                    marginTop: 10,

                    paddingBottom: 50,

                }}
                data={filtered_data}
                ListHeaderComponent={
                    <>

                        <TextInput
                            style={{
                                color: "black",
                                width: '90%',
                                height: 50,
                                backgroundColor: '#fff',
                                borderColor: '#ccc',
                                borderWidth: 0.5,
                                borderRadius: 15,
                                marginTop: 20,
                                marginLeft: 15,
                                padding: 10,
                                fontFamily: 'Quicksand-Regular',

                            }}
                            value={search}
                            onChangeText={(val) => searchfilter(val)}
                            placeholder="Search Here..."
                            placeholderTextColor='#697B7A'

                        />

                    </>

                }
                renderItem={ItemView}

            />
        </View>
    )
}

const Maintainlist = (props) => {

    useEffect(() => {

        AsyncStorage.getItem("id").then((id) => {
            props.fetch_maintainlist(id)
            props.fetch_loged_team_member(id)
            props.fetch_service_report_list()
        })
    }, [])

    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ margin: 16, padding: 10 }}>
                <Text style={{ color: '#302A68', fontFamily: 'Mulish-VariableFont_wght', fontWeight: 'bold', fontSize: 18, }}>Maintain List</Text>
            </View>
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
                <Tab.Screen name="Maintain List" component={() => <MaintainScreen loged_userlist={props.loged_user} maintainlist={props.maintain_list} />}

                />

                <Tab.Screen name="Reject List" component={() => <RejectScreen reject_data={props.all_service_list} loged_userlist={props.loged_user} />}

                />
                <Tab.Screen name="Complete List" component={() => <CompletedScreen completelist={props.maintain_list} loged_userlist={props.loged_user} />} />
            </Tab.Navigator>


        </View>
    )
}



const stateToProps = state => {
    // console.log('Report List :: ',state.team_member.service_report_list);
    return {
        maintain_list: state.maintenance.maintain_lists.data,
        loged_user: state.team_member.team_member.data,
        all_service_list: state.team_member.service_report_list
    };
}
export default connect(stateToProps, { fetch_maintainlist, fetch_loged_team_member, fetch_service_report_list })(Maintainlist)