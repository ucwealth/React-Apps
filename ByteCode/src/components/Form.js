import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default function Form({ submitHandler }) {
    const [todo, setTodo] = useState('')
    const changeHandler = (val) => {
        setTodo(val) 
    }
    return (
        <View>
            <TextInput 
            style={styles.input}
            onChangeText={changeHandler}
            placeholder='Type Your Todo...'
            />
            <Button title='Submit Todo' onPress={() => submitHandler(todo) } color='coral' />

            <TouchableOpacity>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    padding: 8 
},

})
