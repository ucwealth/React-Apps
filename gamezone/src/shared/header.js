import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer()
    }

  return (
      <View style={styles.header}>
        <Icon name= "menu" size={30} color="#333" style={styles.icon} onPress={openMenu} />
        <View>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        color: '#333',

    },
    icon: {
        position: 'absolute',
        left: 15,

    }
})