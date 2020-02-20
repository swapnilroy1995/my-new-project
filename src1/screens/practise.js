import React, {Component,useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar,TextInput, Button, Alert} from 'react-native';

export default function countFunction(){
    const [count, setcount] = useState(0);
    const [goalsCount, setgoalsCount] = useState(0);
    const [enteredGoal, setenteredGoal] = useState(null);
    const [listGoal, setlistGoal] = useState([]);
    // let enteredGoal='';
    var goals=[];
    var goalCount=0;
    function makeGoals(){

        setlistGoal(currentList=>[...currentList,enteredGoal]);
        setgoalsCount(currentCount=> currentCount+1);
    }
    return(
        <View style={{flex: 1,}}>
            <StatusBar hidden={true}/>
            <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    backgroundColor: 'blue',
                    alignSelf:'center',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>setcount(count+1)}
            >
                <Text>Increase value{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    height:50,
                    width:50,
                    backgroundColor: 'blue',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>setcount(count-1)}
            >
                <Text>Decrease value{count}</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: 'red'}}>
                <Text>{count}</Text>
            </View>
            <View style={styles.goalsView}>
                <View style={styles.goalsTextInputContainer}>
                    <TextInput placeholder={'Enter you goals one at a time'} style={styles.goalsTextInput} onChangeText={text=>setenteredGoal(text)} value ={enteredGoal}/>
                    {console.log(enteredGoal)}
                    <Button title='Add1' style={{borderRadius:5}} onPress={()=>{
                        goals.push(enteredGoal);
                        goalCount=goalCount+1
                    }}/>
                    <Button title='Add' style={{borderRadius:5}} onPress={()=>{
                      console.log('adasdadasdasdasd',listGoal,goalsCount);
                      alert(goals);
                    }}/>
                    <Button title='Add2' style={{borderRadius:5}} onPress={makeGoals}/>
                </View>
                {/*<Text>adsdasdasd {listGoal}</Text>*/}
            </View>
            {listGoal.map(goals=>{
              return  <Text>
                    {goals}
                </Text>
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    goalsView:{
        // flex:1,
        backgroundColor:'#FFB1FB'
    },
    goalsTextInputContainer:{
        width:'100%',
        height:40,
        flexDirection: 'row',
        marginTop:3,
        marginLeft:3
    },
    goalsTextInput:{
        width:225,
        marginRight:3,
        borderWidth:2,
        borderColor:'#D571FF',
        borderRadius:5,
        fontSize:15,
        fontWeight: "300",
        // includeFontPadding: true,
        letterSpacing: 1.5,
    }
})