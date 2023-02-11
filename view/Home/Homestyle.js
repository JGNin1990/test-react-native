import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    //
    headcontainer: {
        flexDirection: 'row', justifyContent: 'space-between', marginRight: 15, marginLeft: 15, position: "relative", bottom: 30
    },
    headtitlecontainer: {
        flexDirection: "row", justifyContent: 'space-between', padding: 10, width: '100%'
    },
    titleconatiner: {
        color: "#343D83", fontSize: wp(5), fontFamily: 'Mulish-VariableFont_wght', fontWeight: '800',
    },
    subtitlecontainer: {
        color: "#343D83", fontFamily: 'Mulish-VariableFont_wght', fontWeight: '400'
    },
    subcardtitle: {
        backgroundColor: 'rgba(255, 255, 255, 0.55)', flexDirection: 'row', borderRadius: 25, marginTop: 10, padding: 5
    },
    subtitle: {
        textAlign: 'center', fontSize: 12, color: '#161D6F', fontFamily: "'Mulish-VariableFont_wght",
    },
    submaintitle: {
        color: "#343D83", fontFamily: 'Mulish-VariableFont_wght', fontSize: 18, fontWeight: 'bold'
    },
    viewstyle: {
        color: "#343D83", fontFamily: 'Mulish-VariableFont_wght', fontSize: 14, marginTop: 5,
    },
    viewallstyle: {
        flexDirection: 'row', justifyContent: 'space-between', marginRight: 17, marginLeft: 8, marginTop: 20
        // flexDirection: 'row', justifyContent: 'space-between', marginRight: wp(9), marginLeft: wp(9), marginTop: hp(3)
    },
    cardconatiner: {
        width: wp(80), height: hp(17), borderRadius: 20, marginLeft: 10, marginRight: 10
    },
    cardfooter: {
        width: '90%', height: 70, borderColor: '#8993DA', borderWidth: 1,
        borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
    },
    cardfooterbutton: {
        backgroundColor: '#BFC6FD', width: wp(23), height: hp(5), marginRight: 10, marginTop: 14, justifyContent: 'center',
        alignItems: 'center', borderRadius: 5
    },
    norequestcontainer: {
        flexDirection: 'row', padding: 5, marginTop: 20, justifyContent: 'space-around',
    },
    norequestsubconatiner: {
        justifyContent: 'center', alignItems: "center"
    },
    norequesttitle: {
        fontFamily: 'DMSans-Regular', color: '#1C2D57', fontWeight: 'bold', fontSize: 23, marginLeft: 15,
    },
    norequestsubtitle: {
        fontFamily: 'DMSans-Regular', color: '#1C2D57', fontSize: 14, textAlign: 'center', marginLeft: 20, marginRight: 20, padding: 20
    },
    //
    subcontainer: {
        flex: 1, shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.40,
        justifyContent: 'center',
        elevation: 5, backgroundColor: '#F5F6F9',
        alignItems: 'center', marginTop: 20, marginLeft: 10,
        marginRight: 12, width: 200, height: 205, borderRadius: 30
    },
    profile: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        marginTop: 10,
        marginRight: 10,
    },
    functionContainer: {
        width: '98%',
        height: '80%',
        alignSelf: 'center',
        backgroundColor: '#252a56',
        marginTop: 20,
        borderRadius: 20,
    },
    functionAlignment: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 40,
        justifyContent: 'space-between'
    },
    navButtom: {
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderColor: '#ffd17c',
        borderWidth: 1,
        borderRadius: 20,
        width: 90,
        height: 90

    },
    functionImage: {
        width: 50,
        height: 50,
        marginTop: 8,
        shadowColor: '#f4f2ef',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.40,
        elevation: 5,
    },
    textStyle: {
        color: '#f4f2ef',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 12,
        marginTop: 7,
        shadowColor: '#f4f2ef',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.40,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 20
    },
    container: {
        backgroundColor: 'white',
        height: '100%',
    },
    containerheader: {
        backgroundColor: 'white',
        // backgroundColor: 'white',
        height: 205,
        // borderBottomEndRadius : 30 ,
        borderBottomStartRadius: 30,
        // borderTopStartRadius: 40,
        // borderTopEndRadius: 40,

    },
    profilename: {
        paddingTop: 7,
        paddingLeft: 5,
        fontSize: 17,
        fontWeight: "bold",
        color: 'white'
    },
    welcome: {
        paddingTop: 12,
        paddingLeft: 5,
        fontSize: 20,
        color: 'white'
    },
    profilecard: {
        width: '90%',
        height: 170,
        marginTop: 12,
        backgroundColor: 'white',
        alignSelf: "center",
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.40,
        elevation: 5,

    },
    invoicecontainer: {
        borderRadius: 10,
        height: 60,
        zIndex: 9,
        borderWidth: 0.18,
        borderColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.20,
        elevation: 0.6,
    },
    name: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#4f6e64',
        marginTop: 30,
        paddingLeft: 7
    },
    phno: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#4f6e64',
        marginTop: 12,
        paddingLeft: 7
    },
    invoice: {
        fontSize: 15,
        fontWeight: "bold",
        color: '#4f6e64',
        marginTop: 12,
        paddingLeft: 7
    },
    viewrescontainer: {
        flexDirection: 'row'
    },
    viewIcon: {
        borderRadius: 50,
        backgroundColor: 'red',
        width: 40,
        height: 40,
        justifyContent: "center",
    },
    buttomcontainer: {
        backgroundColor: '#ffff',
        height: 600,
        marginTop: -100,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    category: {
        backgroundColor: '#302a69',
        width: 60,
        height: 60,
        marginTop: 12,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center",
        textAlign: "center"

    },
    categoryimage: {
        width: 30,
        height: 30,
        alignSelf: "center",
    },
    categorylabel: {
        color: '#424654',
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 2,
        alignSelf: 'center',
    }

})

export { styles }
