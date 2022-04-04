import {  FlatList, Text, TouchableOpacity, View, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
      { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
      { title: 'Gotta Catch Them All (again)', rating: 2, body: 'lorem ipsum', key: '2' },
      { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      { title: 'The Witcher', rating: 4, body: 'lorem ipsum', key: '4' },
    ])



  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <Icon name= "close" size={24} style={{
            ...styles.icon, ...styles.modalClose
          }} onPress={() => setModalOpen(false)} />
          <Text>Modal Content</Text>
        </View>
      </Modal>

      <View style={styles.iconView}>
        <Icon name= "add" size={24} style={styles.icon} onPress={() => setModalOpen(true)} />
      </View>

       <FlatList 
       data={reviews}
       renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item }) }>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </Card>
         
        </TouchableOpacity>

       )}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    marginTop: 50,
  },
  icon: {
    alignSelf: 'center',
    
  },
  modalClose: {
    marginTop: 20,

  },
  iconView: {
    elevation: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.3,
    marginVertical: 5,
    marginTop: 0,
    justifyContent: 'center'

  },
})
