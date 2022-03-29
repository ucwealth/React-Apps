/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form'
import TodoItem from './src/components/TodoItem';
import Sandbox from './src/components/Sandbox';

const App = () => {

  const [todos, setTodos] = useState([
    {text: 'Go to Work', key: 1},
    {text: 'Go to Work again', key: 2},
    {text: 'Go to School', key: 3},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key  )
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }

  }

    return (
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        console.log('dismiss keyboard')
      }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
          <Form submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList 
              data={todos}
              renderItem={( {item} ) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
              />
            </View>
          </View>
        </View>
        </TouchableWithoutFeedback>
    );

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
  content: {
    flex: 1,
    padding: 40
  },
  list: {
    marginTop: 20,
    flex: 1
  }

});

export default App;
