import React, { Component } from 'react';
import  {View, Text, StyleSheet, Button, FlatList, ActivityIndicator,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { connect } from 'react-redux';
import { imageFeeder } from './../store/actions/ImageFeed';


class Tab1 extends Component{

   componentDidMount(){
       this.props.imageFeeder(1);
    }
    render(){
        return(
        <View style={[{height:30, backgroundColor:'red'},styles.container]}>
            <Text>
                This is new Tab1
            </Text>
            <Button title={"Go to..."} onPress={()=>
                // this.props.navigation.navigate('Stack1',{name:'from tab 1'})
                this.props.imageFeeder(1)
            }/>
            <View style={{flex: 1,justifyContent:'center'}}>
                {
                    this.props.imageFeed.loading?
                        <ActivityIndicator size={70} style={{}}/>:
                        <FlatList
                            keyExtractor={item=>item.key}
                            data={this.props.imageFeed.imageFeed}
                            renderItem={(itemData)=>
                                <View style={{height:80,width:'100%',marginVertical: 10, marginHorizontal: 3, flexDirection: 'row'}}>
                                    <Image
                                        source={{uri:itemData.item.imageUrl}}
                                        style={{height:60, width:60, backgroundColor:'red'}}
                                    />

                                    {console.log('itemData',itemData)}
                                </View>
                            }
                        />
                }
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
    // console.log('inside mapstateToProps in tab 1 image feeder', state );
    return{imageFeed:state.ImageFeedReducer}

};

const mapDispatchToProps=(dispatch)=>{
    return{
        imageFeeder:(page)=>dispatch(imageFeeder(page)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Tab1)
