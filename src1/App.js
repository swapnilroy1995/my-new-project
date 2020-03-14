import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./routes/Routes";
import { Provider } from "react-redux";
import configureStore from './store/store'
const store = configureStore();
export default function App() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <StatusBar hidden={true} />
        {/*<View style={[{flex: 1, backgroundColor:'red'},styles.container]}>*/}
        {/*  <Text>*/}
        {/*    This is new screen*/}
        {/*  </Text>*/}
        {/*</>*/}
        <RootStack />
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
