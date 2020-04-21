
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
const backArrow = require('../../icon/icn_on_boarding_back.png');

import CountryPicker from 'react-native-country-picker-modal'

import {screenStyles} from '../styleSheet/ScreenStyles';
const touch = require('../../icon/t.png');
const cross = require('../../icon/c.png');

export default class Phone extends Component {
  constructor() {
    super();
    this.state = {
              valid: "",
              type: "",
              value: "",
			  countryCode:'IN',
			  callingCode:'',
			  countryname:'India'
			  
            };
          }
		  
          updateInfo() {
            this.setState({
              valid: this.phone.isValidNumber(),
              type: this.phone.getNumberType(),
              value: this.phone.getValue()
            });
          }
          renderInfo() {
            if (this.state.value) {
              return (
                <View style={styles.info}>
                  <Text>
                    Is Valid:{" "}
                    <Text style={{ fontWeight: "bold" }}>
                      {this.state.valid.toString()}
                    </Text>
                  </Text>
                  <Text>
                    Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
                  </Text>
                  <Text>
                    Value:{" "}
                    <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
                  </Text>
                </View>
              );
            }
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
	onSelect=(country)=>{
		this.setState({countryCode:country.cca2,countryname:country.name, callingCode:country.callingCode});
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
      
      <ScrollView style={screenStyles.container} contentContainerStyle={{ alignItems:'center'}}>
							<View style={styles.header}>
                                <Touchable onPress={this.backScreen}>
                                    <View>
                                        <Image source={backArrow} style={styles.backArrow} resizeMode='contain' />
                                    </View>
                                </Touchable>
							</View>   
            <KeyboardAvoidingView  style={styles.container}>
            <Text style={{color:'#fff',fontSize:25,alignSelf:'flex-start',marginTop:21,
	  marginVertical:25,}}>Phone number</Text>

            <Text style={{color:'#fff',alignSelf:'flex-start',marginTop:25,}}>Enter Phone number</Text>

		<View style={styles.inputContainer}>
		<CountryPicker
        {...{
						countryCode:this.state.countryCode,
						 withFlag:true,
						 withFilter:true,
						 withAlphaFilter:true,
						 withFlagButton:true,
						 withCountryNameButton:true,
						onSelect:()=>this.onSelect(),
        }}
      />
                <TextInput style={styles.inputs}
				
					keyboardType={'number-pad'}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
                              <Image source={cross} style={styles.touchId} resizeMode='contain' />
      
              </View>
        {this.renderInfo()}
                        <TouchableHighlight style={styles.submitButtonContainer} 
						onPress={() => { this.props.navigation.navigate('Forgot') }}
						>
                <Text style={styles.next} onPress={this.finish}>
					Finish
				</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03273B',
	paddingHorizontal:20
    
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
  inputContainer: {
    backgroundColor: '#0C3F5B',
    borderRadius:10,
    width:'90%',
    height:45,
    marginTop:25,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center',
	paddingHorizontal:5
},
inputs:{
    height:45,
    backgroundColor: '#0C3F5B',
    color:'#fff',
    flex:1,
	fontSize:20
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
  marginTop:40,
  width:340,
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
    next: {
        textAlign: 'center',
        color: '#000336',
        fontFamily: 'Regular',
        fontWeight: '700',
        fontSize: 18
    },
touchId:{
  height:9,
  width:11,
  margin:10,
  alignItems:'center'
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
}
});

AppRegistry.registerComponent("Login", () => Login);
