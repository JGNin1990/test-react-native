import { Text, View, Dimensions, TouchableOpacity, LinearGradient } from 'react-native';
import { styles } from './SignupStyle';
import { Icon, Input, Button } from 'react-native-elements'
import React from 'react'

export default function Signup() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcometext}>Welcome!</Text>
            <View style={{ marginTop: 20 }}>
                <Input
                    placeholder='Email'
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIconContainerStyle={styles.leftIconContainerStyle}
                    leftIcon={<Icon
                        name='phone'
                        type='font-awesome'
                        color='white'
                        size={22}
                        onPress={() => console.log('hello')} />
                    }
                    inputStyle={styles.inputStyle}
                />

                <Input
                    placeholder='Password'
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIconContainerStyle={styles.leftIconContainerStyle}
                    leftIcon={<Icon
                        name='phone'
                        type='font-awesome'
                        color='white'
                        size={22}
                        onPress={() => console.log('hello')} />
                    }
                    inputStyle={styles.inputStyle}
                />

                <Button
                    title="SignUp"
                    buttonStyle={styles.signupbutton}
                    containerStyle={styles.signupbtncontainer}
                />

                <View style={styles.subcontainer}>
                    <Text style={styles.signuptext}>Login</Text>

                    <Text style={styles.signuptext}>Forgot Password?</Text>
                </View>


            </View>

        </View >
    )
}