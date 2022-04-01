import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer()
    }

  return (
      <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.header}>
        <Icon name= "menu" size={30} color="#333" style={styles.icon} onPress={openMenu} />
        <View style={styles.logoView}>
            <Image source={require('../assets/images/heart_logo.png')} style={styles.headerImage} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'coral'
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

    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    logoView: {
        flexDirection: 'row',

    }
})