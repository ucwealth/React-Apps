import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import About from '../screens/about';

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
      );
}

export default RootDrawerNavigator;
