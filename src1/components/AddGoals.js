import React, { useState } from "react";
import {View, Text, Button, TextInput,StyleSheet, Keyboard} from 'react-native';

export default function AddGoals(props){
    const [enteredGoal, setenteredGoal]= useState('');
    function makeGoals(enteredGoal){
        Keyboard.dismiss();
        props.makeGoalsList(enteredGoal);
        setenteredGoal((goal)=>'');

    }
    return(
        <View style={styles.goalsTextInputContainer}>
            <TextInput placeholder={'Enter you goals one at a time'} style={styles.goalsTextInput} onChangeText={text=>setenteredGoal(text)} value ={enteredGoal}/>
            <Button title='Add2' style={{borderRadius:5}} onPress={()=>makeGoals(enteredGoal)}/>
        </View>
    )

}
const styles= StyleSheet.create({
    goalsTextInputContainer:{
        width:'100%',
        height:40,
        flexDirection: 'row',
        marginTop:3,
        marginLeft:3
    },
})