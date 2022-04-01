import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export default function MainStackNavigator() {

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    
  };
    
  return (
      <Navigator screenOptions={screenOptionStyle}>
        <Screen name='Home' component={Home} />
        <Screen name='ReviewDetails' component={ReviewDetails} options={{ title:'Review Details' }}/>
      </Navigator>
  );
}