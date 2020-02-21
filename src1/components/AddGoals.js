import React, { useState } from "react";
import {View, Text, Button, TextInput} from 'react-native';

export default function AddGoals(props){
    const [enteredGoal, setenteredGoal]= useState([]);
    function makeGoals(){
        props.makeGoalsList(enteredGoal);
        setenteredGoal((goal)=>[]);

    }
    return(
        <View style={styles.goalsTextInputContainer}>
            <TextInput placeholder={'Enter you goals one at a time'} style={styles.goalsTextInput} onChangeText={text=>setenteredGoal(text)} value ={enteredGoal}/>
            {console.log(enteredGoal)}
            {/*<Button title='Add1' style={{borderRadius:5}} onPress={()=>{*/}
            {/*    goals.push(enteredGoal);*/}
            {/*    goalCount=goalCount+1*/}
            {/*}}/>*/}
            {/*<Button title='Add' style={{borderRadius:5}} onPress={()=>{*/}
            {/*    console.log('adasdadasdasdasd',listGoal,goalsCount);*/}
            {/*    alert(goals);*/}
            {/*}}/>*/}
            <Button title='Add2' style={{borderRadius:5}} onPress={()=>makeGoals()}/>
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