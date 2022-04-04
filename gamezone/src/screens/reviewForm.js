import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik 
      initialValues={{ title: '', body: '', rating: '' }}
      onSubmit={(values) => {
        addReview(values)
      }}
      >
        {(props) => (
            <View>
                <TextInput 
                style={globalStyles.input} 
                placeholder='Review title' 
                onChangeText={props.handleChange('title')} 
                value={props.values.title}
                />
                <TextInput 
                style={globalStyles.input} 
                placeholder='Review body' 
                onChangeText={props.handleChange('body')} 
                value={props.values.body}
                />
                <TextInput 
                style={globalStyles.input} 
                placeholder='Rating (1-5)' 
                onChangeText={props.handleChange('rating')} 
                value={props.values.rating}
                keyboardType='numeric'
                />
                <View style={styles.buttonStyle}>
                  <Button title='Submit' color='white' onPress={props.handleSubmit} />
                </View>
            </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'maroon',
    borderRadius: 7
  }

})