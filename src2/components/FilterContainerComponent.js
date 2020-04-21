import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'



const filter = require('./../../assets/android/all_screens/drawable-xxhdpi/icn_filter.png');


class FilterContainerComponent extends Component {
    constructor(props) {
        super(props)
	this.state={
		oneHour:false,
		oneDay:false,
		oneWeek:false,
		image:''
	};
    }
	
    hour=(type)=>{
		if(type==='oneHour'){
			this.setState({oneHour : !this.state.oneHour})
			return true
		}
		if(type==='oneDay'){
			this.setState({oneDay : !this.state.oneDay})
			return true
		}
		if(type==='oneWeek'){
			this.setState({oneWeek : !this.state.oneWeek})
			return true
		}
    }
	
    render() {

		
		
		
        return (
					
						<View style={styles.filterPropsContainer} >
							{console.log('this.props.navigation',this.props.route)}
				<View style={styles.filterContainer}>
					{this.props.filter==='hidden'?
					
					<View style={{ width: 52 }}/>
					:
					<TouchableOpacity 
					onPress={() => { this.props.navigation.navigate('FilterScreen')}}
					style={{height: 32, width: 32,alignItems:'center', borderRadius: 5, justifyContent: 'center', backgroundColor:'#47DFFF', padding:10}}>
				  <Image
					style={{ height: 24, width: 24 }}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
					/>
					</TouchableOpacity>
					}
					<View style={styles.filterContent}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>this.hour('oneHour')}><Text style={this.state.oneHour?styles.filterSelected:styles.filterUnselected}  >1H</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneDay')}><Text style={this.state.oneDay?styles.filterSelected:styles.filterUnselected} >1D</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneWeek')}><Text style={this.state.oneWeek?styles.filterSelected:styles.filterUnselected} >1W</Text></TouchableOpacity>
                </View>
                </View>
					</View>
				</View>
						
        )
    }
}

export default FilterContainerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001623',
    },
    filterPropsContainer: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#001623',
		flexDirection:'row',
		paddingRight:0
    },
	filterContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginVertical:10,
		marginTop:15,
		
		
	},
	filterIconsContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '40%',
		alignItems: 'flex-end',
	},
	filtertext:{
		color:'#5E6467',
		fontSize: 12,
		marginRight:5
	},
    filterContent:{  
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterDate: {
        padding:5,
        alignItems: 'center',
        // borderRadius:-8,
        // borderWidth:1,
        backgroundColor:'#47DFFF',
        // marginVertical:5
    },
    filterStyle: {
        height: 16.5,
        alignItems: 'flex-start',
        marginHorizontal: -8
    },
    dropdown: {
        height: 5,
        alignSelf: 'center',
    },
    filterSelected:{
       fontSize:14,
        padding:5,
		paddingHorizontal:10,
        alignItems: 'center',
        borderRadius:8,
        marginHorizontal:5,
        backgroundColor:'#fff',
		fontWeight: '700',
		color:'#000'
		},
    filterUnselected:{
       fontSize:14,
        padding:5,
		paddingHorizontal:10,
        alignItems: 'center',
        borderRadius:8,
        marginHorizontal:5,
        backgroundColor:'#001623',
		fontWeight: '700',
		color:'#fff'
		}
    
})
