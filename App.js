import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Vista1 from './Vista1'
import Vista2 from './Vista2'
import Vista3 from './Vista3'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Vista1 />
        <Vista2 />
        <Vista3 />
      </ScrollView>
    );
  }
}
