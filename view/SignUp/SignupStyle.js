import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    inputContainerStyle: {
        borderWidth: 0.8,
        borderColor: "white",
        borderRadius: 15,
        height: 50,
    },
    leftIconContainerStyle: {
        height: 25,
        width: 48,
        borderRightWidth: 0.8,
        borderColor: "#c9c9c9",
    },
    inputStyle: {
        marginLeft: 10,
        fontSize: 13,
        color: 'white'
    },
    container: {
        flex: 1, backgroundColor: '#302a69', justifyContent: 'center'
    },
    welcometext: {
        fontSize: 25, color: 'white', textAlign: 'center',
    },
    signupbutton: {
        borderRadius: 15, backgroundColor: '#f7b840'
    },
    signupbtncontainer: {
        marginRight: 10, marginLeft: 10, marginTop: 10
    },
    subcontainer: {
        flexDirection: 'row', justifyContent: 'space-around', marginTop: 20
    },
    signuptext: {
        color: 'white', textAlign: 'center', marginTop: 20
    }

})

export { styles }