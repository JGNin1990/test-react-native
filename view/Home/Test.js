import React, { useRef, createRef } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity, ImageBackground, Platform, Linking } from 'react-native';

const width = Dimensions.get('window').width - 30;


const Test = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];


    const passwordInputRef = createRef();

    const [data, setData] = React.useState({
        device_id: '',
        check_textInputChange: false,
        isValidUser: true,
    });




    const [deviceID, setDeviceID] = React.useState(null);
    const [inputSearch, setInputSearch] = React.useState(null);

    const FlatList_Header = () => {
        return (
            <View style={{
                height: 45,
                width: "100%",
                backgroundColor: "#00B8D4",
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Text style={{ fontSize: 24, color: 'white' }}> Sample FlatList Header </Text>

            </View>
        );
    }
    const Card = ({ items }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { }}>
                <View style={styles.card}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 5,
                        }}>
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#ca2b20',
                                borderColor: '#fff',
                            }}>

                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 10, textAlign: 'center', color: '#05375a' }}>
                            Checking Device ID
                        </Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginRight: 10, textAlign: 'center', color: '#05375a' }}>
                            Please insert your device ID uu
                        </Text>
                        {/* <TextInput
                                      autoFocus={true}

              placeholder='Device ID'
              style={styles.textInput}
              autoCapitalize='none'
              // onChangeText={setDeviceID}
              // value={deviceID}
              returnKeyType="next"
              ref={lastNameRef} 
              onSubmitEditing={onSubmitEditing}


              // onEndEditing={(val) => textInputChange(val)}
            /> */}

                        {/* <TextInput
                            style={{
                                backgroundColor: 'red'
                            }}
                            onChangeText={(id) => setDeviceID(id)}
                            placeholder="Enter Device ID"
                            placeholderTextColor="#afafaf"
                            autoCapitalize="none"
                            returnKeyType="next"
                            keyboardType="numeric"
                            value={deviceID}
                            // onSubmitEditing={() =>
                            // passwordInputRef.current && passwordInputRef.current.focus()
                            // }
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        /> */}
                        <TextInput
                            style={{
                                backgroundColor: 'blue'
                            }}
                            value={deviceID}
                            onChangeText={setDeviceID}
                            placeholder="Username"
                        />





                    </View>

                </View>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView
            style={{ flex: 1 }}>


            <FlatList
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                data={DATA}
                // ListHeaderComponent={
                //     // <>
                //     //     <TextInput
                //     //         style={{
                //     //             backgroundColor: 'blue'
                //     //         }}
                //     //         value={deviceID}
                //     //         onChangeText={setDeviceID}
                //     //         placeholder="Username"
                //     //     />

                //     // </>
                //     Card()
                // }
                ListHeaderComponent={(items) => Card(items)}

                // renderItem={({ item }) => {
                //     return <Card items={item} />;
                // }}
                renderItem={() => <View />}
            // renderItem={({ item }) => <Card item={item} />}
            />
            <View
                style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                }}>
                <TouchableOpacity
                    onPress={() => { Linking.openURL('tel:${0123456789}') }}
                    style={[styles.signIn, {
                        backgroundColor: '#ca2b20',
                        borderColor: '#fff',
                        borderWidth: 1,
                    }]}
                >
                    <Text style={[styles.textSign, { color: '#fff' }]}>Call to Customer service</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    marginRight: 10,
                    marginBottom: 100,
                }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignInScreen")}
                    style={[styles.signIn, {
                        backgroundColor: '#ca2b20',
                        borderColor: '#fff',
                        borderWidth: 1,
                    }]}
                >
                    <Text style={[styles.textSign, { color: '#fff' }]}>Continue</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
    // categoryTextSelected: {
    //     color: COLORS.green,
    //     paddingBottom: 5,
    //     borderBottomWidth: 2,
    //     borderColor: COLORS.green,
    // },
    card: {
        height: 250,
        width,
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 200,
        padding: 15,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    searchContainer: {
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: 'red',
        marginLeft: 20,
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInput: {
        // flex: 1,
        // marginTop: 20,
        // padding: 20,
        // color: '#05375a',
        // height: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderColor: '#ca2b20',
        // borderWidth: 1,
        // borderRadius: 5
    },
});

export default Test;