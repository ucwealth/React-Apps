import { Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{ item.title }</Text>
        <Text>{ item.body }</Text>
        <Text>{ item.rating }</Text>
      </Card>
    </View>
  )
}
