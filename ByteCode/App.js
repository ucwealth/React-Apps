/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form'
import TodoItem from './src/components/TodoItem';

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
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

    return (
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
     
    );

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }

});

export default App;
