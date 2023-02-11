import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    //login style
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        height: '100%',
    },
    imgstyle: {
        width: 200, height: 200, bottom: 20
    },
    welcometext: {
        color: "black", fontFamily: 'Quicksand-Bold', fontSize: 20, bottom: 20
    },
    subtitle: {
        color: "black", fontFamily: "Quicksand-Regular", fontSize: 16, bottom: 10
    },
    btnlogin: {
        backgroundColor: '#302a69', width: wp('80%'), height: hp('6%'),
        alignItems: 'center', justifyContent: 'center', marginTop: 30, borderRadius: 20, flexDirection: 'row'
    },
    //newpass style
    passcontainer: {
        backgroundColor: 'white', flex: 1
    },
    passtext: {
        color: '#302A68', fontWeight: 'bold', fontSize: wp(6), color: '#f7b840', marginBottom: 10, marginLeft: 20
    },
    passbutton: {
        backgroundColor: '#f7b840',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
    },
    //otp style
    otpcontainer: {
        backgroundColor: 'white', height: hp('100%')
    },
    otpsubcontainer: {
        backgroundColor: '#f7b840', padding: 10, justifyContent: 'center', alignItems: "center", margin: 20
    },
    verifytext: {
        color: 'black', fontWeight: 'bold', fontSize: 18, color: '#f7b840', marginBottom: 10
    },
    codetext: {
        marginTop: 20, fontSize: 18
    },
    imgcontainer: {
        marginTop: 50
        // justifyContent: "center", alignItems: 'center',
    },
    codeerror: {
        color: "red",
        marginLeft: 20,
        marginBottom: 10
    },
    otpinputContainer: {
        width: '80%', height: 200, marginLeft: 30
    },
    otpinputFieldStyle: {
        width: 40,
        height: 45,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: "#654EA3",
        color: 'black',
        // backgroundColor: '#F7F8F9'
    },


    //forgot pass style
    forgotinput: {
        backgroundColor: 'white', alignItems: 'center', flex: 1,
    },
    phonenumbertext: {
        fontFamily: 'Quicksand-Bold', fontSize: wp(6), color: '#302A68', marginBottom: 10, marginLeft: 20
    },
    verifysubtext: {
        color: '#8391A1', fontSize: 14, marginBottom: 30, fontFamily: 'Quicksand-Bold', marginLeft: 20
    },
    textinputStyle: {
        borderWidth: 0.5, backgroundColor: 'white', borderRadius: 10, width: wp('90%'), marginRight: 15, height: hp('6%'), shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.25, margin: 17,
        elevation: 3, color: '#8D8B8B', fontFamily: 'Quicksand-Regular', padding: 10, marginBottom: 15, marginTop: 7
    },
    getOptbuttonStyle: {
        backgroundColor: '#A483FF',
        height: 45,
        borderRadius: 10,
        justifyContent: 'center',
    },
    //
    forminputContainerStyle: {
        borderWidth: 0.8,
        borderColor: "black",
        borderRadius: 15,
        height: 50,
    },
    inputContainerStyle: {
        borderWidth: 0.8,
        borderColor: "#d5d7db",
        borderRadius: 15,
        height: 50,

    },
    leftIconContainerStyle: {
        height: 25,
        width: 48,
        borderRightWidth: 0.8,
        borderColor: "#c9c9c9",
    },
    formleftIconContainerStyle: {
        height: 25,
        width: 48,
        borderRightWidth: 0.8,
        borderColor: "black",
    },
    profileinputStyle: {
        marginLeft: 10,
        fontSize: 13,
        color: 'black'
    },
    inputStyle: {
        marginLeft: 10,
        fontSize: 13,
        color: 'white'
    },

    welcometext: {
        fontSize: 25, color: 'white', textAlign: 'center',
    },
    signuptext: {
        color: 'white', textAlign: 'center', marginTop: 20
    },
    loginbutton: {
        borderRadius: 15, backgroundColor: '#f7b840'
    },
    loginbtncontainer: {
        marginRight: 10, marginLeft: 10, marginTop: 10
    },
    subcontainer: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 20
    }


})

export { styles }