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
  ,ScrollView,StatusBar,TouchableHighlight
} from "react-native";
const touchId = require('../../icon/i.png')
const touch = require('../../icon/t.png')
const cross = require('../../icon/c.png')


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
      backgroundColor: "#03273B",
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
  render() {
    return (
      <ScrollView style={styles.contentContainer} contentContainerStyle={{ alignItems:'center'}}>
            <KeyboardAvoidingView  style={styles.container}>
      
            <Text style={{color:'#fff',fontSize:25,alignSelf:'flex-start',marginTop:44}}>Log In</Text>
      
                
              <Text style={styles.inputHeaderStyles}>Email Id</Text>
      
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
                              <Image source={touchId} style={styles.touchId} resizeMode='contain' />
      
              </View>
              <Text style={styles.inputHeaderStyles}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
                              <Image source={cross} style={styles.touchId} resizeMode='contain' />
      
              </View>
      <View style={{marginTop:11,alignItems:'flex-start',flexDirection:'row'}}>
      <Text style={{color:'#fff',marginTop:-14,marginLeft:-169}} onPress={() => { this.props.navigation.navigate('Phone') }}>Forgot password?</Text>
      </View>
              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => { this.props.navigation.navigate('Walkthrough') }}>
                <Text style={styles.signUpText}>Log In</Text>
              </TouchableHighlight>
             
            </KeyboardAvoidingView >
            <View style={{marginVertical:15, alignItems:'center'}}>
			
					<View style={{width: '100%', flexDirection:'row', alignItems: 'center', justifyContent:'center'}}>
					<View style={{flex:1, height:2, backgroundColor: '#fff',marginLeft:40,marginRight:5}}/>
					<Text style={styles.Touchuser}>Or Login with Touch ID</Text>
						<View style={{flex:1, height:2, backgroundColor: '#fff',marginRight:40, marginLeft:5}}/>
						</View>
                    <Image source={touch} style={styles.touchh} resizeMode='contain' />
                    <Text style={styles.touchDetails}>Use your touch ID for faster and</Text>
                    <Text style={styles.touchDetails}>easier access to your account</Text>
                    </View>

            <View style={{marginTop:11,alignItems:'flex-start',flexDirection:'row'}}>
      <Text style={{color:'#fff',fontWeight:'600'}} onPress={() => { this.props.navigation.navigate('SignUp') }}>Don't have an account? Signup</Text>
      </View>
            </ScrollView>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03273B',
	paddingHorizontal:20
    
  },
  contentContainer: {
    backgroundColor: '#001623'
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
    borderRadius:5,
    width:350,
    height:45,
    marginTop:-15,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
Touchuser:{
  textAlign: "center",
  fontSize: 14,
  color: '#fff',
  fontWeight:'700',
  marginVertical:4,
  fontFamily: 'Medium'
},
touchDetails:{
  textAlign: "center",
  fontSize:12,
  color: '#818181',
  fontFamily: 'Medium'

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
signupButton: {
  backgroundColor: "#47DFFF",
},
signUpText: {
  color: 'black',
  fontWeight:'bold',
},
touchId:{
  height:20,
  width:20,
  margin:15,
  alignItems:'center',
  },
  
  inputHeaderStyles: {
	  color:'#818181',
	  alignSelf:'flex-start',
	  marginVertical:25,
},

  touchh:{
    height:79,
    width:111,
    marginVertical:20,
    alignItems:'center',}
});

AppRegistry.registerComponent("Login", () => Login);
