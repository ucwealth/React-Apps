import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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