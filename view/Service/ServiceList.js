

/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, createContext, useState, useMemo, useContext } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
  TextInput,


} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';
import { styles } from './ServiceListStyle';
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { fetch_clientrequest_list } from '../../src/redux/Client_requestReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { fetch_loged_team_member, fetch_service_report_list } from '../../src/redux/Team_memberReducer';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AuthContext } from '../../src/components/context';
import { Context } from '../../src/components/context';
import { PHOTO_URL } from '../../src/components/common';
const nodataarequesticion = require('../../asset/Home/31.png')

const searchicon = require('../../asset/ServiceRequest/search.png')

const Tab = createMaterialTopTabNavigator();
const profile = require('../../src/image/account.png');



const RequestScreen = (clientdata) => {
  const navigation = useNavigation();

  const filtered_clientdata = clientdata.clientdata.filter(value => value.service_status == 3 && clientdata.user.service_team_admin_id == value.approved_by_service_admin)

  const [filteredData, setfilteredData] = useState(filtered_clientdata)
  const [masterData, setmasterData] = useState(filtered_clientdata)
  const [search, setSearch] = useState('')

  const ItemView = ({ item }) => {

    return (


      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{
          flex: 1, width: '90%', height: 80, borderColor: '#8993DA', borderWidth: 1,
          borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
        }}>
          {item.photo ?
            <Image
              source={{ uri: `${PHOTO_URL}` + '/client/' + item.photo }}


              style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

            />
            :
            <Image
              source={profile}

              style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

            />}

          <View style={{ flexDirection: 'column', marginTop: 10, width: '50%', }}>
            <Text style={{ color: "#78858F" }}>{item.first_name} {item.last_name}</Text>
            <Text style={{ color: "#78858F" }}>{item.customer_no}</Text>
            <Text style={{ color: "#78858F" }}>{item.phone}</Text>
          </View>

          <TouchableOpacity style={{
            backgroundColor: '#BFC6FD', width: wp(23), height: hp(5), marginRight: 10, marginTop: 25, justifyContent: 'center',
            alignItems: 'center', borderRadius: 5
          }} onPress={() => navigation.navigate('Service Detail', { params: item, teamadmin_id: clientdata.user.service_team_admin_id })}>
            <Text style={{ color: '#654EA3', fontSize: 11 }}>Report</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    )

  }


  const searchfilter = (text) => {

    let searchdata = masterData.filter((item) => {
      return item.first_name.toUpperCase().includes(text.toUpperCase()) || item.last_name.toUpperCase().includes(text.toUpperCase())
    })
    setSearch(text)
    setfilteredData(searchdata)

  }



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList

        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{

          marginTop: 10,

          paddingBottom: 50,

        }}
        data={filteredData}
        ListHeaderComponent={
          <>

            <TextInput
              style={{
                color: "black",
                width: '90%',
                height: 50,
                backgroundColor: '#fff',
                borderColor: '#ccc',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 20,
                marginLeft: 15,
                padding: 10,
                fontFamily: 'Quicksand-Regular',
                marginBottom: 20

              }}
              value={search}
              onChangeText={(val) => searchfilter(val)}
              placeholder="Search Here..."
              placeholderTextColor='#697B7A'

            />

            {filteredData.length == 0 &&
              <View style={{ flexDirection: 'row', padding: 5, marginTop: 20, justifyContent: 'space-around', }}>
                <View style={{ justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontFamily: 'DMSans-Regular', color: '#1C2D57', fontSize: 14, textAlign: 'center', marginLeft: 20, marginRight: 20, padding: 20 }}>There's no data for you </Text>

                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}  >


                  <Image
                    resizeMode="contain"
                    source={nodataarequesticion}
                    style={{ width: wp(30), height: hp(15), marginRight: 25 }}
                  />
                </View>

              </View>
            }


          </>

        }
        renderItem={ItemView}

      />
    </View>
  );
}

const RejectScreen = (rejected_client) => {
  const filtered_data = rejected_client.reject_data.filter((val) => val.service_team_admin_id == rejected_client.user.service_team_admin_id && val.status == 2 && val.report_type == 0)
  const navigation = useNavigation();
  const [filteredData, setfilteredData] = useState(filtered_data)
  const [masterData, setmasterData] = useState(filtered_data)
  const [search, setSearch] = useState('')

  const searchfilter = (text) => {
    let searchdata = masterData.filter((item) => {
      return item.first_name.toUpperCase().includes(text.toUpperCase()) || item.last_name.toUpperCase().includes(text.toUpperCase())
    })
    setSearch(text)
    setfilteredData(searchdata)

  }
  const ItemView = ({ item }) => {
    return (

      // borderColor: '#C20978',
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{
          flex: 1, width: '90%', height: 80, borderColor: '#8993DA', borderWidth: 1,
          borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10
        }}>
          {/* {item.photo ?
            <Image
              source={{ uri: `${PHOTO_URL}` + '/client/' + item.photo }}


              style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

            />
            :
            <Image
              source={profile}

              style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

            />} */}

          <View style={{ flexDirection: 'column', marginTop: 10, width: '50%', }}>
            <Text style={{ color: "#78858F" }}>{item.customer_name}</Text>
            <Text style={{ color: "#78858F" }}>{item.customer_id}</Text>
            <Text style={{ color: "#78858F" }}>{item.contact_telephone}</Text>
          </View>

          <TouchableOpacity style={{
            backgroundColor: '#BFC6FD', width: wp(23), height: hp(5), marginRight: 10, marginTop: 25, justifyContent: 'center',
            alignItems: 'center', borderRadius: 5
          }} onPress={() => navigation.navigate('editreport', item)}>
            <Text style={{ color: '#654EA3', fontSize: 11 }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    )
  }

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList

        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{

          marginTop: 10,

          paddingBottom: 50,

        }}
        data={filteredData}
        ListHeaderComponent={
          <>

            <TextInput
              style={{
                color: "black",
                width: '90%',
                height: 50,
                backgroundColor: '#fff',
                borderColor: '#ccc',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 20,
                marginLeft: 15,
                padding: 10,
                fontFamily: 'Quicksand-Regular',
                marginBottom: 20

              }}
              value={search}
              onChangeText={(val) => searchfilter(val)}
              placeholder="Search Here..."
              placeholderTextColor='#697B7A'

            />

            {filteredData.length == 0 &&
              <View style={{ flexDirection: 'row', padding: 5, marginTop: 20, justifyContent: 'space-around', }}>
                <View style={{ justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontFamily: 'DMSans-Regular', color: '#1C2D57', fontSize: 14, textAlign: 'center', marginLeft: 20, marginRight: 20, padding: 20 }}>There's no data for you </Text>

                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}  >
                  <Image
                    resizeMode="contain"
                    source={nodataarequesticion}
                    style={{ width: wp(30), height: hp(15), marginRight: 25 }}
                  />
                </View>

              </View>
            }

          </>

        }
        renderItem={ItemView}

      />
    </View>
  );

}

function CompletedScreen(complete_clientdata) {
  const profile = require('../../src/image/account.png');

  const navigation = useNavigation();
  const filtered_data = complete_clientdata.complete_clientdata.filter(value => value.service_status == 4 && value.approved_by_service_admin == complete_clientdata.user.service_team_admin_id)
  const [filteredData, setfilteredData] = useState(filtered_data)
  const [masterData, setmasterData] = useState(filtered_data)
  const [search, setSearch] = useState('')

  const searchfilter = (text) => {
    let searchdata = masterData.filter((item) => {
      return item.first_name.toUpperCase().includes(text.toUpperCase()) || item.last_name.toUpperCase().includes(text.toUpperCase())
    })
    setSearch(text)
    setfilteredData(searchdata)

  }
  const ItemView = ({ item }) => {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{
          flex: 1, width: '90%', height: 80, borderColor: '#8993DA', borderWidth: 1,
          borderRadius: 20, backgroundColor: 'white', marginLeft: 20, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
        }}>
          {item.photo ?
            <Image
              source={{ uri: `${PHOTO_URL}` + '/client/' + item.photo }}


              style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

            />
            :
            <Image
              source={profile}

              style={{ width: 40, height: 40, borderRadius: 40, marginTop: 14, marginLeft: 5 }}

            />}

          <View style={{ flexDirection: 'column', marginTop: 10, width: '50%', }}>
            <Text style={{ color: "#78858F" }}>{item.first_name} {item.last_name}</Text>
            <Text style={{ color: "#78858F" }}>{item.customer_no}</Text>
            <Text style={{ color: "#78858F" }}>{item.phone}</Text>
          </View>

          <TouchableOpacity style={{
            backgroundColor: '#BFC6FD', width: wp(23), height: hp(5), marginRight: 10, marginTop: 25, justifyContent: 'center',
            alignItems: 'center', borderRadius: 5
          }} onPress={() => navigation.navigate('Servicehistory', item)}>
            <Text style={{ color: '#654EA3', fontSize: 11 }}>View</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    )
  }

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList

        removeClippedSubviews={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{

          marginTop: 10,

          paddingBottom: 50,

        }}
        data={filteredData}
        ListHeaderComponent={
          <>

            <TextInput
              style={{
                color: "black",
                width: '90%',
                height: 50,
                backgroundColor: '#fff',
                borderColor: '#ccc',
                borderWidth: 0.5,
                borderRadius: 15,
                marginTop: 20,
                marginLeft: 15,
                padding: 10,
                fontFamily: 'Quicksand-Regular',
                marginBottom: 20

              }}
              value={search}
              onChangeText={(val) => searchfilter(val)}
              placeholder="Search Here..."
              placeholderTextColor='#697B7A'

            />

            {filteredData.length == 0 &&
              <View style={{ flexDirection: 'row', padding: 5, marginTop: 20, justifyContent: 'space-around', }}>
                <View style={{ justifyContent: 'center', alignItems: "center" }} >
                  <Text style={{ fontFamily: 'DMSans-Regular', color: '#1C2D57', fontSize: 14, textAlign: 'center', marginLeft: 20, marginRight: 20, padding: 20 }}>There's no data for you </Text>

                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}  >
                  <Image
                    resizeMode="contain"
                    source={nodataarequesticion}
                    style={{ width: wp(30), height: hp(15), marginRight: 25 }}
                  />
                </View>

              </View>
            }

          </>

        }
        renderItem={ItemView}

      />
    </View>
  );
}



const ServiceList = (props) => {
  const navigation = useNavigation();
  const { all_client_list, loged_user, all_service_list } = props
  const data = 'Data from parent';

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      AsyncStorage.getItem("id").then((id) => {
        props.fetch_clientrequest_list(id)
        props.fetch_loged_team_member(id)
        props.fetch_service_report_list()
      })
    })

  }, [])
  const navigatedetil = (value) => {
    navigation.navigate('Service Detail', { params: data })
  }
  const value = {
    all_client_list


  };
  return (


    <View style={styles.mainContainer}>

      <View style={{ margin: 16, padding: 10 }}>
        <Text style={{ color: '#302A68', fontFamily: 'Mulish-VariableFont_wght', fontWeight: 'bold', fontSize: 18, }}>Request List</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#302a69', marginLeft: 10 },
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarActiveTintColor: "#8993DA",
          tabBarInactiveTintColor: "#9E9E9E",
          tabBarStyle: { height: 55, justifyContent: 'center' },
          tabBarIndicatorContainerStyle: { width: '100%', width: '87%' }

        }}
      >
        <Tab.Screen name="Request List" component={() => <RequestScreen clientdata={props.all_client_list} user={props.loged_user} />}

        />
        <Tab.Screen name="Reject List" component={() => <RejectScreen user={props.loged_user} reject_data={all_service_list} />}

        />
        <Tab.Screen name="Complete List" component={() => <CompletedScreen complete_clientdata={props.all_client_list} user={props.loged_user} />} />
      </Tab.Navigator>

    </View>
  );
};

const stateToProps = state => {
  return {
    all_client_list: state.client_request.client_request_list,
    loged_user: state.team_member.team_member.data,
    all_service_list: state.team_member.service_report_list
  };
}

const ServicelistWrap = reduxForm({
  form: "ServiceListForm",


})(ServiceList)
export default connect(stateToProps, { fetch_service_report_list, fetch_clientrequest_list, fetch_loged_team_member })(ServicelistWrap)

