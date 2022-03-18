import React, {useState} from "react"
import {View, Text, TextInput, Button} from "react-native"
import ResultImc from "./ResultImc/";



export default function Form() {

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [messageImc, setMessageImc] = useState("preencha o peso e altura")
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")

}

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
                placeholder="EX: 75.365"
                keyboardType="numeric"
                ></TextInput>
                <Button title="Calcular IMC"/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>

        </View>
    );
}