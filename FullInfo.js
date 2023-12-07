import React from "react";
import { View, Text } from "react-native";
import { gStyle } from "../Styles";
import { StyleSheet } from 'react-native';


export default function FullInfo({ route }) {
    return (
        <View style={gStyle.main}>
            <Text style={{color:'#3562FF', marginTop: 1, fontSize:20, textAlign:"center", fontWeight:'bold'}}>Детали задачи</Text>
            <Text style={tStyle.text}>Название</Text>
            <Text>{route.params.name}</Text>
            <Text style={tStyle.text}>Описание задачи</Text>
            <Text>{route.params.full}</Text>
            <Text style={tStyle.text}>Цена</Text>
            <Text>{route.params.sale}</Text>
            <Text style={tStyle.text}>Адрес</Text>
            <Text>{route.params.addres}</Text>
            <Text style={tStyle.text}>Дата</Text>
            <Text>{route.params.data}</Text>
        </View>
    )
}

export const tStyle = StyleSheet.create({
    text: {
        color:'#3562FF',
        marginTop: 10, 
        fontSize:15 
    }
})