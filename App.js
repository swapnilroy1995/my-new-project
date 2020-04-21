/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 {/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,StatusBar,
  KeyboardAvoidingView,ScrollView
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import StackNav from './src/Navigation/StackNav';
import DrawerNav from './src/Navigation/DrawerNav';
import MixedNavigators from './src/Navigation/MixedNavigators';
const touchId = require('./icon/i.png')

export default class App extends Component {
  constructor(props) {
    super(props);
    state = {
      fullName: '',
      email   : '',
      password: '',
    }
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
	<NavigationContainer>
       <StatusBar hidden={true} />
        <StackNav/>
      </NavigationContainer>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:78,
    marginBottom:55,
    // borderRadius:19,
    borderTopStartRadius:15,
    borderTopRightRadius:15,
  borderBottomEndRadius:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00304B',
    
  },
  contentContainer: {
   
    backgroundColor: '#0C3F5B'
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
  contentContainer: {
    backgroundColor: '#0C3F5B'
},
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:3,
    width:350,
    height:45,
    marginTop:-15,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
inputs:{
    height:45,
    backgroundColor: '#0C3F5B',
    color:'#fff',
    flex:1,
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:15,
  justifyContent: 'center'
},
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  marginTop:20,
  width:350,
  borderRadius:10,
},
signupButton: {
  backgroundColor: "#47DFFF",
},
signUpText: {
  color: 'black',
  fontWeight:'bold',
},
touchId:{
  height:9,
  width:11,
  margin:10,
  alignItems:'center',}
});
 */}


import 'react-native-gesture-handler';
import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src2/routes/Route";
import { Provider } from "react-redux";
import configureStore from './src/store/store'
const store = configureStore();
export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Root/>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  }
});
