import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    headcontainer: {
        backgroundColor: 'white',
        height: 250,
        borderBottomEndRadius: 70,
        borderBottomStartRadius: 70
    },
    profileimage: {
        // backgroundColor: '#71c5aa',
        // borderRadius: 70,
        alignSelf: "center",
        marginTop: 30,
        // width: 100,
        // height: 100,
        marginTop: -210,
    },
    name: {
        color: '#302a69',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        alignSelf: "center",
        zIndex: 99
    },
    optionCard: {
        backgroundColor: '#f2f2f7',
        height: hp('87%'),
        alignSelf: "center",
        width: '95%',
        borderRadius: 10,
        marginTop: - 120,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.40,
        elevation: 5,
        marginBottom: 10
    },
    listcontainer: {
        width:'100%',
        flex: 1
    },
    setting: {
        flexDirection: "row",
        backgroundColor: 'white',
        width: '99%',
        alignSelf: 'center',
        marginTop: 2,
        borderRadius: 10,
        height: 60,
    },
    modalcontainer: {
        backgroundColor: "#00000099",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalsubcontainer: {
        backgroundColor: "white",
        width: "80%",
        borderRadius: 5
    },
    modaltitle: {
        fontWeight: "bold",
        fontSize: 20,
        padding: 15,
        color: "#000"
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "lightgray"
    },
    modalbody: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    btnaccept: {
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20, backgroundColor: "#db2828"
    },
    actionText: {
        color: "#fff"
    },
    btncancel: {
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 20, backgroundColor: "#21ba45"
    },
    userprofile: {
        width: 100,
        height: 100,
        borderRadius: 80,
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export { styles }