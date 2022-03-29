import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({ item, pressHandler }) => {

    return (
        <TouchableOpacity onPress={ () => pressHandler(item.key) }>
            <View style={styles.item}>
            <Icon name= "delete" size={30} color="#900" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
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
        borderStyle: 'dashed',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18
    }
})