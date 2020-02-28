import React from 'react';
import {View, Text, StyleSheet, StatusBar,Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import RootStack from './routes/Routes';

export default function App(){
  return(
      <NavigationContainer>
          <StatusBar hidden={true}/>
      {/*<View style={[{flex: 1, backgroundColor:'red'},styles.container]}>*/}
      {/*  <Text>*/}
      {/*    This is new screen*/}
      {/*  </Text>*/}
      {/*</>*/}
      <RootStack />
      </NavigationContainer>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'blue',
  }
});

