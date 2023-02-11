import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({

    invoicebg : {
        backgroundColor : '#ffffff' ,
        borderRadius : 10 ,
        marginTop : 20 ,
        marginHorizontal : 20,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.80,
        elevation: 10,
        marginBottom : 20
    },
    planName : {
        color : '#040404',
        fontSize : 20 ,
        fontWeight : "bold" ,
        alignSelf : 'center',
        marginTop : 20
    },
    datestyle : {
        fontWeight : 'bold',
        color : '#040404',
        fontSize : 15 ,
        marginLeft : 12,
        marginTop : 12 ,
    },
    dotstyle : {
        color : '#ffc108',
        fontSize : 30 ,
        marginLeft : 12,
        marginTop : 12 ,
        width : '50%',
    },
    listtext : {
        color : '#040404' ,
        fontSize : 15 ,
        marginTop : 12 ,
        width : '50%'
    },
    payButton : {
        backgroundColor : '#302a69',
        width : '90%' ,
        alignSelf : "center" ,
        marginTop : 35 ,
        borderRadius : 3 ,
        height : 45 ,
        shadowColor: '#000000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.80,
        elevation: 10,
    }

})

export { styles }