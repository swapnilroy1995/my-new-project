import React, {useState, Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default function GoalsList(props){
    let aaa= 'adasasda';
    // let abc= "hello"+${aaa}+"123";
    return(
        <FlatList
            keyExtractor={(item,index)=> item.key}
            data={props.listGoal}
            ItemSeparatorComponent={()=><View style={{ width:'100%', height:2, backgroundColor: 'red'}}/>}
            renderItem={itemData=>
                <View style={styles.GoalContainer} >
                    <Text>{itemData.item.goal}</Text>
                    {/*<Text>{abc}</Text>*/}
                    <TouchableOpacity
                        style={{height:20, width: 20, backgroundColor: "black",alignItems: 'center', activeOpacity : 0.9}}
                        onPress={()=>{
                            props.deleteGoalsList(itemData.item.key)
                        }}
                    >
                        <Text style={{color: '#fff'}}>---</Text>
                    </TouchableOpacity>
                </View>
            }


        />
    )
}
const styles= StyleSheet.create({
    GoalContainer:{
        marginHorizontal:10,
        height: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})