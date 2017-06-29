import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

export default class Vista1 extends React.Component {
  onPress(){
    Alert.alert(
    'Alerta de prueba',
    'My Alert Msg',
    [
      {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    { cancelable: false }
  )
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress}>
            <Text style={styles.texto}>Hola Mundo</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{fontSize: 40, color:'orange'}
});
AppRegistry.registerComponent('Vista1', ()=>Vista1)