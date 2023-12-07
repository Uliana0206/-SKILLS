import React, {useEffect, useState} from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import {firebase} from '../firebase';
import { gStyle } from "../Styles";


const HomeScreen = ({ navigation }) => {
    const [name, setName] = useState([]);

    const ListingSc = () => {
        navigation.navigate('ListingScreen')   
    };
    const New = () => {
        navigation.navigate('New')   
    }

    useEffect(() => {
        firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
            if(snapshot.exists){
                setName(snapshot.data()) 
            }
        else {
            console.log('does not exist')
        }
        })
    }, [])

    return (
        <SafeAreaView style={gStyle.main}>
            <Text>{name.email}</Text>
            <Text style={{fontSize:20, fontWeight:"bold", color:'#3562FF'}}>
                {name.firsName}
            </Text>

            <View style={gStyle.button3}>
                <Text onPress={ListingSc} style={{color: "#ffffff", textAlign: 'center', fontSize:18 }}>Листинг задач</Text>
            </View>
            <View style={gStyle.button3}>
                <Text onPress={New} style={{color: "#ffffff", textAlign: 'center', fontSize:18 }}>Создать задачу</Text>
            </View>

            <TouchableOpacity 
                onPress={() => {firebase.auth().signOut()}}
                    style={gStyle.button}
                >
                    <Text style={{fontSize:22, fontWeight:'bold', color:'#ffffff', textAlign:"center"}}>Выход</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen

