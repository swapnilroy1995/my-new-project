import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App(){
  return(
      <View style={[{flex: 1, backgroundColor:'red'},styles.container]}>
        <Text>
          This is new screen
        </Text>
      </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'blue',
  }
});

