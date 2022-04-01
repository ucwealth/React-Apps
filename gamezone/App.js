import 'react-native-gesture-handler';
import React from 'react'
import RootDrawerNavigator from './src/routes/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>

  )
}
