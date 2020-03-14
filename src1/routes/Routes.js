import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Drawer1 from "./../screens/Drawer1";
import Drawer2 from "./../screens/Drawer2";
import Drawer3 from "./../screens/Drawer3";
import Drawer4 from "./../screens/Drawer4";
import Stack1 from "./../screens/Stack1";
import Stack2 from "./../screens/Stack2";
import Stack3 from "./../screens/Stack3";
import Stack4 from "./../screens/Stack4";
import Tab2 from "./../screens/Tab2";
import Tab3 from "./../screens/Tab3";
import Tab1 from "./../screens/Tab1";
import Tab4 from "./../screens/Tab4";
import ForgotPassword from "./../screens/ForgotPassword";
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Practise from "../screens/Practise";
import HeaderComponent from './../components/HeaderComponent'
import { Button, Text, View, TouchableOpacity, Animated, Image} from "react-native";

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();



export default function RootStack() {
    const [loggedIn, setloggedIn] = useState(false);
    function changeLogin() {
        // console.log("inside change login fucntion");
        setloggedIn(!loggedIn);
        // alert("login done");
    }
  function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Practise"
          component={Practise}
          initialParams={{ setLoggedIn: changeLogin }}
        />
        <Drawer.Screen name="Drawer1" component={Drawer1} />
        <Drawer.Screen name="Drawer2" component={Drawer2} />
        <Drawer.Screen name="Drawer3" component={Drawer3} />
        <Drawer.Screen name="Drawer4" component={Drawer4} />
      </Drawer.Navigator>
    );
  }
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
        <BottomTab.Screen name="Home1" children={MyDrawer} />
        <BottomTab.Screen name="Tab1" component={Tab1} />
        {/*<BottomTab.Screen name="Stack1" component={Stack1} />*/}
        <BottomTab.Screen name="Tab2" component={Tab2} />
        <BottomTab.Screen name="Tab3" component={Tab3} />
        <BottomTab.Screen name="Tab4" component={Tab4} />
      </BottomTab.Navigator>
    );
  }
  function Mystack() {
    return (
      <Stack.Navigator
        //     screenOptions={{
        //     headerShown: false
        // }}
        headerMode={"float"}

        screenOptions={{
          title:'My App',
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
                    <HeaderComponent previous={previous} title={title} navigation={navigation}/>
                </Animated.View>
            );
          }
        }}
      >
        <Stack.Screen name="Home" children={MyBottomTab} />
        <Stack.Screen name="Stack1" component={Stack1} />
        <Stack.Screen name="Practise" component={Practise} />
        <Stack.Screen name="Stack2" component={Stack2} />
        <Stack.Screen name="Stack3" component={Stack3} />
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
//
