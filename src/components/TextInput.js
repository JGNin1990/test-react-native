import { Text, View } from 'react-native'
import React from 'react'
import { Icon, Input, Button } from 'react-native-elements'
import { styles } from '../../view/Login/LoginStyle'
const TextInput = (props) => {

    const { editinput, secureTextEntry, formname, meta, touched, error, placeholder, iconname, keyboardType, input } = props
    // console.log('input', input.name == "equitment" ? input.value)
    const Rendererror = ({ touched, error }) => {
        if (touched && error) {
            return (
                <Text style={{
                    color: 'red', marginLeft: 20,
                }}>{error}</Text>
            )
        }
    }

    return (
        <View>
            <Input
                {...input}
                placeholder={placeholder}
                inputContainerStyle={formname ? styles.forminputContainerStyle : styles.inputContainerStyle}
                leftIconContainerStyle={formname ? styles.formleftIconContainerStyle : styles.leftIconContainerStyle}
                leftIcon={<Icon
                    name={iconname}
                    type='font-awesome'
                    color='#bdbdbd'
                    size={22}
                    onPress={() => console.log('hello')}
                    onChangeText={input.onChange}
                />
                }
                inputStyle={formname ? styles.profileinputStyle : styles.inputStyle}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry ? true : false}

            />

            {Rendererror(meta)}
        </View>


    )
}
export default TextInput