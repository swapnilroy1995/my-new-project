import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";


export default function Stack3(){
    return(
        <View style={[{flex: 1, backgroundColor:'red'},styles.container]}>
            <Text>
                This is new Stack3
            </Text>
            <Button title={"Go to..."}/>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
    }
});

