import React, { useState, Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Header from './../components/Header';
import { Button, Text, View, TouchableOpacity, Animated, Image, Dimensions} from "react-native";
import {connect} from 'react-redux';
const Stack = createStackNavigator();
import ListPage from '../Screens/ListPage';
import MovieDetails from '../Screens/MovieDetails';

function RootStack(props) {
 
function MoviesListStack() {
    return (
      <Stack.Navigator
	  screenOptions={{
			 header: ({ scene, previous, navigation }) => {
            const { options } = scene.descriptor;
            const title = scene.route.name;
            const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

            const opacity = progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [0, 1, 0],
            });
			
           if(previous!==undefined){ return (
                <Animated.View style={{ opacity }}>
                    <Header previous={previous} title={title} navigationer={navigation} />
                </Animated.View>
            );}
			return null
          }
			 
			 
         }}
      >
        <Stack.Screen name="ListPage" component={ListPage} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
		
      </Stack.Navigator>
    );
  }


  return <MoviesListStack/>
}
class Root extends Component{
    render(){
        return(
            <RootStack props={this.props}/>
        );
    }
}


export default Root;