import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'pink',
        height: '100%',

    },
    containerheader: {
        marginTop: 30,
        backgroundColor: 'red',
        height: 400,
        width: '100%',

        // borderBottomEndRadius : 40 ,
        // borderBottomStartRadius : 40 ,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 20
    },
    headerText: {
        marginTop: 25,
        paddingTop: 7,
        paddingLeft: 5,
        fontSize: 17,
        fontWeight: "bold",
        color: 'white',
    },
    containerBody: {
        width: '500',
        marginTop: 60,
        backgroundColor: 'red !important',
    },
    modalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        width: '100%',
        paddingBottom: 10,

        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: 22

    },
    leftText: {
        textAlign: 'right',
        color: '#000',
        // flex: 0,
        // fontWeight: 'bold',
        fontSize: 16,
    },
    rightText: {
        flex: 1,
        color: '#000',
        paddingLeft: 7,
        fontSize: 16,
    },
    underLine: {
        flex: 1,
        height: 1,
        marginTop: 2,
        backgroundColor: 'gray',
        marginLeft: 10,
        width: '70%',
    },
    containerBody: {
        // backgroundColor : '#302a69',
        padding: 50,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 150,
        borderRadius: 30,
        width: 400,
        // height: 500,

    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    map: {
        // marginTop: 20,
        marginBottom: 20,
        width: 500,
        height: 300,
    },
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 20,
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
    alternativeLayoutButtonContainer: {
        // margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export { styles };