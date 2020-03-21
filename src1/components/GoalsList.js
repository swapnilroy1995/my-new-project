import React, {useState, Component} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default function GoalsList(props){
    let aaa= 'adasasda';
    // let abc= "hello"+${aaa}+"123";
    return(
        <FlatList
            keyExtractor={(item,index)=> item.key}
            data={props.listGoal}
            ItemSeparatorComponent={()=><View style={{ width:'100%', height:2, backgroundColor: '#2475AA'}}/>}
            renderItem={(itemData,key)=>
                <View style={styles.GoalContainer} >
                    <Text style={{fontSize:20, letterSpacing:2, fontWeight:'bold',  width: '80%' , marginVertical:15}}>{itemData.item.goal}</Text>
                    {console.log('inside goalList',itemData.item)}
                    {/*<Text>{abc}</Text>*/}
                    <TouchableOpacity
                        style={{height:30, width: 40, backgroundColor: "#E00E0E",alignItems: 'center', activeOpacity : 0.9, borderRadius:15}}
                        onPress={()=>{
                            props.deleteGoalsList(itemData.item.key)
                        }}
                    >
                        <Text style={{color: '#fff', fontSize:20,}}>---</Text>
                    </TouchableOpacity>
                </View>
            }


        />
    )
}
const styles= StyleSheet.create({
    GoalContainer:{
        marginHorizontal:10,
        // height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',

    }
});