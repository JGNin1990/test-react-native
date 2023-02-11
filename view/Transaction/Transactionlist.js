import React, { useState } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View, SafeAreaView, useWindowDimensions } from 'react-native';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { styles } from './Transactionstyle';
import CollapsibleList from "react-native-collapsible-list";
import { Badge } from 'react-native-elements'

import data from './MOCK_DATA.json';


// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

const image1 = require('../../asset/datapackage/header1.png');

export default function Transaction() {
  const [buttonText, setButtonText] = useState('Show More');
  const layout = useWindowDimensions();

  let startlist = ~~(Math.random() * 900);
  let list = data.splice(startlist, 100);

  return (
    <ScrollableTabView
      style={{ marginTop: 20 }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >

      <View tabLabel='All'>
        <TouchableOpacity style={styles.listdisplay}>
          <Text style={{width:150,fontSize:15,color:'#302a69',marginLeft:10}}>XS-MaxPlan</Text>
          <Text style={{width:150,fontSize:15,color:'#302a69',fontWeight:'bold',marginLeft:70,}} >35000 MMK</Text>
          <Text  style={{width:150,fontSize:15,color:'#302a69',marginLeft:10,}}>INV-001</Text>
          <Text  style={{width:150,fontSize:15,color:'#302a69',marginLeft:70,}}>20-12-2022</Text>
            <Badge
              status="success"
              containerStyle={{left:10,top:24 ,size:40,scaleX: 1.1, scaleY: 1.1}}
              value = "Success"
              fontSize={15}
            />
         
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}
        />
        <TouchableOpacity style={styles.listdisplay}>
          <Text style={{width:150,fontSize:15,color:'#302a69',marginLeft:10}}>XS-MaxPlan</Text>
          <Text style={{width:150,fontSize:15,color:'#302a69',fontWeight:'bold',marginLeft:70,}} >35000 MMK</Text>
          <Text  style={{width:150,fontSize:15,color:'#302a69',marginLeft:10,}}>INV-001</Text>
          <Text  style={{width:150,fontSize:15,color:'#302a69',marginLeft:70,}}>20-03-2022</Text>
            <Badge
              status="warning"
              containerStyle={{left:10,top:24,scaleX: 1.1, scaleY: 1.1}}
              value = "Pending"
            />
         
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
          }}
        />
        <TouchableOpacity style={styles.listdisplay}>
          <Text style={{width:150,fontSize:15,color:'#302a69',marginLeft:10}}>XS-MaxPlan</Text>
          <Text style={{width:150,fontSize:15,color:'#302a69',fontWeight:'bold',marginLeft:70,}} >35000 MMK</Text>
          <Text  style={{width:150,fontSize:15,color:'#302a69',marginLeft:10,}}>INV-001</Text>
          <Text  style={{width:150,fontSize:15,color:'#302a69',marginLeft:70,}}>20-05-2022</Text>
            <Badge
              status="error"
              containerStyle={{left:10,top:24,scaleX: 1.1, scaleY: 1.1}}
              value = "Error"
            />
         
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 0.3,
          }}
        />
      </View>
      <View tabLabel='Pending'>
        <Image
          resizeMode='contain'
          source={image1}
          style={styles.imagestyle}
        />
        <Text style={styles.nodata}>
          You have no pending Transactions
        </Text>
      </View>
      <View tabLabel='Success'>
        <Image
          resizeMode='contain'
          source={image1}
          style={styles.imagestyle}
        />
        <Text style={styles.nodata}>
          You have no success Transactions
        </Text>
      </View>

    </ScrollableTabView>

  );
}