import React, { Component } from 'react';
import  {View, Text, StyleSheet, Button, FlatList, ActivityIndicator,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { connect } from 'react-redux';
import { imageFeeder } from './../store/actions/ImageFeed';


class Tab1 extends Component{

    render(){
        return(
            <View style={{flex: 1,justifyContent:'center'}}>
                        <View style={{flex:1, backgroundColor: '#001623', alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{fontSize:30, color: '#fff'}}> Sample Screen</Text>
						</View>
            </View>
    )}
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    listContainerLight:{
        height:'70',
        width:'100%',
        marginVertical:10,
        marginHorizontal:3
    },
});

const mapStateToProps=(state)=>{
    return{imageFeed:state.ImageFeedReducer}

};

const mapDispatchToProps=(dispatch)=>{
    return{
        imageFeeder:(page)=>dispatch(imageFeeder(page)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab1)
