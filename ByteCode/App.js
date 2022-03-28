/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View, Image, TextInput, FlatList
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView>
      {/* <Text>ByteCoin</Text> */}
      <View style={styles.currencyView}>
        <View>
          <Image source={
            require('./src/assets/images/btc-image.png')
            } 
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View><Text>...</Text></View>
        <View style={{ flex: 0.3 }}><Text>USD</Text></View>
        

      </View>
 
          {/* <View>
            <Text>Some more text</Text>
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <TextInput
            style={styles.textInputStyle}
            defaultValue="You can type in me"
          /> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  currencyView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    height: 100
  },
  listHeader: {
    height: 100,
    alignContent: 'center',
    justifyContent: 'center'
  },
  textInputStyle: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
  },

});

export default App;
