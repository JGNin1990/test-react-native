import { View, Text } from 'react-native'
import React from 'react'
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar'
import HomeScreen from '../view/Home/Mainhome';
import ServiceList from '../view/Service/ServiceList';
import Profile from '../view/Profile/Profile'
import Test from '../view/Home/Test';
import ServiceTeamMemberList from '../view/SeriveTeamMeamber/ServiceTeamMemberList';
import Icon from 'react-native-vector-icons/AntDesign'
const Tabs = AnimatedTabBarNavigator()
const TabBarIcon = props => {
    return (
        <Icon
            name={props.name}
            size={props.size ? props.size : 24}
            color={props.tintColor}
        />
    )
}
const TabNavigation = () => {
    return (
        <Tabs.Navigator tabBarOptions={{
            // activeTintColor: "",
            inactiveTintColor: "#222222",
            // activeBackgroundColor: '#BFC6FD'
        }}>
            <Tabs.Screen
                name="Main"
                component={HomeScreen}
                options={{

                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            focused={focused}
                            tintColor={color}
                            name="home"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Service List"
                component={ServiceList}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarIcon
                            focused={focused}
                            tintColor={color}
                            name="setting"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="Member List"
                component={ServiceTeamMemberList}
                options={{

                    tabBarShowLabel: true,
                    tabBarIcon: ({ focused, color, size }) => (
                        <TabBarIcon
                            focused={focused}
                            tintColor={color}
                            name="team"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            focused={focused}
                            tintColor={color}
                            name="user"
                        />
                    ),
                }}
            />

            {/* <Tabs.Screen
                name="test"
                component={Test}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            focused={focused}
                            tintColor={color}
                            name="user"
                        />
                    ),
                }}
            /> */}
        </Tabs.Navigator>
    )
}
export default TabNavigation
