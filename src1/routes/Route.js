import React, { useState, Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator,   DrawerContentScrollView,
    DrawerItemList, } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Login from "./../screens/Login";
import HeaderComponent from './../components/HeaderComponent';
import { Button, Text, View, TouchableOpacity, Animated, Image, Dimensions} from "react-native";
import {connect} from 'react-redux';
import {changeTheme} from "../store/actions/AppFeatures";
import Practise from "../screens/Practise";
import Tab4 from "../screens/Tab4";
const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();


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
                activeColor="#3e2465"
                inactiveColor="#3e2465"
                barStyle={{ backgroundColor: '#F3565E' }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        // let iconName;
                        // if (route.name === "Home1") {
                        //   iconName = focused
                        //     ? "ios-information-circle"
                        //     : "ios-information-circle-outline";
                        // }
                        return <View
                            style={focused?{backgroundColor:'#2AA198', height:25, width:35, borderRadius:5}:
                                {height:15, width:25, borderRadius:5, borderWidth: 3, borderColor: '#2AA198'}}/>

                    }
                })
                }
            >
                <BottomTab.Screen name="Home1" component={Tab4} />

            </BottomTab.Navigator>
        );
    }
    function Mystack() {
        return (
            <Stack.Navigator

                headerMode={"float"}

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
                        return (
                            <Animated.View style={{ opacity }}>
                                <HeaderComponent previous={previous} title={title} navigationer={navigation} />
                            </Animated.View>
                        );
                    }
                }}
            >
                <Stack.Screen name="Home" children={MyBottomTab} options={{title:'Home'}} />

            </Stack.Navigator>
        );
    }

    function Authorisation(props) {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Login}
                    initialParams={{ setLoggedIn: changeLogin, item: "Login" }}
                />
            </Stack.Navigator>
        );
    }

    return loggedIn ? <Authorisation /> : <Mystack changeLogin={changeLogin}/>;
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