import React, {Component,useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar,TextInput, Button, Alert} from 'react-native';
import AddGoals from '../components/AddGoals';
import GoalsList from '../components/GoalsList';
import {addGoal, deleteGoal} from './../store/actions/Goals';
import {connect} from 'react-redux';
 // function CountFunction(navigation, route, props){
var listGoal =[];
class CountFunction extends Component{
    constructor(props){
        super(props);
    }
    // const [count, setcount] = useState(0);
    // const [goalsCount, setgoalsCount] = useState(0);
    // const [listGoal, setlistGoal] = useState([]);

    // var goalCount=0;
    // function makeGoalsList(enteredGoal){
     makeGoalsList=(enteredGoal)=>{
        // setlistGoal(currentList=>[...currentList,{key:(goalsCount+Math.random()).toString(),goal:enteredGoal}]);
        // setgoalsCount(currentCount=> goalsCount+1);
        this.props.addGoal(enteredGoal);
        console.log('goals',this.props);
         // listGoal=this.props.goals.map;

    };
     deleteGoalsList=(enteredKey)=>{
        // setlistGoal(currentList=>{
        //     return listGoal.filter((goal)=>goal.key!==enteredKey)
        // });
        // setgoalsCount(currentCount=> goalsCount-1);
         this.props.deleteGoal(enteredKey);
    };
    setlistGoal(enteredKey){
        // setlistGoal(currentList=>{
        //     return listGoal.filter((goal)=>goal.key!==enteredKey)
        // });
        // setgoalsCount(currentCount=> goalsCount-1);
    }
    render() {
        return (
            <View style={{flex: 1, }}>

                <TouchableOpacity
                    style={styles.increase}
                    // onPress={() =>
                    //     setcount(count+1)
                    // }
                >
                    <Text>Increase value{}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.decrease}
                    // onPress={
                    //     () => setcount(count - 1)
                    // }
                >
                    <Text>Decrease value{}</Text>
                </TouchableOpacity>

                <View style={{backgroundColor: 'red'}}>
                    {/*<Text>{this.props.goalList}</Text>*/}
                </View>
                <View style={styles.goalsView}>
                    <AddGoals makeGoalsList={this.makeGoalsList}/>
                    <TouchableOpacity
                        style={styles.decrease}
                        // onPress={() => {
                        //     navigation.route.params.setLoggedIn();
                        // }}
                        onPress={()=>this.makeGoalsList()}
                    >
                        <Text>logout</Text>
                    </TouchableOpacity>
                </View>
                <GoalsList listGoal={this.props.goalList} setlistGoal={this.setlistGoal} deleteGoalsList={this.deleteGoalsList}/>
            </View>
        );
    }
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
});


const mapStateToProps=(state)=>{
    // console.log('inside mapstatetoprops',state);
    // let goal=state.GoalReducer.goalList.map(g=>({key:g.key,goal:g.goal}));
    // console.log('mapped',goal);
    return {goalList:state.GoalReducer.goalList,}
};
const mapDispatchToProps=(dispatch)=>{
    return {
        addGoal:(goal)=> dispatch(addGoal(goal)),
        deleteGoal:(enteredKey)=> dispatch(deleteGoal(enteredKey))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CountFunction);