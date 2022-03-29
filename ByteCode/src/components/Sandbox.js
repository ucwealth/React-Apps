import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Sandbox = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}

export default Sandbox;

const styles = StyleSheet.create({
     container: {
        //  flex: 1,
         backgroundColor: '#ddd',
         paddingTop: 50,
         flexDirection: 'row',
         justifyContent: 'space-around',
         alignItems: 'center',
     },
     boxOne: {
         flex: 1,
         padding: 10,
         backgroundColor: 'violet'
     },
     boxTwo: {
        flex: 1,
        padding: 15,
        backgroundColor: 'gold'
    },
    boxThree: {
        flex: 2,
        padding: 20,
        backgroundColor: 'coral'
    },
    boxFour: {
        flex: 1,
        padding: 25,
        backgroundColor: 'skyblue'
    }
})