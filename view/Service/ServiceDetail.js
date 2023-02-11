import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';
import {
    Modal,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './ServiceDetailStyle';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import Textarea from '../../src/components/Textarea';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from "react-redux";
import { send_remrk, send_remrk_reject } from '../../src/redux/Client_requestReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SweetAlert from 'react-native-sweet-alert';
import validate from './validate';
import RejectModal from '../../src/components/RejectModal';
import TextInput from '../../src/components/TextInput';
import moment from 'moment';
import RenderImage from '../../src/components/RenderImage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ServiceDetail = (props) => {
    const [team_member_id, setTeam_member_id] = useState()
    const [rejectModal, setRejectModal] = useState(false)
    const [repoerModal, setreportModal] = useState(false)
    const get_client = props.route.params.params;
    const serteam_admin = props.route.params.teamadmin_id
    const [imagemodalVisible, setimageVisible] = useState(false);
    const [resourcePath, setfilePath] = useState({});
    const [fileData, setfileData] = useState();
    const [fileUri, setfileUri] = useState();
    const [filetype, setfiletype] = useState();


    const modalvisibile = () => {

        setimageVisible(true)
    }

    const imageGalleryLaunch = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',

            },
        };

        launchImageLibrary(options, (res) => {
            // alert('reacg')
            console.log('Response = ', res.assets[0]);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {
                const source = { uri: res.fileName };
                setfilePath(res);
                setfileData(res.assets[0]);
                setfileUri(res.assets[0].uri)
                setfiletype(res.assets[0].type)

            }
        });
        setimageVisible(!imagemodalVisible)
    }

    const camera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchCamera(options, (res) => {
            const requestCameraPermission = async () => {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: "App Camera Permission",
                            message: "App needs access to your camera ",
                            buttonNeutral: "Ask Me Later",
                            buttonNegative: "Cancel",
                            buttonPositive: "OK"
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log("Camera permission given");
                    } else {
                        console.log("Camera permission denied");
                    }
                } catch (err) {
                    console.warn(err);
                }
            };


            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                // alert(res.customButton);
            } else {
                const source = { uri: res.fileName };
                setfilePath(res);
                setfileData(res.assets[0]);
                setfileUri(res.assets[0].uri);
                setfiletype(res.assets[0].type)
            }
        });
        setimageVisible(!modalimageVisible)
    }


    useEffect(() => {
        AsyncStorage.getItem("id").then((teammember_id) => {
            setTeam_member_id(teammember_id)
        });


    }, [])


    const btnsend = (value) => {


        const report_list = Object.assign({}, value, {
            client_id: get_client.id,
            by_service_team_member: team_member_id,
            date: moment().format('YYYY-MM-DD'),
        })
        props.send_remrk(report_list, (type) => {
            if (type == 'remarksuccess') {
                SweetAlert.showAlertWithOptions({
                    title: "Send Remark Successfully",
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'success',
                    cancellable: true
                },
                    callback => console.log('callback'));

                props.navigation.navigate('Main');
            }
        })

    }



    return (
        <>

            <View style={styles.mainContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* <View style={styles.containerheader}> */}
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 16.82128535699518,
                            longitude: 96.17906724243743,
                            latitudeDelta: 1.0922,
                            longitudeDelta: 1.0421,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: 16.82128535699518, longitude: 96.17906724243743 }}
                            title={"JavaTpoint"}
                            description={"Java Training Institute"}
                        />
                    </MapView>
                    {/* </View> */}
                    <Text style={{ color: '#161e6f', marginLeft: 10, marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Customer Information </Text>

                    {
                        get_client ?
                            <>
                                <View style={{ backgroundColor: 'white', marginTop: 20, width: 500, marginBottom: 20, }}>
                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Customer Name:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.first_name} {get_client.last_name}</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Phone Number:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.phone}</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Customer Number:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.customer_no}</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Customer NRC:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.nrc}</Text>
                                    </View>




                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>City:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.city_data.eng_name}</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Township:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.township_data.eng_name}</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Address:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>{get_client.address}</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    {/* <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Latitude:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>98.64</Text>
                                    </View>

                                    <View style={styles.underLine} />

                                    <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Longtitude:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>18.34</Text>
                                    </View> */}

                                    {/* <View style={styles.underLine} /> */}

                                    {/* <View style={styles.modalContainer}>
                                        <Text style={styles.leftText}>Payment Method:</Text>
                                        <Text style={styles.midText}>:</Text>
                                        <Text style={styles.rightText}>Cashs</Text>
                                    </View>
                                    <View style={styles.underLine} /> */}


                                </View>

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 30,

                                }}>
                                    {/* <TouchableOpacity style={{ width: '96%', marginLeft: 8 }} onPress={() => setreportModal(true)}> */}
                                    {/* <TouchableOpacity style={{ width: '96%', marginLeft: 8 }} onPress={() => props.navigation.navigate('Servicereport', { get_client, serteam_admin })}>

                                        <View style={{
                                            backgroundColor: '#f7b840',
                                            // width: '50%',
                                            height: 45,
                                            // marginLeft: 10,
                                            borderRadius: 10,
                                            justifyContent: 'center',


                                        }} >
                                            <Text style={{ textAlign: 'center', color: 'white' }}>Report To Admin</Text>
                                        </View>
                                    </TouchableOpacity> */}
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Servicereport', { get_client, serteam_admin, })}>
                                        <LinearGradient
                                            colors={["#927AD1", "#A483FF"]}
                                            start={{ x: 0, y: 1 }}
                                            end={{ x: 1, y: 0 }}
                                            style={{
                                                width: wp(90), height: hp(7), backgroundColor: '#AA66BB', borderRadius: 25,
                                                justifyContent: 'center', marginLeft: 17, flex: 1, marginTop: 10, alignItems: 'center', marginRight: 15
                                            }}
                                        >
                                            <Text style={{ color: 'white', }}>Go To Service Report Form</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>


                                </View>


                            </>


                            :

                            <></>
                    }


                </ScrollView>

            </View>

            <Modal
                // animationIn='zoomIn'
                animationType="slide"
                transparent={true}
                // coverScreen={true}
                visible={repoerModal}
                onRequestClose={() => {
                    setreportModal(!repoerModal);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    // marginTop: 15
                }}>
                    <View style={{
                        width: 340,
                        margin: 20,
                        backgroundColor: "white",
                        // backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: 20,
                        padding: 35,
                        height: 490

                    }}>
                        <Field name="description" component={Textarea} placeholder="Description" />

                        <Field placeholder='Enter Guide' formname label="Guide" iconname="lock" name="guide" component={TextInput} />

                        <Field placeholder='Enter Serial Number' formname label="serial number" iconname="lock" name="serial_number" component={TextInput} />

                        <Field label="Choose Profile Image" camera={camera} modalVisible={imagemodalVisible} modalvisibile={modalvisibile} fileData={fileData} fileUri={fileUri} name="photo" imageGalleryLaunch={imageGalleryLaunch} component={RenderImage} />


                        <TouchableOpacity onPress={props.handleSubmit(btnsend)
                        } style={{ width: '45%', marginTop: 20, position: 'absolute', right: 0, bottom: 0, marginRight: 20, marginBottom: 10 }} >
                            <View style={{
                                backgroundColor: '#f7b840',
                                // width: '50%',
                                height: 45,
                                // marginLeft: 10,
                                borderRadius: 10,
                                // justifyContent: 'flex-end'
                                justifyContent: 'center',


                            }} >
                                <Text style={{ textAlign: 'center', color: 'black' }}>Send</Text>
                            </View>
                        </TouchableOpacity>


                        <View style={{ position: 'absolute', right: 0, marginRight: 20, marginTop: 20 }}>
                            <TouchableOpacity onPress={() => setreportModal(!repoerModal)}>
                                <Image style={{ width: 25, height: 25, }} source={require('../../src/image/cancel.png')} />
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </Modal >


        </>

    )
}
const servicedetailwrap = reduxForm({
    form: "serviceForm",

})(ServiceDetail)

export default connect(null, { send_remrk, send_remrk_reject })(servicedetailwrap)



