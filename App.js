import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';



export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:"",
      displayText:"",
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <Header
      backgroundColor={'#9c8210'}
      centerComponent={{text:'Monkey ---Chunkey', style: {color:'#fff',fontSize:20}}}/>
      <TextInput style={styles.inputBox}
      onChangeText = {(text)=>this.setState({text:text})}
      value={this.state.text}/>
      <TouchableOpacity
      style={styles.goButton}
      onPress={()=>{this.setState({displayText:this.state.text})}}>
      <Text>Go</Text></TouchableOpacity>
      <Text>{this.state.displayText}</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
    marginTop:200,
    width:"80%",
    borderWidth:4
  },
  goButton:{
    backgroundColor:"blue",
  }
});
