import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ReviewDetails from "../screens/reviewDetails";
import About  from '../screens/about';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    
  return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#999',
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen 
        name='About' 
        component={About} 
        options={{
        //   title: 'About Page',
          headerStyle: {
            backgroundColor: 'coral'
          }
        }} 
        />
      </Stack.Navigator>
  );
}