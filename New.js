import React, { useState } from "react";
import { View, Image, Text, Modal } from "react-native";
import { gStyle } from "../Styles";
import Form from "./Form";

const New = () => {
    
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
            <Text style={{fontSize:25}}>САМОЕ ВРЕМЯ</Text>
            <Text style={{fontSize:25}}>ОПУБЛИКОВАТЬ</Text>
            <Text style={{fontSize:25}}>ЗАДАЧУ!</Text>
            <Text style={{color:'#767676'}}>Заполни короткую форму и</Text>
            <Text style={{color:'#767676'}}>получи отклик от специалиста</Text>
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
            <Image style={gStyle.foto1} source={require('../assets/New.png')}/>
        </View>
    )
}

export default New