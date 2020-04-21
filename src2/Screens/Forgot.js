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
  backScreen = () => {
		this.props.navigation.goBack();
       
    }
  async onLoginPress() {
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    await AsyncStorage.setItem("email", email);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }
  render() {
    const Touchable = Platform.OS == 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
      
      <ScrollView style={styles.contentContainer} contentContainerStyle={{ alignItems:'center'}}>
      <View style={styles.header}>
                                <TouchableOpacity onPress={this.backScreen}>
                                    <View>
                                        <Image source={backArrow} style={styles.backArrow} resizeMode='contain' />
                                    </View>

                                </TouchableOpacity></View>     
            <KeyboardAvoidingView  style={styles.container}>
      
            <Text style={{color:'#fff',fontSize:25,alignSelf:'flex-start',marginTop:44,marginLeft:30}}>Forgot Password?</Text>
      
                 
              <Text style={{color:'#47DFFF',alignItems:'center',marginTop:20,margin:30}}>Enter the 4 digit OTP we just sent to your registered mobile no.</Text>
             
              <View style={styles.otpContainer}>
				<TextInput
					secureTextEntry={true}
					style={{textAlign:'center'}}
  
					keyboardType={'number-pad'}
					maxLength={1}
			  style={styles.otpInput}
			/>
				<TextInput
					secureTextEntry={true}
					style={{textAlign:'center'}}
  
					keyboardType={'number-pad'}
					maxLength={1}
			  style={styles.otpInput}
			/>
				<TextInput
					secureTextEntry={true}
					style={{textAlign:'center'}}
  
					keyboardType={'number-pad'}
					maxLength={1}
			  style={styles.otpInput}
			/>
				<TextInput
					secureTextEntry={true}
					style={{textAlign:'center', color: '#fff'}}
  
					keyboardType={'number-pad'}
					maxLength={1}
			  style={styles.otpInput}
			/>
			  </View>

					   
						 <View style={{marginTop:11,alignItems:'flex-start',flexDirection:'row'}}>
				  <Text style={{color:'#fff',marginTop:34,marginLeft:-169}}>Resend OTP</Text>
				  </View>
						  <TouchableHighlight style={styles.submitButtonContainer}  onPress={() => { this.props.navigation.navigate('Reset') }}>
							<Text style={styles.signUpText}>Confirm</Text>
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
    backgroundColor: '#001623'
},
  otpInput: {
				borderBottomColor: '#47DFFF',
				height:35,
				width:40,
				borderBottomWidth: 1,
				marginHorizontal:5,
				color:'#fff',textAlign:'center'
				},
  inputContainer: {
    backgroundColor: '#47DFFF',
    borderRadius:1,
    width:30,
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
  color: 'black',
  fontWeight:'bold',
        textAlign: 'center',
        color: '#000336',
        fontFamily: 'Regular',
        fontWeight: '700',
        fontSize: 18
},
otpContainer: {
flexDirection:'row',
justifyContent:'space-between',
  marginHorizontal:15,
},
header: {
  flex: 1,
  marginTop:40,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignSelf: 'flex-start'
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
