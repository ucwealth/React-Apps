import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createNativeStackNavigator();

export default function Navigator() {
    
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#999',
          },
          headerTintColor: '#fff'
        }}
      >
        <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{
          title: 'My Home Page',
          headerStyle: {
            backgroundColor: '#999'
          }
        }}
        />
        <Stack.Screen 
        name='ReviewDetails' 
        component={ReviewDetails} 
        options={{
          title: 'Reviews Page',
          headerStyle: {
            backgroundColor: 'coral'
          }
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}