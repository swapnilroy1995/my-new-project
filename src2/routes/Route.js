import React, { useState, Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HeaderComponent from './../components/HeaderComponent';
import { Button, Text, View, TouchableOpacity, Animated, Image, Dimensions} from "react-native";
import {connect} from 'react-redux';
import {changeTheme} from "../store/actions/AppFeatures";

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import Walkthrough from '../Screens/Walkthrough';
import HomeScreen from '../Screens/HomeScreen';
import Forgot from '../Screens/Forgot';
import Phone from '../Screens/Phone';
import Reset from '../Screens/Reset';
import CoinDetails from '../Screens/CoinDetails';
import SearchScreen from '../Screens/SearchScreen';
import AlertBuilderCoinSelecter from '../Screens/AlertBuilderCoinSelecter';
import AlertBuilder from '../Screens/AlertBuilder';
import CompareCrypto from '../Screens/CompareCrypto';
import Alerts from '../Screens/Alerts';
import Explorer from '../Screens/Explorer';
import FilterScreen from '../Screens/FilterScreen';
import Accounts from '../Screens/Accounts';
import Setting from '../Screens/Setting';
import TermsConditions from '../Screens/TermsConditions';
import Tab1 from '../Screens/Tab1';
import ListPage from '../Screens/ListPage';
import MovieDetails from '../Screens/MovieDetails';
import Summary from '../Screens/Summary';
import TechnicalAnalysis from '../Screens/TechnicalAnalysis';
import OBVscreen from '../Screens/OBV';
import Gainers_Losers from '../Screens/Gainers_Losers';
import CapClimber from '../Screens/CapClimber';
import VolumeClimber from '../Screens/VolumeClimber';
import Arbitrage from '../Screens/Arbitrage';
import MomentumVol from '../Screens/MomentumVol';
import VolatilityCoaster from '../Screens/VolatilityCoaster';
import RSI from '../Screens/RSI';
import {tabbarStyles} from '../styleSheet/TabbarStyles';



const homeSelected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_home_selected.png")
const homeUnselected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_Home_unselected.png")
const explorerSelected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_explorer_selected.png")
const explorerUnselected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_explorer_unselected.png")
const alertSelected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_notification_selected.png")
const alertUnselected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_notification_unselected.png")
const technicalAnalysiSelected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_TA_selected.png")
const technicalAnalysiUnselected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_TA_unselected.png")
const bearBullsSelected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_Bear-Bulls_selected.png")
const bearBullsUnselected = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_Bear_bulls_unselected.png")



function RootStack(props) {
    const [loggedIn, setloggedIn] = useState(false);
    function changeLogin() {
        // console.log("inside change login fucntion");
        setloggedIn(!loggedIn);
        // alert("login done");
    }
	
    const forTheme=props.props.theme;
	
  function MyBottomTab() {
    return (
      <BottomTab.Navigator
	  initialRouteName={"Home"}
	  
          activeColor={props.theme==="Light"?"#3e2465":"#fff"}
          inactiveColor="#3e2465"
		  labeled={false}
          barStyle={[props.theme==="Dark"?tabbarStyles.centerLight:tabbarStyles.centerDark,{alignItems: 'center'}]}
        screenOptions={({ route }) => 
		
		({
          tabBarIcon: ({ focused, color, size }) => {
             let iconName;
             if (route.name === "Home") {
               iconName = focused
                 ? homeSelected
                 : homeUnselected;
             }
             if (route.name === "Explorer") {
               iconName = focused
                 ? explorerSelected
                 : explorerUnselected;
             }
             if (route.name === "Alerts") {
               iconName = focused
                 ? alertSelected
                 : alertUnselected;
             }
             if (route.name === "Technical Analysis") {
               iconName = focused
                 ? technicalAnalysiSelected
                 : technicalAnalysiUnselected;
             }
             if (route.name === "Settings") {
               iconName = focused
                 ? bearBullsSelected
                 : bearBullsUnselected;
             }
             return <Image style={focused?{ height:35, width:35}:
									 {height:35, width:35}}
									 resizeMode={'contain'}
									 source={iconName}
									 />

          },
		  
		  
        })
        }
		
      >
        <BottomTab.Screen name="Explorer" component={ExplorerStack} />
        <BottomTab.Screen name="Alerts" children={AlertStack} />
        {/*<BottomTab.Screen name="Stack1" component={Stack1} />*/}
        <BottomTab.Screen name="Home" children={Mystack} />
        <BottomTab.Screen name="Technical Analysis" children={TechnicalAnalysisStack} />
        <BottomTab.Screen name="Settings" component={SettingsStack} />
      </BottomTab.Navigator>
    );
  }
  
  
  
   
  
  function TechnicalAnalysisStack() {
    return (
      <Stack.Navigator
        //     screenOptions={{
        //     headerShown: false
        // }}

	  initialRouteName={"TechnicalAnalysis"}
        screenOptions={{
          // headerTransparent: true,
          // headerBackground: () => (
          //     <BlurView tint="light" intensity={100} style={styleSheet.absoluteFill} />
          // ),
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
            // const goBack=navigation.goBack();
            return (
                <Animated.View style={{ opacity }}>
                    <HeaderComponent previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );
          }
        }}
      >
        <Stack.Screen name="TechnicalAnalysis" component={TechnicalAnalysis} />
        <Stack.Screen name="OBVscreen" component={OBVscreen} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="CapClimber" component={CapClimber} />
        <Stack.Screen name="Gainers_Losers" component={Gainers_Losers} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="VolumeClimber" component={VolumeClimber} />
        <Stack.Screen name="VolatilityCoaster" component={VolatilityCoaster} />
        <Stack.Screen name="Arbitrage" component={Arbitrage} />
        <Stack.Screen name="MomentumVol" component={MomentumVol} />
        <Stack.Screen name="RSI" component={RSI} />
		
      </Stack.Navigator>
    );
  }
  
  
  
  
  
  function AlertStack() {
    return (
      <Stack.Navigator
        //     screenOptions={{
        //     headerShown: false
        // }}

	  initialRouteName={"AlertBuilder"}
        screenOptions={{
          // headerTransparent: true,
          // headerBackground: () => (
          //     <BlurView tint="light" intensity={100} style={styleSheet.absoluteFill} />
          // ),
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
            // const goBack=navigation.goBack();
            return (
                <Animated.View style={{ opacity }}>
                    <HeaderComponent previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );
          }
        }}
      >
        <Stack.Screen name="Alerts" component={Alerts} />
        <Stack.Screen name="AlertBuilderCoinSelecter" component={AlertBuilderCoinSelecter} />
        <Stack.Screen name="AlertBuilder" component={AlertBuilder} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
		
      </Stack.Navigator>
    );
  }
  
  
  function ExplorerStack() {
    return (
      <Stack.Navigator
        //     screenOptions={{
        //     headerShown: false
        // }}

	  initialRouteName={"Explorer"}
        screenOptions={{
          // headerTransparent: true,
          // headerBackground: () => (
          //     <BlurView tint="light" intensity={100} style={styleSheet.absoluteFill} />
          // ),
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
            // const goBack=navigation.goBack();
            return (
                <Animated.View style={{ opacity }}>
                    <HeaderComponent previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );
          }
        }}
      >
        <Stack.Screen name="Explorer" component={Explorer} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="AlertBuilder" component={AlertBuilder} />
      </Stack.Navigator>
    );
  }
  
  
  function SettingsStack() {
    return (
      <Stack.Navigator
        //     screenOptions={{
        //     headerShown: false
        // }}

	  initialRouteName={"AlertBuilder"}
        screenOptions={{
          // headerTransparent: true,
          // headerBackground: () => (
          //     <BlurView tint="light" intensity={100} style={styleSheet.absoluteFill} />
          // ),
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
            // const goBack=navigation.goBack();
            return (
                <Animated.View style={{ opacity }}>
                    <HeaderComponent previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );
          }
        }}
      >
        <Stack.Screen name="Settings" component={Setting} />
        <Stack.Screen name="Accounts" component={Accounts} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
      </Stack.Navigator>
    );
  }
  
  function Mystack() {
    return (
      <Stack.Navigator
        //     screenOptions={{
        //     headerShown: false
        // }}

        screenOptions={{
          // headerTransparent: true,
          // headerBackground: () => (
          //     <BlurView tint="light" intensity={100} style={styleSheet.absoluteFill} />
          // ),
          header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
            // const goBack=navigation.goBack();
            return (
                <Animated.View style={{ opacity }}>
                    <HeaderComponent previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );
          }
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title:'HomeScreen'}} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="CoinDetails" component={CoinDetails} />
        <Stack.Screen name="CompareCrypto" component={CompareCrypto} />
        <Stack.Screen name="Alerts" component={Alerts} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
      </Stack.Navigator>
    );
  }


  // function Authorisation(props) {
  //   return (
  //     <Stack.Navigator
  //     >
  //       <Stack.Screen
  //         name="Home"
  //         component={Login}
  //         initialParams={{ setLoggedIn: changeLogin, item: "Login" }}
  //       />
  //     </Stack.Navigator>
  //   );
  // }

function MoviesListStack() {
    return (
      <Stack.Navigator
	  screenOptions={{
			 header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title = scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
			
           if(previous!==undefined){ return (
                <Animated.View style={{ opacity }}>
                    <Header previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );}
			return null
          }
			 
			 
         }}
      >
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
		
      </Stack.Navigator>
    );
  }


    function Authorisation(props) {
        return (
            <Stack.Navigator
			
	  initialRouteName={"MyBottomTab"}
                screenOptions={{
						headerStatusBarHeight:0,
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    initialParams={{ setLoggedIn: changeLogin, item: "SignUp" }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    initialParams={{ setLoggedIn: changeLogin, item: "Login" }}
                />
                <Stack.Screen
                    name="Walkthrough"
                    component={Walkthrough}
                    initialParams={{ setLoggedIn: changeLogin, item: "Walkthrough" }}
                />
                <Stack.Screen
                    name="Forgot"
                    component={Forgot}
                    initialParams={{ setLoggedIn: changeLogin, item: "Forgot" }}
                />
                <Stack.Screen
                    name="Reset"
                    component={Reset}
                    initialParams={{ setLoggedIn: changeLogin, item: "Reset" }}
                />
                <Stack.Screen
                    name="Phone"
                    component={Phone}
                    initialParams={{ setLoggedIn: changeLogin, item: "Phone" }}
                />
                <Stack.Screen
                    name="MyBottomTab"
                    children={MyBottomTab}
                    initialParams={{ setLoggedIn: changeLogin, item: "MyBottomTab" }}
                />
            </Stack.Navigator>
        );
    }

  //return !loggedIn ? <Authorisation /> : <MyBottomTab changeLogin={changeLogin}/>;
  return <Authorisation/>
}
class Root extends Component{
    render(){
        return(
            <RootStack props={this.props}/>
        );
    }
}
//
const mapStateToProps=(state)=>{
    // console.log('theme mapstatetoprops',state)
    return {theme:state.AppFeaturesReducer.theme}
};


export default connect(mapStateToProps)(Root);