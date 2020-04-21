import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

class SearchListComponent extends Component {
    constructor(props) {
        super(props)
	this.state={
		compare:false,
		alert:false,
		favourite:false,
		image:''
	};
    }
	
    render() {

        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        const itemData = this.props.itemData;
		
		
		
        return (
					
						<View style={styles.contentContainer}>
						<View style={{width:35,marginHorizontal:0, alignItems:'center'}}>
							{this.props.itemData.item.coinImage===1?
							<Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
									source={require("./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png")}
										/>:
										this.props.itemData.item.coinImage===2?
										<Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
									source={require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')}
										/>:
										<Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
									source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
										/>
										}
						</View>
							{console.log('recentCoinData',this.state.image)}
							<Text style={styles.listTextType}>{itemData.item.name}</Text>
							<Text style={styles.listTextName}>{itemData.item.type}</Text> 
						
								<TouchableOpacity
								onPress={()=>{
									this.setState({compare:!this.state.compare});
								}}
								>{this.state.compare?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_compare_selected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_compare_unselected.png')}
										/>
								}
								</TouchableOpacity>
						
								<TouchableOpacity
								onPress={()=>{
									this.setState({alert:!this.state.alert});
								}}
								>{this.state.alert?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_alert_unselected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_alert_unselected.png')}
										/>
								}</TouchableOpacity>
						
								<TouchableOpacity
								onPress={()=>{
									this.setState({favourite:!this.state.favourite});
								}}
								>{this.state.favourite?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_selected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_unselected.png')}
										/>
								}</TouchableOpacity>
						
						</View>
						
        )
    }
}

export default SearchListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001623',
    },
    listTextType: {
        marginHorizontal: 0,
		marginRight:10,
		color:'#fff',
		fontSize:20,
		fontWeight:'700'
    },
    listTextName: {
        marginHorizontal: 10,
		color:'#fff',
		fontSize: 15
    },
    searchbar: {
        marginVertical: 15,
        borderRadius: 20,
		height:40,
		width:'80%',
		backgroundColor: '#03273B',
        padding: 15,
    },
    contentContainer: {
        marginVertical: 5,
        borderRadius: 10,
		height:50,
        backgroundColor: '#03273B',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal:5,
    },
    
})
