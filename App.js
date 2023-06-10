

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


export default class App extends Component {
  constructor(){
      super();
  }

  render(){
    return(
      <SafeAreaView style={[{flex:1, paddingTop: 30}]}>
        <Text style={style.title}>ToDo Application</Text>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  welcome_area: {
    backgroundColor: 'red'
  },
  welcome_text: {
    color: 'white',
    fontSize: 20,
    title: {
       backgroundColor: 'blue',
       padding: 10
      },
    title_text: {
      
    }
  }
});


