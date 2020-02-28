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
import { Button, Text, View, TouchableOpacity, Animated } from "react-native";

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

export default function RootStack() {
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
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        // screenOptions={({ route }) => ({
        //   tabBarIcon: ({ focused, color, size }) => {
        //     let iconName;
        //     if (route.name === "Home1") {
        //       iconName = focused
        //         ? "ios-information-circle"
        //         : "ios-information-circle-outline";
        //     }
        //   }
        // })
        // }

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
          //     <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
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
              <View
                style={{
                  height: 40,
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "#F3565E"
                }}
              >
                {previous ? (
                  <TouchableOpacity
                    style={{ flex: 1.5 , backgroundColor:'#fff', alignItems: 'center', justifyContent: 'center'}}
                    onPress={navigation.goBack}
                  >
                    <Text styles={{fontSize:6}}> Go Back</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={{ flex: 1 }} />
                )}
                <View
                  style={{
                    flex: 5,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text>{title}</Text>
                </View>
                <Button style={{ flex: 1 }} title={"Theme"} />
              </View>
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

  const [loggedIn, setloggedIn] = useState(false);
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
  function changeLogin() {
    // console.log("inside change login fucntion");
    setloggedIn(!loggedIn);
    // alert("login done");
  }
  return !loggedIn ? <Authorisation /> : <Mystack />;
}
//
