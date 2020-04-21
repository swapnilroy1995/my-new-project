import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";


export default function Tab1(props,navigation,){
    return(
        <View style={[{flex: 1, backgroundColor:'red'},styles.container]}>
            <Text>
                This is new Tab1
            </Text>
            <Button title={"Go to..."} onPress={()=> props.navigation.navigate('Stack1',{name:'from tab 1'})}/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
    }
});

