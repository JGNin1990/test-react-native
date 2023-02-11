import React, { useEffect, useState, useContext } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { styles } from './Homestyle';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetch_clientrequest_list } from '../../src/redux/Client_requestReducer';
import { fetch_maintainlist } from '../../src/redux/MaintainReducer';
import { fetch_loged_team_member } from '../../src/redux/Team_memberReducer';
import Login from '../Login/Login';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { PHOTO_URL } from '../../src/components/common';
import { AuthContext } from '../../src/components/context';
import { useFocusEffect } from '@react-navigation/native';
import Slide from '../../src/components/Slide';

const profile = require('../../src/image/account.png');
const homebg = require('../../asset/Home/backfround.png')
const logo = require('../../asset/Home/logo.png')
const tasksicon = require('../../asset/Home/CheckCircleFill.png')
const timeicon = require('../../asset/Home/ClockFill.png')
const editicon = require('../../asset/Home/Editicon.png')
const nodataaicion = require('../../asset/Home/14.png')
const nodataarequesticion = require('../../asset/Home/31.png')
const { width, height } = Dimensions.get("window")

const HomeScreen = (props) => {

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem("id").then((id) => {
                if (id) {
                    props.fetch_clientrequest_list(id)
                    props.fetch_maintainlist(id)
                    props.fetch_loged_team_member(id)

                }
            })

            // return () => unsubscribe();
        }, [])
    );
    // const filtredcount = props.maintain_list && props.loged_user && props.maintain_list.filter((value) => value.status == 3 && value.service_team_admin == props.loged_user.service_team_admin_id)
    const filtredcount = props.maintain_list && props.loged_user && props.maintain_list.filter((value) => value.status == 3)
    const filteredinstallcounnt = props.all_client_list && props.loged_user && props.all_client_list.filter((value) => value.approved_by_service_admin == props.loged_user.service_team_admin_id && value.service_status == 3)

    const allcolor = [
        '#CA9ADB', '#AA66BB', '#409ACD', '#38C1B9'

    ]
    return (

        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                height: 0.35 * height, backgroundColor: '#BFC6FD', borderBottomLeftRadius: height / 9.7,
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: width / 24, marginLeft: width / 24, }}>
                    <Image
                        resizeMode="contain"
                        source={logo}
                        style={{
                            width: width / 4.5, height: height / 9.1, borderRadius: 63,
                        }}
                    />
                    {props.loged_user && props.loged_user.photo ?
                        <Image
                            source={{ uri: `${PHOTO_URL}` + '/service_team_members/' + props.loged_user.photo }}

                            style={{
                                width: 50,
                                height: 50, marginTop: 20, borderRadius: 30,
                            }}
                        />
                        :
                        <Image
                            resizeMode="contain"
                            source={profile}
                            style={{ width: 35, height: 35, marginTop: 20 }}
                        />
                    }
                </View>

                <View style={styles.headtitlecontainer}>
                    <View style={{ marginLeft: width / 90, width: '49%', }} >
                        <Text style={styles.titleconatiner}>Hi, {props.loged_user && props.loged_user.name}</Text>
                        <Text style={styles.subtitlecontainer}>Good Morning</Text>

                    </View>
                    <View style={{ marginLeft: width / 90, marginRight: 4, width: '49%' }} >
                        <Text style={{ color: 'white' }}>Your Days look like this:</Text>
                        <View style={styles.subcardtitle}>

                            <Image
                                resizeMode="contain"
                                source={tasksicon}
                                style={{ width: 30, height: 10, marginTop: 5 }}
                            />
                            <Text style={styles.subtitle}>{filteredinstallcounnt && filteredinstallcounnt.length} tasks Pending</Text>

                        </View>
                        <View style={styles.subcardtitle}>
                            <Image
                                resizeMode="contain"
                                source={timeicon}
                                style={{ width: 30, height: 10, marginTop: 5 }}
                            />
                            <Text style={styles.subtitle}>{filtredcount && filtredcount.length} maintain Pending</Text>

                        </View>
                    </View>
                </View>

            </View>

            <View style={{ flex: 1 }}>
                <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#BFC6FD' }} />
                <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 75 }}>
                    {/* <View style={styles.viewallstyle}> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: width / 20, marginLeft: width / 20, marginTop: 20 }}>
                        {/* <View style={{ flex: 1, marginTop: 40, flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}> */}
                        <Text style={styles.submaintitle}>Maintain List</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Maintain List')}>
                            <Text style={styles.viewstyle}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{
                        flex: 1,
                        width: '100%',
                        backgroundColor: 'white',
                        marginTop: 10
                    }}

                        showsHorizontalScrollIndicator={false}
                        horizontal // Change the direction to horizontal
                    >
                        {filtredcount && filtredcount.length > 1 ?
                            filtredcount.map((val) => {
                                return (
                                    // allcolor.map((a) => {
                                    //     return (
                                    <LinearGradient
                                        colors={['#CA9ADB', '#AA66BB']}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.cardconatiner}
                                    >
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                            <Text style={{ color: "white", padding: 10, marginLeft: 5 }}>{val.customer_no}</Text>
                                            <TouchableOpacity onPress={() => props.navigation.navigate('maintainreport', { params: val, id: props.loged_user.service_team_admin_id })}>
                                                <Image
                                                    resizeMode="contain"
                                                    source={editicon}
                                                    style={{ width: 30, height: 25, marginTop: 10, marginLeft: 5 }}
                                                />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginTop: 10 }}>

                                            <Text style={{ color: "white", fontSize: 14, marginLeft: 19 }}>{val.contact_name}</Text>


                                            <Text style={{ marginRight: 8, marginTop: 8 }}>{val.request_date}</Text>
                                        </View>
                                    </LinearGradient>
                                )


                            })

                            :
                            filtredcount && filtredcount.length == 1 ?
                                filtredcount.map((val) => {
                                    // console.log('filtredcount val :: ', val)
                                    return (
                                        // allcolor.map((a) => {
                                        //     return (
                                        <LinearGradient
                                            colors={['#CA9ADB', '#AA66BB']}
                                            start={{ x: 0, y: 1 }}
                                            end={{ x: 1, y: 0 }}
                                            style={{
                                                width: wp(90), height: hp(18), backgroundColor: '#AA66BB', borderRadius: 20, marginLeft: 15,
                                                justifyContent: 'center'
                                            }}
                                        // style={{ width: wp(80), height: hp(20), backgroundColor: a, borderRadius: 20, marginLeft: 10, marginRight: 10 }}
                                        >
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                                                <Text style={{ color: "white", padding: 10, marginLeft: 5 }}>{val.customer_no}</Text>
                                                <TouchableOpacity onPress={() => props.navigation.navigate('maintainreport', { params: val, id: props.loged_user.service_team_admin_id })}>
                                                    <Image
                                                        resizeMode="contain"
                                                        source={editicon}
                                                        style={{ width: 30, height: 25, marginTop: 10, marginLeft: 5 }}
                                                    />
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ marginLeft: 19, }} >
                                                <Text style={{ color: "white", fontSize: 14, }}>{val.contact_name}</Text>

                                            </View>


                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, marginTop: 10 }}>
                                                {val.photo ?
                                                    <Image
                                                        resizeMode="contain"
                                                        source={{ uri: `${PHOTO_URL}` + '/service_team_members/' + val.photo }}

                                                        style={{ width: 35, height: 35, marginLeft: 10 }}
                                                    /> :
                                                    <Image
                                                        resizeMode="contain"
                                                        source={profile}
                                                        style={{ width: 35, height: 35, marginLeft: 10 }}
                                                    />
                                                }

                                                <Text style={{ marginRight: 8, marginTop: 8 }}>{val.request_date}</Text>
                                            </View>
                                        </LinearGradient>

                                        //     )
                                        // })
                                    )


                                }) :
                                <LinearGradient
                                    colors={["#F15223", "#7256BE"]}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        width: wp(90), height: hp(18), backgroundColor: '#AA66BB', borderRadius: 20, marginLeft: 15,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                                        <Image
                                            resizeMode="contain"
                                            source={nodataaicion}
                                            style={{ width: wp(30), height: hp(10), }}
                                        />
                                        <Text style={{ color: "white", marginTop: 40, fontFamily: 'DMSans-Regular', fontSize: 16 }}>No Data To Display...</Text>

                                    </View>



                                </LinearGradient>
                        }



                    </ScrollView>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: width / 20, marginLeft: width / 20, bottom: 14 }}>
                        <Text style={styles.submaintitle}>Request List</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Service List')}>
                            <Text style={styles.viewstyle}>View All</Text>

                        </TouchableOpacity>
                    </View>

                    <ScrollView style={{ flex: 1, backgroundColor: "white", bottom: 10 }}>
                        {filteredinstallcounnt && filteredinstallcounnt.length > 0 ?
                            filteredinstallcounnt.map((val) => {
                                return (
                                    <View style={{
                                        flex: 1, width: '90%', height: 80, borderColor: '#8993DA', borderWidth: 1,
                                        borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
                                    }}>
                                        {val.photo ?
                                            <Image
                                                source={{ uri: `${PHOTO_URL}` + '/client/' + val.photo }}


                                                style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

                                            />
                                            :
                                            <Image
                                                source={profile}

                                                style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

                                            />}

                                        <View style={{ flexDirection: 'column', marginTop: 10, width: '50%', }}>
                                            <Text style={{ color: "#78858F" }}>{val.first_name} {val.last_name}</Text>
                                            <Text style={{ color: "#78858F" }}>{val.customer_no}</Text>
                                            <Text style={{ color: "#78858F" }}>{val.phone}</Text>
                                        </View>

                                        <TouchableOpacity style={styles.cardfooterbutton} onPress={() => props.navigation.navigate('Service Detail', { params: val, teamadmin_id: props.loged_user.service_team_admin_id })}>
                                            <Text style={{ color: '#654EA3', fontSize: 11 }}>Report</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                            :
                            <View style={styles.norequestcontainer}>
                                <View style={styles.norequestsubconatiner} >
                                    <Text style={styles.norequesttitle}>Hi, {props.loged_user && props.loged_user.name}</Text>
                                    <Text style={styles.norequestsubtitle}>There's no data for you </Text>

                                </View>
                                <View style={{ justifyContent: 'center', alignItems: "center" }}  >
                                    <Image
                                        resizeMode="contain"
                                        source={nodataarequesticion}
                                        style={{ width: wp(30), height: hp(15), marginRight: 25 }}
                                    />
                                </View>

                            </View>
                        }


                    </ScrollView>
                </View>
            </View>
        </View>



    );
}
const stateToprops = state => {
    return {
        all_client_list: state.client_request.client_request_list,
        maintain_list: state.maintenance.maintain_lists.data,
        loged_user: state.team_member.team_member.data
    }
}


export default connect(stateToprops, { fetch_clientrequest_list, fetch_maintainlist, fetch_loged_team_member })(HomeScreen)



