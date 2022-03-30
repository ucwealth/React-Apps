import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{ item.title }</Text>
      <Text>{ JSON.stringify(item.body) }</Text>
      <Text>{ item.rating }</Text>

    </View>
  )
}
