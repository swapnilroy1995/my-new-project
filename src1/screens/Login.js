import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image, TextInput} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { StackActions } from '@react-navigation/native';


export default function Login(navigation, route,props){
    const [username, setusername]=useState(null);
    const [password, setpassword]=useState(null);
    return(
        <View style={[{flex: 1,},styles.container]}>
            <View style={{alignItems: 'center', marginVertical:10}}>
                <Image
                    source={{uri:'https://cdn1.iconfinder.com/data/icons/web-1/128/32-512.png'}}
                    style={{height:100, width: 100, marginVertical:20}}
                />
                <Text style={{fontSize:15, fontWeight: 'bold'}}>Company Name</Text>
            </View>
            <View style={{
                // alignItems: 'center',
                marginVertical: 60,
                marginHorizontal:6,

            }}>
                {/*<View style={{justifyContent: 'center', flexDirection: 'row'}}>*/}
                    <TextInput
                        placeholder={'Enter your text'}
                        style={styles.textInputs}
                        onChangeText={val=>setusername(val)}
                        value={username}
                        ReturnKeyType='next'
                        KeyboardType='email-address'
                    />
                    <TextInput
                        placeholder={'Enter your text'}
                        style={styles.textInputs}
                        onChangeText={val=>setpassword(val)}
                        value={password}
                    />
                {/*</View>*/}
                <View style={{alignItems: 'center'}}>
                    <Button
                        buttonStyles={{borderRadius:10}}
                        title={navigation.route.params.item} onPress={()=>{
                        navigation.route.params.setLoggedIn();
                        // props.navigation.popToTop();
                    }}/>
                </View>
            </View>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    textInputs:{borderWidth:1, borderColor: 'black', width:'85%', paddingLeft: 20, height:50, marginVertical:20, borderRadius:9, alignSelf: 'center'}


});

