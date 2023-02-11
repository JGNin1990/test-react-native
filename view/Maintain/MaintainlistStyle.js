import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
    },
    containerList: {
        padding: 10,
        flex: 1
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'gray',
        borderWidth: 2,

    },
    containerheader: {
        backgroundColor: '#302a69',
        height: 140,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
        // borderBottomEndRadius : 40 ,
        // borderBottomStartRadius : 40 

    },

})
export default styles