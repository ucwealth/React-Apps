import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function FlatButton({ text, onPress }) {
  return (
      <Pressable onPress={onPress}>
          <View style={styles.button}>
              <Text style={styles.buttonText}>{ text }</Text>
          </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#f01d71',
        backgroundColor: 'maroon',
        paddingVertical: 14,
        paddingHorizontal: 10,
        borderRadius: 6

    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})