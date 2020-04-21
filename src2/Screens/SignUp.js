import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View
  ,ScrollView,StatusBar,TouchableHighlight
} from "react-native";
const touchId = require('../../icon/i.png');

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
  render() {
    return (
      <ScrollView style={styles.contentContainer} contentContainerStyle={{alignItems:'center'}}>
            <KeyboardAvoidingView  style={styles.container}>
            <Text style={{color:'#fff',fontSize:25,marginTop:44}}>Sign Up</Text>
              <Text style={styles.inputHeaderStyles}>Name</Text>
			<View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                    onChangeText={(fullName) => this.setState({fullName})}/>
                <Image source={touchId} style={styles.touchId} resizeMode='contain' />
              </View>
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
                              <Image source={touchId} style={styles.touchId} resizeMode='contain' />
              </View>
      <View style={{marginTop:11,alignItems:'flex-start',flexDirection:'row'}}>
      <Text style={{color:'#fff',marginTop:-14,marginLeft:-169}}  onPress={() => { this.props.navigation.navigate('Phone') }}>Forgot password?</Text>
      </View>
				  <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}  onPress={() => { this.props.navigation.navigate('Login') }}>
					<Text style={styles.signUpText}>Sign Up</Text>
				  </TouchableHighlight>
            </KeyboardAvoidingView >
      <Text style={{marginTop:11,color:'#fff',fontWeight:'600'}} onPress={() => { this.props.navigation.navigate('Login') }}>Already have an account? Log In</Text>
      
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:78,
    marginBottom:55,
    borderTopStartRadius:15,
    borderTopRightRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03273B',
	paddingHorizontal:20,
  },
  contentContainer: {
    backgroundColor: '#0C3F5B',
},
  inputHeaderStyles: {
	  color:'#818181',
	  alignSelf:'flex-start',
	  marginVertical:25,
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
	  flex:1,
    backgroundColor: '#001623',
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
  alignItems:'center',}
});

AppRegistry.registerComponent("Login", () => Login);
