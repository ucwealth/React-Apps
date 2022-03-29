import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

const TodoItem = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity onPress={ () => pressHandler(item.key) }>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
      )
}

export default TodoItem

const styles = StyleSheet.create({
    item: {
        color: '#bbb',
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 10
    }
})