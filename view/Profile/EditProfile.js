import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Field, reduxForm } from 'redux-form'
import TextInput from '../../src/components/TextInput'
import { connect } from 'react-redux'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RenderImage from '../../src/components/RenderImage'
import styles from './EditprofileStyle'
import { fetch_loged_team_member, updateuser } from '../../src/redux/Team_memberReducer'
import SweetAlert from 'react-native-sweet-alert';
import { PHOTO_URL } from '../../src/components/common'
import CustomTextInput from '../../src/components/CustomTextInput'
const userimg = require('../../src/image/user.png')

const EditProfile = (props) => {
    // console.log('photo', props.member_info.photo);
    const [imagemodalVisible, setimageVisible] = useState(false);
    const [resourcePath, setfilePath] = useState({});
    const [fileData, setfileData] = useState();
    const [fileUri, setfileUri] = useState();
    const [filetype, setfiletype] = useState();
    const profile = require('../../src/image/account.png');
    const id = props.route.params
    const { handleSubmit } = props

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
            // console.log('Response = ', res.assets[0]);

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

    useEffect(() => {
        props.fetch_loged_team_member(id)
        props.initialize(props.member_info)

    }, [])
    const btnupdate = (data) => {
        // alert(JSON.stringify(data))

        const updatedata = Object.assign({}, props.member_info, {
            name: data.name ? data.name : props.member_info.name,
            phone: data.phone ? data.phone : props.member_info.phone,
            email: data.email ? data.email : props.member_info.email,
            photo: data.photo ? data.photo : props.member_info.email.photo
        })
        props.updateuser(updatedata, (type) => {
            if (type == 'updatesuccess') {
                SweetAlert.showAlertWithOptions({
                    title: "User Update Successfully",
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
            } else {
                SweetAlert.showAlertWithOptions({
                    title: 'Update Fail',
                    subTitle: '',
                    confirmButtonTitle: 'OK',
                    confirmButtonColor: '#000',
                    otherButtonTitle: 'Cancel',
                    otherButtonColor: '#dedede',
                    style: 'error',
                    cancellable: true
                },
                    callback => console.log('callback'));
            }
        })
    }

    return (
        <View style={styles.subcontainer}>
            {props.member_info && props.member_info.photo ?
                <Image
                    source={{ uri: `${PHOTO_URL}` + '/service_team_members/' + props.member_info.photo }}

                    style={styles.imgavatar}

                />
                : fileUri ?
                    <Image
                        source={{ uri: fileUri }}

                        style={styles.imgavatar}

                    />
                    :
                    <Image
                        source={profile}

                        style={styles.imgavatar}

                    />

            }
            <View>
                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', marginLeft: 19, }}>Name:</Text>
                <Field formname name="name" iconname="user" component={CustomTextInput} placeholder='Enter Name' />
            </View>
            <View >
                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', marginLeft: 19 }}>Phone Number:</Text>

                <Field formname name="phone" iconname="phone" component={CustomTextInput} placeholder='Enter Phone Number' editable />
            </View>

            <View >
                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', marginLeft: 19 }}>Email:</Text>

                <Field formname name="email" iconname="lock" component={CustomTextInput} placeholder='Enter Email' />
            </View>
            {/* <View >
                <Text style={{ fontFamily: 'Quicksand-Regular', color: 'black', marginLeft: 19 }}>Password:</Text>
                <Field secureTextEntry formname name="password" iconname="lock" component={CustomTextInput} placeholder='Enter Password' />
            </View> */}
            {/* <Field label="Choose Profile Image" modalVisible={imagemodalVisible} modalvisibile={modalvisibile} fileData={fileData} fileUri={fileUri} name="photo" imageGalleryLaunch={imageGalleryLaunch} component={RenderImage} /> */}


            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25 }}>
                <TouchableOpacity style={{
                    width: '90%',

                }} onPress={handleSubmit(btnupdate)}>
                    <View style={{
                        backgroundColor: '#f7b840',
                        // width: '50%',
                        height: 45,
                        // marginLeft: 10,
                        borderRadius: 10,
                        justifyContent: 'center',


                    }} >
                        <Text style={{ textAlign: 'center', color: 'white' }}>Update</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
function maptoprops(state) {
    return {
        member_info: state.team_member.team_member.data,

    }
}

const EditProfileWrap = reduxForm({
    form: "ServiceListForm",

})(EditProfile)
export default connect(maptoprops, { fetch_loged_team_member, updateuser })(EditProfileWrap)