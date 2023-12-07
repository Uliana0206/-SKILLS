import { View, Text, Image } from 'react-native';
import React from 'react';
import { gStyle } from '../Styles';

export default function Hi({ navigation }) {
    const loadScenereg = () => {
        navigation.navigate('Registration');
    }
    const loadSceneVhod = () => {
        navigation.navigate('Login')
    }

    return (

      <View style={gStyle.main}>
        <Image style={gStyle.foto} source={require('../assets/lobabo.png')}/>
        <View style={gStyle.buttonLogin}>
            <Text onPress={loadSceneVhod} style={gStyle.textbutton1}>Войти</Text>
        </View>
        <View style={{backgroundColor:"#3562FF", marginTop: 10, marginHorizontal: 20, paddingVertical: 2, borderRadius: 3}}>
        </View>
        <Text style={{color: "#3562FF", textAlign: 'center', fontSize:18 }}>Нет аккаунта?</Text>
        <View style={gStyle.button3}>
            <Text onPress={loadScenereg} style={gStyle.textbutton1}>Зарегистрироваться</Text>
        </View>
    </View>
    );
}

