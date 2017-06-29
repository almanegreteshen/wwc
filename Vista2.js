import React from 'react';
import {AppRegistry, StyleSheet, View, Text } from 'react-native';

export default class Vista2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.columna1}><Text>Columna 1</Text></View>
        <View style={styles.columna2}><Text>Columna 2</Text></View>
        <View style={styles.columna3}><Text>Columna 3</Text></View>
        <View style={{flex:1}}><Text style={{color:'white'}}>Columna 4</Text></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columna1:{
  	flex:1,
    backgroundColor: 'white',  
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  columna2:{
  	flex:1,
    backgroundColor: 'red',   	
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10
  	},
  columna3:{
  	flex:1,
    backgroundColor: 'blue',   	
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10
  	},
});
AppRegistry.registerComponent('Vista2', ()=>Vista2)
