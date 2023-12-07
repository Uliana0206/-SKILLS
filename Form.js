import React from "react";
import { View, Text, TextInput } from "react-native";
import { gStyle } from "../Styles";
import { Formik } from "formik";

export default function Form({ addArticlt }) {
    return (
        <View style={gStyle.main}>
            <Formik initialValues={{name: '', anons: '', full: '', addres: '', sale: '', data: ''}} onSubmit={(values, action) => {
                addArticlt(values);
                action.resetForm();
            }}>
                {(props) => (
                    <View>
                        <TextInput style={gStyle.pole} 
                            value={props.values.name}
                            placeholder="Введите название"
                            onChangeText={props.handleChange('name')}
                        />
                        <TextInput style={gStyle.pole}
                            value={props.values.anons}
                            placeholder="Кратко опишите задачу"
                            onChangeText={props.handleChange('anons')}
                        />
                        <TextInput style={gStyle.pole}
                            value={props.values.full}
                            placeholder="Опишите задачу подробно"
                            onChangeText={props.handleChange('full')}
                            multiline
                        />
                        <TextInput style={gStyle.pole}
                            value={props.values.addres}
                            placeholder="Укажите адрес"
                            onChangeText={props.handleChange('addres')}
                        />
                        <TextInput style={gStyle.pole}
                            value={props.values.sale}
                            placeholder="Укажите стоимость"
                            onChangeText={props.handleChange('sale')}
                        />
                        <TextInput style={gStyle.pole}
                            value={props.values.data}
                            placeholder="Дата и время"
                            onChangeText={props.handleChange('data')}
                        />
                        <View style={gStyle.button4}>
                            <Text style={gStyle.textbutton1} onPress={props.handleSubmit}>Опубликовать задачу</Text>
                        </View>
                    </View>
                )}
            </Formik>

        </View>
    );
}