import React, { useState } from "react";
import { Row, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Button, TextInput, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
const RenderImage = ({ viewimg, label, meta, modalVisible, modalvisibile, fileData, imageGalleryLaunch, fileUri, input }) => {
    input.onChange(viewimg)
    const Rendererror = ({ touched, error }) => {
        if (touched && error) {
            return (
                <Text style={{ color: 'red', marginLeft: 10 }}>{error}</Text>
            )
        }
    }

    return (
        <>
            <View style={{
                paddingVertical: 18,
                paddingHorizontal: 8,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Text style={{ fontSize: 14, color: 'gray', fontWeight: 'bold', marginLeft: 5, }}>{label}</Text>

            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', }}>

                <TouchableOpacity style={styles.filebutton} onPress={imageGalleryLaunch} >
                    <LinearGradient
                        colors={["#f7b840", "#f7b840"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.signGradient}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}><Icon name="folder" color="white" style={{ marginRight: 5, marginLeft: 3 }} size={20} /><Text style={{ color: 'white' }}>Choose File</Text></View>
                    </LinearGradient>
                </TouchableOpacity>


            </View>

            <ScrollView style={{
                width: '100%',
                backgroundColor: 'white',
                marginTop: 15,

            }}
                showsHorizontalScrollIndicator={false}
                horizontal // Change the direction to horizontal
                pagingEnabled // Enable paging
                decelerationRate={0} // Disable deceleration
                snapToAlignment='center'

            >
                {viewimg && viewimg.length > 0 &&
                    viewimg.map((value, key) => {
                        return (
                            <View style={{ marginLeft: 20 }} key={key}>
                                <Image style={{ width: 100, height: 100 }}
                                    source={{ uri: value.path }}
                                />
                            </View>
                        )
                    })}

            </ScrollView >
            {Rendererror(meta)}
        </>
    )
}
export default RenderImage
const styles = StyleSheet.create({
    //image  modal
    titletext: {
        textAlign: "center",
        marginBottom: 15,
        marginTop: 10,
        fontSize: 17,
        width: 280,
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    signGradient: {
        height: 50,
        borderRadius: 7,
        justifyContent: "center",
        shadowColor: "#76b81f",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonImageIconStyle: {
        paddingTop: 2,
        height: 60,
        width: 60,
        resizeMode: 'cover',
    },
    labelStyle: {
        marginBottom: 6,
        fontSize: 13,
    },

    signButton: {
        width: "100%",
        marginVertical: 7,
        paddingHorizontal: 9,
    },
    filebutton: {
        borderRadius: 10,
        width: "50%",
        marginVertical: 7,
        marginLeft: 10,
        paddingHorizontal: 9,
    },
    signText: {
        color: "#fff",
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "Poppins_600SemiBold",
        fontSize: 13,

    },
    desc: {
        borderRadius: 8,
        borderWidth: 1,
        height: Platform.OS === "ios" ? 60 : 80,
        fontSize: 16,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        padding: 10,
        marginTop: 8,
        borderColor: '#c9c5c5'
    },
    itemImage: {
        height: 40,
        width: 40,
        borderRadius: 8,
        resizeMode: 'contain'
    },
    //Image 
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    },
    button: {
        width: 250,
        height: 60,
        backgroundColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 12
    },
    labelStyle: {
        marginBottom: 6,
        fontSize: 13,
    },
    inputContainerStyle: {
        borderWidth: 0.8,
        borderColor: "#c9c9c9",
        borderRadius: 15,
        height: 50,
    },
    leftIconContainerStyle: {
        height: 25,
        width: '30%',
        borderRightWidth: 0.8,
        borderColor: "#c9c9c9",
    },
    cardcotainer: {
        width: '100%',
        height: 120,
        backgroundColor: "white",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }


})
