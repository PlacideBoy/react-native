import React from "react"
import {TextInput, View} from "react-native"



export default function Form() {
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="EX: 1.75"
                keyboardType="numeric"
                ></TextInput>
                <Text>Peso</Text>
                <TextInput
                placeholder="EX: 75.3"
                keyboardType="numeric"
                ></TextInput>
            </View>
        </View>
    );
}