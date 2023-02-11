import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';



export default function Userguide() {

    const data = [
        {
            key: 1,
            title: 'Service Reporting Guide',
            text: 'Customer၏အချက်အလက်အားကြည့်ပီး.\nreportတင်ရန်ခလုတ်အားနှိပ်ပါ။',
            image: require('../../src/image/UserGuide/1.jpg'),
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            text: 'ပေးထားသောformများအားမဖြစ်မနေ\nထည့်ရပါမည်။',
            image: require('../../src/image/UserGuide/2.jpg'),
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Maintain Report Guide',
            text: 'serviceပြင်ဆင်ရန်send reportအားနှိပ်၍\ncustomerအချက်အလက်အားကြည့်ပါ။',
            image: require('../../src/image/UserGuide/3.jpg'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 4,
            title: 'Maintain Report Guide',
            text: 'Service reportပြန်တင်ရန်\neditခလုတ်အားနှိပ်ပါ။',
            image: require('../../src/image/UserGuide/4.jpg'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 5,
            text: 'Descriptionအားမဖြစ်မနေထည့်ပေးရပါမည်။',
            image: require('../../src/image/UserGuide/5.jpg'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 6,
            text: 'လျှို့ဝှက်နံပတ်မေ့သွားလျှင်အကောင့်ဖွင့်ခဲ့သော\nဖုန်းနံပတ်အားထည့်ပါ။',
            image: require('../../src/image/UserGuide/6.jpg'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 7,
            text: 'ရောက်လာသောcodeနံပတ်အားထည့်ပါ။',
            image: require('../../src/image/UserGuide/7.jpg'),
            backgroundColor: '#22bcb5',
        },
        {
            key: 8,
            text: 'လျှို့ဝှက်နံပတ်အသစ်အားရိုက်ထည့်ပြီး\nsubmitခလုပ်အားနှိပ်ပါ။',
            image: require('../../src/image/UserGuide/8.jpg'),
            backgroundColor: '#22bcb5',
        }
    ];
    const rendernext = () => {
        return (
            <></>
        )
    }

    const renderdone = () => {
        return (
            <></>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <AppIntroSlider
                activeDotStyle={{ width: 12, backgroundColor: 'green' }}
                dotStyle={{ width: 12, backgroundColor: '#302A68' }}
                renderItem={renderItem} data={data} renderNextButton={rendernext} renderDoneButton={renderdone} showSkipButton={true} />
        </View>
    )
}
const styles = StyleSheet.create({
    slide: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 20
    },
    image: {
        width: 320,
        height: 450,
        // marginVertical: 32,
    },
    text: {
        // color: 'rgba(255, 255, 255, 0.8)',
        color: '#5da7ec',
        textAlign: 'center',
        marginTop: 15
    },
    title: {
        fontSize: 22,
        color: '#302A68',
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold'
    },
    buttonCircle: {
        width: 40,
        height: 40,
        // backgroundColor: 'rgba(0, 0, 0, .2)',
        backgroundColor: '#5da7ec',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#5da7ec'
    },

});