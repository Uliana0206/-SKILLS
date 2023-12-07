import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { gStyle } from "../Styles";
import Form from "./Form";
import { FlatList } from "react-native-gesture-handler";

const ListingScreen = ({ navigation }) => {
    const [news, setNew] = useState([
      { name: 'Привет', anons: 'Как создать задачу', full: 'Полное описание задачи', addres: 'адрес', sale: 'бесплатно', data: '28.11', key:'1'}
    ]);

    const [modalWindow, setModalWindow] = useState(false);

    const addArticlt = ( articlt ) => {
        setNew((list) => {
            articlt.key = Math.random().toString();
            return [
                articlt,
                ...list
            ]
        });
        setModalWindow(false);
    }

    return (
        <View style={gStyle.main}>
            <Text style={{color:'#3562FF', marginTop: 1, marginLeft:6, fontSize:18}}>Привет!</Text>
            <Text style={{marginTop: 3, marginLeft:6, fontSize:15}}>Пора проверить Листинг Задач</Text>
            <Modal visible={modalWindow}>
              <Text style={{color:'#3562FF', marginTop: 35, marginLeft:40, fontSize:18}}>Создание задачи</Text>
                <Form addArticlt={addArticlt} />
                <View style={gStyle.buttonLogin}>
                    <Text onPress={() => setModalWindow(false)} style={gStyle.textbutton1}>Выйти</Text>
                </View>
            </Modal>
            <View style={gStyle.button4}>
                <Text onPress={() => setModalWindow(true)} style={gStyle.textbutton1}>Создать задачу</Text>
            </View>
            <View style={gStyle.polefon}>
            <FlatList data={news} renderItem={({item}) => (
              <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)}>
                <Text style={{marginLeft:10, marginTop: 5, fontWeight:'bold', fontSize:15}}>{ item.name }</Text>
                <Text style={{marginLeft:10, marginTop: 1, fontWeight:'bold', fontSize:15}}>{ item.sale }</Text>
                <Text style={{marginLeft:10, marginTop: 5}}>{ item.anons }</Text>
                <Text style={{marginLeft:10, marginTop: 1}}>{ item.data }</Text>
                <Text style={{marginLeft:10, marginTop: 1, marginEnd: 10}}>{ item.addres }</Text>
              </TouchableOpacity>
            )}
            />
            </View>
        </View>
    )
}

export default ListingScreen