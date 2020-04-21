import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
  ,ScrollView,StatusBar,TouchableHighlight,Platform,TouchableNativeFeedback
} from "react-native";
//import Spinner from "react-native-loading-spinner-overlay";

const backArrow = require('../../icon/icn_on_boarding_back.png')

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }
  
  
  backScreen = () => {
		this.props.navigation.goBack();
       
    }
  render() {
    const Touchable = Platform.OS == 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      
      <ScrollView style={styles.contentContainer}>
      <View style={styles.header}>
                                <Touchable onPress={this.backScreen}>
                                    <View>
                                        <Image source={backArrow} style={styles.backArrow} resizeMode='contain' />
                                    </View>

                                </Touchable></View>     
            <KeyboardAvoidingView  style={styles.container}>
            <Text style={{color:'#fff',fontSize:25,alignSelf:'flex-start',margin:20,marginTop:64}}>Reset Password</Text>

            <Text style={{color:'#818181',alignSelf:'flex-start',margin:20}}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
      
              </View>
              <Text style={{color:'#818181',alignSelf:'flex-start',margin:20}}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
      
              </View>
        
              <TouchableHighlight style={styles.submitButtonContainer}  onPress={() => { 
			  this.props.navigation.navigate('MyBottomTab')
 }}>
                <Text style={styles.signUpText}>Reset Password</Text>
              </TouchableHighlight>
             
            </KeyboardAvoidingView >
           
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:48,
    marginBottom:55,
    // borderRadius:19,
    borderTopStartRadius:15,
    borderTopRightRadius:15,
  borderBottomEndRadius:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00304B',
	marginHorizontal:20
    
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
    backgroundColor: '#001623'
},
inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#0C3F5B',
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
	borderRadius:5, 
	paddingLeft:10
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
submitButtonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  marginTop:40,
  borderRadius:10,
  width:250,
  backgroundColor: "#47DFFF",
},
signupButton: {
  backgroundColor: "#47DFFF",
},
signUpText: {
        textAlign: 'center',
        color: '#000336',
        fontFamily: 'Regular',
        fontWeight: '700',
        fontSize: 18
},
header: {
  flex: 1,
  marginTop:32,
  flexDirection: 'row',
  justifyContent: 'space-between'
},
backArrow: {
  height: 18,
  margin:13,
},
touchId:{
  height:9,
  width:11,
  margin:10,
  alignItems:'center',}
});

AppRegistry.registerComponent("Login", () => Login);
