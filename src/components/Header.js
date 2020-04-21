import React, {Component} from'react'
import {View,TouchableOpacity,Text, Button, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

class Header extends Component{
    render(){
        return(
            <View style={styles.headerContainerStyle}>
			<View style={{flex:1, flexDirection: 'row',}}>
                {
                    this.props.previous ? (
                    <TouchableOpacity
                        style={styles.goBack}
                        onPress={()=>this.props.navigationer.goBack(this.props.previous)}
                    >
                     <Image
						resizeMode= 'contain'
						style={styles.goBackIcon}
						source={require('./../../assets/baseline_arrow_back_black_36.png')}
					/>
					<Text style={{fontSize:15}}>Back</Text>
					</TouchableOpacity>
                ) :(
                    <View style={{ flex: 1 }} />
                )}
                <View
                    style={{
                        flex: 6,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                />
				
					</View>
					
						  <View style={styles.seperator}/>
            </View>
        );
    }
}


const styles= StyleSheet.create({
    container:{
        flex: 1,
		alignItems:'center'
    },
	headerContainerStyle:{ 
		height: 65, 
		width: "100%",
		backgroundColor: "#fff",
	},	
	  goBack: {
		flex: 1.5,
		alignItems: "center",
		justifyContent: "center",
		flexDirection:'row',
		justifyContent: 'space-around'
	  },
	goBackIcon: {
		  height:25,
		  width: 25
	  },
		seperator:{ 
			height: 1,
			width: '100%',
			backgroundColor: '#9B9B9B'
		},
});


export default Header;