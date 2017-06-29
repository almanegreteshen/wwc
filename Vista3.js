import React from 'react';
import { AppRegistry, StyleSheet, View, Text, TextInput} from 'react-native';

export default class Vista3 extends React.Component {
  constructor(){
    super();
    this.state={
      textValue   : '',
      variable:false
    }
  }
  onChangeText(value){
  	console.log(value);
  	this.setState({textValue:value})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput style={styles.textInput} 
        placeholder="Escribe algo aquí" 
        value={this.state.textValue}
        onChangeText={(value)=>this.onChangeText(value)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    width: 200, 
    fontSize: 15, 
    padding:10,
    marginTop: 20,
    color: 'black',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5
  }
})
AppRegistry.registerComponent('Vista3', ()=>Vista3)