import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutStack from './aboutStack';
import MainStackNavigator from './mainStackNav';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {

  const screenOptionStyle = {
    headerShown: false, 
  }

  return (
        <Drawer.Navigator screenOptions={screenOptionStyle}>
          <Drawer.Screen name="Home" component={MainStackNavigator} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    );
}

export default RootDrawerNavigator;

