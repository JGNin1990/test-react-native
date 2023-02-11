import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({
    imagestyle: {
        width: 180,
        height: 180,
        alignSelf: "center",
        marginTop: 50,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 20
    },
    container: {
        flex: 1,
    },
    containerheader: {
        backgroundColor: '#302a69',
        height: 120,

    },

    wrapperCollapsibleList: {
        flex: 1,
        marginTop: 20,
        overflow: 'hidden',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    button: {
        padding: 10,
        backgroundColor: '#c2185b',
    },
    collapsibleItem: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#CCC',
        padding: 10,
    },
    buttonText: {
        color: '#FFF',
    },
    nodata: {
        color: 'gray',
        fontSize: 17,
        alignSelf: 'center',
        fontWeight: 'bold'
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
    },

    listcontainer: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    content: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view: {
        height: 70,
        width: 320,
        paddingVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#666'
    },
    file: {
        width: 320,
        flex: 1,
        flexDirection: 'row'
    },
    id: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    idText: {
        fontSize: 10
    },
    detail: {
        justifyContent: 'space-around',
        flex: 1
    },
    name: {
        textAlign: 'center',
        lineHeight: 15,
        color: '#666',
        marginBottom: 5
    },
    email: {
        fontSize: 10,
        color: 'blue',
        textDecorationColor: 'blue',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    ip: {
        fontSize: 12,
        color: 'grey'
    },
    gender: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    genderText: {
        fontSize: 10
    },
    title: {
        color: '#333',
        fontSize: 12
    },
    male: {
        color: 'skyblue'
    },
    female: {
        color: 'pink'
    },
    listdisplay : {
        flexDirection : "row" ,
        alignContent : "space-between",
        flexWrap : 'wrap',
        backgroundColor:'white',
        height:90,
        marginBottom:5
    }

})

export { styles }