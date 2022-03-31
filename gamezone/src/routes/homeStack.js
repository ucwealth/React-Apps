import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomeStack() {
    
  return (
      <Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#999',
          },
          headerTintColor: '#fff'
        }}
      >
        <Screen 
        name='Home' 
        component={Home} 
        options={{
          title: 'Game Zone',
          headerStyle: {
            backgroundColor: '#999'
          }
        }}
        />
        <Screen 
        name='ReviewDetails' 
        component={ReviewDetails} 
        options={{
          title: 'Reviews Page',
        }} 
        />
      </Navigator>
  );
}