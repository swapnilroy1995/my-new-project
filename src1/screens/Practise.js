import React, {Component,useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar,TextInput, Button, Alert} from 'react-native';
import AddGoals from '../components/AddGoals';
import GoalsList from '../components/GoalsList';

export default function countFunction(navigation, route, props){
    const [count, setcount] = useState(0);
    const [goalsCount, setgoalsCount] = useState(0);
    const [listGoal, setlistGoal] = useState([]);
    var goals=[];
    var goalCount=0;
    function makeGoalsList(enteredGoal){
        setlistGoal(currentList=>[...currentList,{key:(goalsCount+Math.random()).toString(),goal:enteredGoal}]);
        setgoalsCount(currentCount=> goalsCount+1);
    }
    function deleteGoalsList(enteredKey){
        setlistGoal(currentList=>{
            return listGoal.filter((goal)=>goal.key!==enteredKey)
        });
        setgoalsCount(currentCount=> goalsCount-1);
    }
    return(
        <View style={{flex: 1,}}>

            <TouchableOpacity
                style={styles.increase}
                onPress={()=>setcount(count+1)}
            >
                <Text>Increase value{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.decrease}
                onPress={()=>setcount(count-1)}
            >
                <Text>Decrease value{count}</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: 'red'}}>
                <Text>{count}</Text>
            </View>
            <View style={styles.goalsView}>
                <AddGoals makeGoalsList={makeGoalsList}/>
                <TouchableOpacity
                    style={styles.decrease}
                    onPress={()=>{
                        navigation.route.params.setLoggedIn();
                    }}
                >
                    <Text>logout</Text>
                </TouchableOpacity>
            </View>
            <GoalsList listGoal={listGoal} setlistGoal={setlistGoal} deleteGoalsList={deleteGoalsList} />
        </View>
    );
}
const styles = StyleSheet.create({
    goalsView:{
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
    },
    increase:{
        height:50,
        width:50,
        backgroundColor: 'blue',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    decrease:{
        height:50,
        width:50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})