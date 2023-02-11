import React, { useState, useEffect, useContext } from 'react';
import { Dimensions, StyleSheet, ScrollView, Text, Image, TouchableOpacity, View, useWindowDimensions, Modal, ImageBackground } from 'react-native';
import { styles } from './ProfileStyle'
import { SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout_user } from '../../src/redux/LoginReducer';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { authicated_user } from '../../src/redux/LoginReducer';
import SweetAlert from 'react-native-sweet-alert';
import { fetch_loged_team_member } from '../../src/redux/Team_memberReducer';
import { PHOTO_URL } from '../../src/components/common';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AuthContext } from '../../src/components/context';
import LinearGradient from 'react-native-linear-gradient';
const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});
const editimg = require('../../src/image/edit.png')

const Profile = (props) => {
    const homebg = require('../../asset/Home/backfround.png')
    const [userid, setUserid] = useState()
    const [userrole, setUserrole] = useState()
    const { authstate, removetoken } = useContext(AuthContext)
    const settingicon = require('../../asset/Icon/settings.png')
    const privacyicon = require('../../asset/Icon/privacy.png')
    const termsicon = require('../../asset/Icon/terms-and-conditions.png')
    const logouticon = require('../../asset/Icon/logout.png')
    const passwordicon = require('../../asset/Icon/key.png')
    const guideicon = require('../../asset/Icon/guide.png')
    const profile = require('../../src/image/account.png');
    const arrow = require('../../asset/Icon/arrow.png')

    useEffect(() => {
        props.navigation.addListener('focus', () => {

            AsyncStorage.getItem('id').then((value) => {
                props.fetch_loged_team_member(value)
                setUserid(value)
            })

            AsyncStorage.getItem('role').then((value) => {
                setUserrole(value)
            })
        })

    }, [])

    const navigation = useNavigation();
    // Modal
    const { width, height } = Dimensions.get("window")
    console.log('width', width);
    console.log('height', height);

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [logoutmodalVisible, setVisible] = useState(false)
    const btnlogout = async () => {

        //setVisible(true)
        let formData = new FormData();
        formData.append('id', userid)
        formData.append('role', userrole)

        props.logout_user(formData, (type) => {
            if (type == 'logoutsuccess') {
                SweetAlert.showAlertWithOptions({
                    title: "Logout Successfully",
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'success',
                    cancellable: true
                },
                    callback => console.log('callback'));

                props.navigation.navigate('login');
            }
        })
        await AsyncStorage.clear();
        // await AsyncStorage.removeItem('loged_data');
        //alert(JSON.stringify(props.loged_user));
        // navigation.navigate('login');
        //props.navigation.navigate('login')
        navigation.navigate('login');
        // 
        // return (
        //     <Login />
        // )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
                height: 0.35 * height, backgroundColor: '#BFC6FD', borderBottomLeftRadius: height / 9.7,
            }}>

                <View style={{ marginRight: width / 24, marginLeft: width / 24, marginTop: 20 }}>
                    <Text style={{ fontWeight: '700', color: "#302A68", fontFamily: 'Mulish-VariableFont_wght', fontSize: 23, marginLeft: 15 }}>Profile</Text>

                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', bottom: 25, marginTop: 30 }}>
                    {props.team_member && props.team_member.photo ?
                        <Image
                            source={{ uri: `${PHOTO_URL}` + '/service_team_members/' + props.team_member.photo }}

                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 80,

                            }}

                        />
                        :
                        <Image
                            source={profile}

                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 80,

                            }}

                        />

                    }
                </View>

                <View style={{ alignItems: 'center', bottom: 15 }}>
                    <Text style={{ color: '#302A68', fontWeight: '600', fontSize: 16 }}>{props.team_member && props.team_member.name}</Text>
                    <Text style={{ color: '#302A68', fontWeight: '400', fontSize: 14 }}>{props.team_member && props.team_member.email}</Text>
                </View>

            </View>

            <View style={{ flex: 1 }}>
                <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#BFC6FD' }} />
                <View style={{ flex: 1, backgroundColor: 'white', borderTopRightRadius: 75 }}>
                    <View style={{ marginTop: 50, }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Edit Profile', userid)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,

                                        }}
                                        source={settingicon}
                                    />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#092724', marginLeft: width / 39.2 }}>Account Setting</Text>
                                </View>

                                <Icon name="arrow-right" size={20} color="#302a69" />

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('Password Screen', userid)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 30, marginLeft: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,

                                        }}
                                        source={passwordicon}
                                    />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#092724', marginLeft: 10 }}>Change Password</Text>
                                </View>
                                <Icon name="arrow-right" size={20} color="#302a69" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('User Guide')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 20, marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,

                                        }}
                                        source={guideicon}
                                    />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#092724', marginLeft: 10, }}>User Guide</Text>
                                </View>
                                <Icon name="arrow-right" size={20} color="#302a69" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { alert('Under Development') }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 20, marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,

                                        }}
                                        source={privacyicon}
                                    />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#092724', marginLeft: 10 }}>Privacy Policy</Text>
                                </View>
                                <Icon name="arrow-right" size={20} color="#302a69" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { alert('Under Development') }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 30, marginLeft: 20, marginTop: 20, }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 23,

                                        }}
                                        source={termsicon}
                                    />
                                    <Text style={{ fontWeight: '400', fontSize: 14, color: '#092724', marginLeft: 10 }}>Terms and Conditions</Text>
                                </View>
                                <View>
                                    <Icon name="arrow-right" size={20} color="#302a69" />
                                </View>
                            </View>
                        </TouchableOpacity>









                    </View>

                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', marginTop: height / 14 }} onPress={() => removetoken()}>
                        <LinearGradient colors={["#927AD1", "#A483FF"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }} style={{
                                elevation: 20,
                                shadowOffset: { width: 0, height: 0 }, shadowOpacity: 1,
                                shadowColor: '#000000', width: wp(35), height: hp(7), borderRadius: 20, justifyContent: 'center', alignItems: 'center'
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,

                                    }}
                                    source={arrow}
                                />

                                <Text style={{ marginLeft: 10, fontFamily: 'Mulish-VariableFont_wght', fontSize: 15, fontWeight: '700' }}>Logout</Text>

                            </View>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>



    );
}
const stateToProps = state => {
    return {
        team_member: state.team_member.team_member.data,

    };
}
export default connect(stateToProps, { fetch_loged_team_member, logout_user, authicated_user })(Profile)

