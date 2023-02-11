import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign'
import styled from 'styled-components/native'
import HomeScreen from '../view/Home/Mainhome';
import ServiceList from '../view/Service/ServiceList';
import ServiceDetail from '../view/Service/ServiceDetail';
import RequestForm from '../view/Servicerequest/requestform'
import Transaction from '../view/Transaction/Transactionlist'
import Profile from '../view/Profile/Profile'
import Invoice from '../view/Invoice/invoicetemplate'
import Login from '../view/Login/Login'
import Signup from '../view/SignUp/Signup'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceTeamMemberList from '../view/SeriveTeamMeamber/ServiceTeamMemberList'
import ServiceTeamMemberDetail from '../view/SeriveTeamMeamber/ServiceTeamMemberDetail'
import EditProfile from '../view/Profile/EditProfile'
import Forgotpassword from '../view/Login/Forgotpassword'
import Otp from '../view/Login/Otp'
import Newpasswordform from '../view/Login/Newpasswordform'
import Maintainlist from '../view/Maintain/Maintainlist'
import Maintainlist_Detail from '../view/Maintain/Maintainlist_Detail'
import Maintainlist_History from '../view/Maintain/Maintainlist_History'
import TabNavigation from './TabNavigation'
import Maintainreport from '../view/Maintain/Maintainreport'
import ServiceReport from '../view/Service/ServiceReport'
import ServiceHistory from '../view/Service/ServiceHistory'
import ChangePasswordScreen from '../view/Profile/ChangePasswordScreen'
import Userguide from '../view/Profile/Userguide'
import EditServiceReport from '../view/Service/EditServiceReport'
import EditMaintainlist from '../view/Maintain/EditMaintainlist'
// const [id, setId] = useState()

// import {
// 	createDrawerNavigator,
// 	DrawerItem,
// 	DrawerContentScrollView,
// } from '@react-navigation/drawer';
const Tabs = AnimatedTabBarNavigator()

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const Screen = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: #f2f2f2;
`

const Logo = () => (
	<Image
		source={require('../asset/logo2.png')}
		resizeMode={'cover'}
		style={{ width: 150, height: 150 }}
	/>
)

const TabBarIcon = props => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 24}
			color={props.tintColor}
		/>
	)
}

const Navigation = (props) => (
	<Stack.Navigator>
		<Stack.Screen
			name="Main"
			component={TabNavigation}
			options={{ headerShown: false }}
		/>
		{/* <Stack.Screen
			name="login"
			component={Login}
			options={{
				//  headerShown: false,
				// headerLeft: () => false,
				// headerBackVisible: false,
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/> */}


		{/* <Stack.Screen
			name="Main"
			component={TabNavigation}
			options={{ headerShown: false }}
		/> */}
		{/* <Stack.Screen
			name="Main"
			component={HomeScreen}
			options={{
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/> */}

		<Stack.Screen
			name="Invoice"
			component={Invoice}
			options={{
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		<Stack.Screen
			name="User Guide"
			component={Userguide}
			options={{
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		<Stack.Screen
			name="Servicereport"
			component={ServiceReport}
			options={{
				title: 'Service Report',
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		<Stack.Screen
			name="maintainreport"
			component={Maintainreport}
			options={{
				title: 'Maintain Report',
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>
		<Stack.Screen
			name="editreport"
			component={EditServiceReport}
			options={{
				title: 'Edit Service Report',
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>
		<Stack.Screen
			name="editmaintain"
			component={EditMaintainlist}
			options={{
				title: 'Edit Maintain Report',
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>
		<Stack.Screen
			name="Service Detail"
			component={ServiceDetail}
			options={{
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		<Stack.Screen
			name="Service Team Member List"
			component={ServiceTeamMemberList}
			options={{
				title: 'Team Members',
				headerShown: true,
				headerTintColor: '#302a69',
				headerShadowVisible: false,
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: 'white',
				},
			}}
		/>

		<Stack.Screen
			name="Password Screen"
			component={ChangePasswordScreen}
			options={{
				title: 'Update Password',
				headerShown: true,
				headerTintColor: '#302a69',
				headerShadowVisible: false,
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: 'white',
				},
			}}
		/>



		<Stack.Screen
			name="Servicehistory"
			component={ServiceHistory}
			options={{
				title: "Service History List",
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>


		<Stack.Screen
			name="Edit Profile"
			component={EditProfile}
			options={{
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		<Stack.Screen
			name="Service Team Member List Detail"
			component={ServiceTeamMemberDetail}
			options={{
				title: 'Member Detail',

				// headerShown: true,
				// headerTintColor: '#ffffff',
				// headerStyle: {
				// 	backgroundColor: '#302a69',
				// },
				headerShown: true,
				headerTintColor: '#302a69',
				headerShadowVisible: false,
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: 'white',
				},
			}}
		/>

		<Stack.Screen
			name="Forgot password"
			component={Forgotpassword}
			options={{
				//  headerShown: false,
				// headerLeft: () => false,
				// headerBackVisible: false,
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		{/* <Stack.Screen
			name="OTP"
			component={Otp}
			options={{
				//  headerShown: false,
				// headerLeft: () => false,
				// headerBackVisible: false,
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/> */}

		<Stack.Screen
			name="Maintain List"
			component={Maintainlist}
			options={{
				//  headerShown: false,
				// headerLeft: () => false,
				// headerBackVisible: false,
				headerShown: false,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>

		<Stack.Screen
			name="Maintain List Detail"
			component={Maintainlist_Detail}
			options={{
				//  headerShown: false,
				// headerLeft: () => false,
				// headerBackVisible: false,
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>
		{/* <Stack.Screen
			name="Create New Password"
			component={Newpasswordform}
			options={{
				//  headerShown: false,
				// headerLeft: () => false,
				// headerBackVisible: false,
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/> */}




		<Stack.Screen
			name="Maintainhistory"

			component={Maintainlist_History}
			options={{
				title: "Maintain List History Detail",
				headerShown: false,
				headerLeft: () => false,
				headerBackVisible: false,
				headerShown: true,
				headerTintColor: '#ffffff',
				headerStyle: {
					backgroundColor: '#302a69',
				},
			}}
		/>
	</Stack.Navigator >


)
export default Navigation

