import React, { useState } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View, SafeAreaView, useWindowDimensions } from 'react-native';
import { styles } from './invoicestyle';
import Icon from 'react-native-vector-icons/AntDesign'

import { ListItem, Avatar } from 'react-native-elements'

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });


const image1 = require('../../asset/datapackage/header1.png');

export default function Invoice() {
    const [buttonText, setButtonText] = useState('Show More');
    const layout = useWindowDimensions();

    let startlist = ~~(Math.random() * 900);

    const list = [
        {
            name: '5 - 10 Devices at a time',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Average streaming',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'stream, download shows',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Download music/ photos/ Videos',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },
        {
            name: 'Unlimited Usage',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        },

    ]


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
            <View style={styles.invoicebg}>
                <Text style={styles.planName}>Plan - XS Max Plan</Text>
                <Text style={[styles.datestyle,{marginTop:30}]}><Icon name="tags" size={20} color="#040404" ></Icon>  21 / 03 / 2022</Text>
                {/* {list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: l.avatar_url }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))} */}
                <View
                    style={{
                        borderBottomColor: '#afafaf',
                        borderBottomWidth: 0.2,
                        marginHorizontal : 10,
                        marginVertical : 15
                    }}
                />
                <Text style={styles.datestyle}>
                    <Icon name="enviroment" size={20} color="#040404" ></Icon>  12 No / MinDaMa Road / Mayangone
                </Text>
                <View
                    style={{
                        borderBottomColor: '#afafaf',
                        borderBottomWidth: 0.2,
                        marginHorizontal : 10,
                        marginVertical : 15
                    }}
                />
                <Text style={styles.datestyle}>
                    <Icon name="phone" size={20} color="#040404" ></Icon>  09969500704
                </Text>
                <View
                    style={{
                        borderBottomColor: '#afafaf',
                        borderBottomWidth: 0.2,
                        marginHorizontal : 10,
                        marginVertical : 15
                    }}
                />
                <Text style={styles.datestyle}>
                    <Icon name="carryout" size={20} color="#040404" ></Icon>  Plan Price   <Text>                         32000 MMK</Text>
                </Text>
                <Text style={styles.datestyle}>
                    <Icon name="wallet" size={20} color="#040404" ></Icon>  Tax      <Text style={{marginLeft : 20}}>                                  200 MMK</Text>
                </Text>
                <View
                    style={{
                        borderBottomColor: '#afafaf',
                        borderBottomWidth: 0.2,
                        marginHorizontal : 10,
                        marginVertical : 15
                    }}
                />
                <Text style={styles.datestyle}>
                    <Icon name="wallet" size={20} color="#040404" ></Icon>  Total Fee      <Text style={{marginLeft : 20}}>                        32200 MMK</Text>
                </Text>
                
                <View style={{marginBottom:20}}></View>
            </View>
            <TouchableOpacity style={styles.payButton}>
                    <Text style={{color:'white',alignSelf:'center',marginVertical:12,fontWeight:'400'}}>
                        Pay Now
                    </Text>
                </TouchableOpacity>
        </ScrollView>
    );
}