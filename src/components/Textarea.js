import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Textarea = (props) => {
    const [heigthmodal, setHeigth] = useState()
    const { meta, input } = props

    const Rendererror = ({ touched, error }) => {
        if (touched && error) {
            return (
                <Text style={{
                    color: 'red', marginLeft: 10, marginBottom: 20
                }}>{error}</Text>
            )
        }
    }

    // const handleContentSizeChange = ({ nativeEvent }) => {
    //     const { height } = nativeEvent.contentSize
    //     setHeigth(height > MAX_INPUT_HEIGHT ? MAX_INPUT_HEIGHT : height)
    // }
    return (
        <>
            <Text style={{ fontWeight: 'bold', color: '#8a8888', textAlign: 'left', alignSelf: 'stretch', marginLeft: 5 }}>{props.Remark}</Text>
            <ScrollView>
                <TextInput
                    {...input}
                    onContentSizeChange={(event) => {
                        setHeigth({ height: event.nativeEvent.contentSize.height })
                    }}

                    multiline
                    numberOfLines={4}

                    scrollEnabled={true}
                    onChangeText={input.onChange}

                    style={{
                        // heigth: Math.min(200, Math.max(35, heigth)),
                        borderRadius: 8,
                        borderWidth: 1,
                        // height: Platform.OS === "ios" ? 60 : 150,
                        fontSize: 16,
                        paddingHorizontal: 10,
                        marginHorizontal: 6,
                        padding: 10,
                        marginTop: 8,
                        borderColor: '#302a69',
                        //width: '100%',
                        color: 'black',
                        // heigth: heigthmodal

                    }}


                />
            </ScrollView>
            {Rendererror(meta)}

        </>



    )
}
export default Textarea