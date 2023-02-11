import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, Text, PermissionsAndroid, Image } from 'react-native';
import { useForm } from 'react-hook-form';
import { FormBuilder } from 'react-native-paper-form-builder';
import { Button, TextInput } from 'react-native-paper';
//import Geolocation from '@react-native-community/geolocation';


const logo2 = require('../../asset/logo2.png');

const RequestForm = props => {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // const [currentLongitude,setCurrentLongitude] = useState('');
  // const [currentLatitude,setCurrentLatitude] = useState('');
  // const [locationStatus,setLocationStatus] = useState('');

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'ios') {
  //       getOneTimeLocation();
  //       subscribeLocationLocation();
  //     } else {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: 'Location Access Required',
  //             message: 'This App needs to Access your location',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           //To Check, If Permission is granted
  //           getOneTimeLocation();
  //           subscribeLocationLocation();
  //         } else {
  //           setLocationStatus('Permission Denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };
  //   requestLocationPermission();
  //   return () => {
  //     Geolocation.clearWatch(watchID);
  //   };
  // }, []);

  // const getOneTimeLocation = () => {
  //   // alert('function1');
  //   setLocationStatus('Getting Location ...');
  //   Geolocation.getCurrentPosition(
  //     //Will give you the current location
  //     (position) => {
  //       setLocationStatus('You are Here');

  //       //getting the Longitude from the location json
  //       const currentLongitude = 
  //         JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = 
  //         JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Longitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 30000,
  //       maximumAge: 1000
  //     },
  //   );
  // };

  // const subscribeLocationLocation = () => {

  //   watchID = Geolocation.watchPosition(
  //     (position) => {
  //       //Will give you the location on location change

  //       setLocationStatus('You are Here');
  //       //alert( JSON.stringify(position.coords.latitude));

  //       //getting the Longitude from the location json        
  //       const currentLongitude =
  //         JSON.stringify(position.coords.longitude);

  //       //getting the Latitude from the location json
  //       const currentLatitude = 
  //         JSON.stringify(position.coords.latitude);

  //       //Setting Longitude state
  //       setCurrentLongitude(currentLongitude);

  //       //Setting Latitude state
  //       setCurrentLatitude(currentLatitude);
  //     },
  //     (error) => {
  //       setLocationStatus(error.message);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       maximumAge: 1000
  //     },
  //   );
  // };

  return (
    <ScrollView style={styles.scrollViewStyle}>
      <Image
        resizeMode='contain'
        style={styles.logo}
        source={logo2}
      />
      <Text style={styles.headingStyle}>FTTH Application Form</Text>
      <FormBuilder
        control={control}
        setFocus={setFocus}
        formConfigArray={[
          {
            type: 'text',
            name: 'name',
            textInputProps: {
              label: 'Name of Authorized Applicant',
              left: <TextInput.Icon name={'account'} />,
            },
            rules: {
              required: {
                value: true,
                message: 'Name is required',
              },
            },
          },
          {
            type: 'text',
            name: 'nrc',

            rules: {
              required: {
                value: true,
                message: 'NRC/Passport No is required',
              },
            },
            textInputProps: {
              label: 'NRC/Passport No',
              left: <TextInput.Icon name={'card'} />,
            },
          },
          {
            type: 'text',
            name: 'phone',
            rules: {
              required: {
                value: true,
                message: 'Phone is required',
              },
            },
            textInputProps: {
              label: 'Phone',
              left: <TextInput.Icon name={'phone'} />,
            },
          },
          {
            name: 'city',
            type: 'autocomplete',
            textInputProps: {
              label: 'City',
              left: <TextInput.Icon name={'office-building'} />,
            },
            rules: {
              required: {
                value: true,
                message: 'City is required',
              },
            },
            options: [
              {
                label: 'Yangon',
                value: 1,
              },
              {
                label: 'Mandalay',
                value: 2,
              },
              {
                label: 'Bago',
                value: 3,
              },
              {
                label: 'Nay Pyi Taw',
                value: 4,
              },
            ],
          },
          {
            name: 'township',
            type: 'autocomplete',
            textInputProps: {
              label: 'Township',
              left: <TextInput.Icon name={'office-building'} />,
            },
            rules: {
              required: {
                value: true,
                message: 'City is required',
              },
            },
            options: [
              {
                label: 'MayanGone',
                value: 1,
              },
              {
                label: 'Chan Mya Thar Zi',
                value: 2,
              },
              {
                label: 'Taungngu',
                value: 3,
              },
              {
                label: 'ZabuThiRi',
                value: 4,
              },
            ],
          },
          {
            type: 'password',
            name: 'password',
            rules: {
              required: {
                value: true,
                message: 'Password is required',
              },
            },
            textInputProps: {
              label: 'Password',
              left: <TextInput.Icon name={'lock'} />,
            },
          },
        ]}
      />

      <View style={{ marginBottom: 20, marginTop: 20 }}>
        <Button
          mode={'contained'}
          onPress={{}}>
          Get Location
        </Button>
      </View>
      <Button
        mode={'contained'}
        onPress={handleSubmit((data: any) => {
        })}>
        Submit
      </Button>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 12,
  },
  headingStyle: {
    fontSize: 20,
    color: '#27417d',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  logo: {
    alignSelf: 'center',
    marginTop: 0,
    width: 150,
    height: 60
  }
});
export default RequestForm