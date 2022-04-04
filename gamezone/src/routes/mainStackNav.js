import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

const { Navigator, Screen } = createNativeStackNavigator();

export default function MainStackNavigator({ navigation }) {

  const screenOptionStyle = {
    headerStyle: {
      // backgroundColor: "#eee",
      height: 60
    },
    headerTintColor: "#444",
    headerBackTitle: "Back",   
  };
    
  return (
      <Navigator screenOptions={screenOptionStyle} initialRouteName=''>
        <Screen name='HomeStack' component={Home} 
        options={{ headerTitle: () => <Header navigation={navigation} title='Gamezone' /> }}
        />
        <Screen name='ReviewDetails' component={ReviewDetails} options={{ title:'Review Details',   }}/>
      </Navigator>
  );
}