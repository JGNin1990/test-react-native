import { View, Text, Image } from 'react-native'
import React from 'react'
import { PHOTO_URL } from '../../src/components/common'
const ServiceHistory = (props) => {
    const data = props.route.params
    console.log('data', data);
    // const profile = require('../../src/image/user.png')
    const profile = require('../../src/image/account.png');

    return (
        <>

            <View style={{ backgroundColor: 'white' }} >
                <View style={{ backgroundColor: "#302a69", height: 80, }}>

                </View>


                <View style={{
                    width: '90%', backgroundColor: 'white',
                    borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomEndRadius: 20, borderBottomLeftRadius: 20,
                    position: 'absolute', top: 1,
                    padding: 20, margin: 20,
                }}>


                    {data.photo ?
                        <Image
                            resizeMode="cover"
                            source={{ uri: `${PHOTO_URL}` + '/client/' + data.photo }}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 30,
                            }}
                        />
                        :

                        <Image
                            resizeMode="cover"
                            source={profile}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 30,
                            }}
                        />
                    }

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: "black", marginTop: 5, fontSize: 14, fontFamily: 'Quicksand-Bold' }}>Customer Name :</Text>
                        <Text style={{ color: "black", marginTop: 5, fontFamily: "Quicksand-Regular", fontSize: 14, }}>{data.first_name}{data.last_name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: "black", marginTop: 10, fontSize: 14, fontFamily: 'Quicksand-Bold' }}>Address :</Text>

                        <Text style={{ color: "black", marginTop: 10, fontSize: 14, fontFamily: "Quicksand-Regular" }}>{data.address}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: "black", marginTop: 10, fontSize: 14, fontFamily: 'Quicksand-Bold' }}>Phone :</Text>
                        <Text style={{ color: "black", marginTop: 10, fontSize: 14, fontFamily: "Quicksand-Regular" }}>{data.phone}</Text>

                    </View>
                    <View
                        style={{
                            // flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />

                    <Text style={{ color: "black", marginTop: 10, fontFamily: 'Quicksand-Bold' }}>Customer Number</Text>
                    <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.customer_no}</Text>
                    {/* </View> */}

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Sale Rep Name</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.sales_rep_name}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />
                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Guide</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.guide ? data.guide : '-'}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />



                    <View style={{ flex: 1, marginTop: 10 }}>
                        <Text style={{ color: "black", fontFamily: 'Quicksand-Bold' }}>Remark</Text>
                        <Text style={{ color: "black", marginTop: 10, fontFamily: "Quicksand-Regular" }}>{data.remark}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            width: '99%',
                            height: 1,
                            // alignSelf: 'center',
                            // borderBottomColor: '#83859a',
                            // borderBottomWidth: 0.2,
                            backgroundColor: '#c9c9c9',
                            marginTop: 10
                        }}
                    />


                </View>

            </View>



        </>
    )
}

export default ServiceHistory