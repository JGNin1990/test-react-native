import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        // flex: 1, flexDirection: 'row', flexWrap: "wrap",
        flexDirection: "row",
        flexWrap: "wrap",

    },
    buttoncard: {
        // width: (width / 2) - 15,
        height: 230,
        paddingHorizontal: 9,
        paddingVertical: 9,
        backgroundColor: "#302a69",
        marginHorizontal: "2%",
        minWidth: "30%",
        textAlign: "center",
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        elevation: 3,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btndetail: {
        backgroundColor: '#f7b840', borderRadius: 10, height: 30, justifyContent: 'center', width: 120, marginTop: 6
    },
    defaultimg: {
        width: 100, height: 50, borderRadius: 30, alignItems: 'flex-start',
    }


})
export default styles