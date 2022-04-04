import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import About  from '../screens/about';
import Header from '../shared/header';

const Stack = createNativeStackNavigator();

export default function AboutStack({ navigation }) {

  const screenOptionStyle = {
    headerStyle: {
      // backgroundColor: 'coral',
      height: 50
    },
    headerTintColor: 'green',
  }

  return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen 
        name='AboutStack' 
        component={About} 
        options={{ headerTitle: () => <Header navigation={navigation} title='About Us' /> }}
        />
      </Stack.Navigator>
  );
}