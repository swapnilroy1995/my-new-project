import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
import AlertListComponent from './../components/AlertListComponent';
const windowWidth = Dimensions.get('window').width;
class AlertBuilderCoinSelecter extends Component {
    constructor(props) {
        super(props),
            this.state = {
				recentCoinData:[
				{"id":"1234", "name":"USDT","type":"Tether", coinImage: 1},
				{"id":"1235","name":"USDT","type":"Tether", coinImage: 3},
				{"id":"1236","name":"USDT","type":"Tether", coinImage: 2},
				{"id":"1222","name":"USDT","type":"Tether", coinImage: 1},
				{"id":"1237","name":"USDT","type":"Tether", coinImage: 3},
				{"id":"1238","name":"USDT","type":"Tether", coinImage: 1},
				],
				rankCoinData:[
				{"id":"1239","name":"USDT","type":"Tether", coinImage: 2},
				{"id":"1231","name":"USDT","type":"Tether", coinImage: 1},
				{"id":"1232","name":"USDT","type":"Tether", coinImage: 3},
				{"id":"1233","name":"USDT","type":"Tether", coinImage: 2},
				{"id":"1240","name":"USDT","type":"Tether", coinImage: 3},
				{"id":"1241","name":"USDT","type":"Tether", coinImage: 1},
				{"id":"1250","name":"USDT","type":"Tether", coinImage: 2},
				{"id":"1251","name":"USDT","type":"Tether", coinImage: 1},
				{"id":"1252","name":"USDT","type":"Tether", coinImage: 3},
				{"id":"1253","name":"USDT","type":"Tether", coinImage: 2},
				{"id":"1254","name":"USDT","type":"Tether", coinImage: 3},
				{"id":"1255","name":"USDT","type":"Tether", coinImage: 1},
				],
            }
    }
	
searchFunction=()=>{console.log('inside search');};
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.searchbarContainer} >
				<TouchableOpacity 
				style={{ width: '15%', alignItems: 'flex-start', justifyContent: 'center'}}
				onPress={() => { this.props.navigation.pop() }}
				>
				<Image
					style={{ height: 20, width: 20, marginVertical: 2, marginHorizontal: 10 }}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_cross.png')}
					/>
					</TouchableOpacity>
				<TextInput
					onChange={()=>{this.searchFunction}}
					style={styles.searchbar}
				/>
				</View>
				<Text style={styles.listTextType}>Recent</Text>
				<View style={styles.filterPropsContainer} >
				<View style={styles.filterContainer}>
				  <TouchableOpacity style={{height: 30, width: 30,alignItems:'center', justifyContent: 'center', backgroundColor:'#47DFFF', borderRadius:7}}>
				  <Image
					style={{ height: 24, width: 24, marginVertical: 2 , backgroundColor:'#47DFFF'}}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
					/>
					</TouchableOpacity>
						
						<Text style={styles.filtertext}>
							Alert
						</Text>
						
					</View>
				</View>
				<View style={{height:180}}>
				<FlatList
						keyExtractor={(item,index)=> item.id.toString()}
						data={this.state.recentCoinData}
						extraData={this.state.recentCoinData}
						initialNumToRender={3}
						renderItem={(itemData,key)=>
						
							<AlertListComponent itemData={itemData} />
						
						}
						/>
						</View>
				<View style={styles.filterPropsContainer} >
					<View style={[styles.filterContainer,{marginTop:10}]}>
							<Text style={[styles.listTextType,{marginHorizontal:0}]}>Rank</Text>
					</View>
				</View>
				<FlatList
						keyExtractor={(item,index)=> item.id.toString()}
						data={this.state.rankCoinData}
						//ListFooterComponent={<View style={{ height: 0, marginBottom: 10 }}></View>}
						extraData={this.state.rankCoinData}
						renderItem={(itemData,key)=>
					<AlertListComponent itemData={itemData} />
						}
						/>
						 <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical:10}}>
					<TouchableOpacity
						style={styles.avgButtons}
						onPress={()=>this.props.navigation.goBack()}
					>
						<Text style={{color: '#000',fontSize: 15, fontWeight: '700'}}>
							Create Alert
						</Text>
					</TouchableOpacity>
				</View>
            </SafeAreaView>
        )
    }
}

export default AlertBuilderCoinSelecter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        backgroundColor: '#001623',
    },
	filterContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginVertical:10,
		marginTop:15,
		alignItems: 'center',
		
		
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
    searchbarContainer: {
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#001623',
		flexDirection: 'row'
    },
    searchbar: {
        marginVertical: 10,
        borderRadius: 20,
		height:50,
		flex:1,
		marginRight: 10,
		backgroundColor: '#03273B',
		paddingLeft: 15,
		color:'#fff'
    },
avgButtons: {
  backgroundColor: "#47DFFF",
  width: 200,
  height:50,
  alignItems: 'center',
  justifyContent: 'center', 
  borderRadius: 10
  
},
    listTextType: {
        marginHorizontal: 5,
		color:'#fff',
		fontSize:20,
		fontWeight:'700',
    },
    listTextName: {
        marginHorizontal: 10,
		color:'#fff',
		fontSize: 15
    },
    contentContainer: {
        marginVertical: 15,
        borderRadius: 10,
		height:50,
        backgroundColor: '#0C3F5B',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
    },
    filterPropsContainer: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#001623',
		flexDirection:'row',
		paddingRight:0
    },
    listTextType: {
        marginHorizontal: 10,
		color:'#fff',
		fontSize:20,
		fontWeight:'700'
    },
    coinStyles: {
        height: 40,
		width:40,
        alignSelf: 'center'
    },
button: {
  width:110,
  borderRadius:10,
  backgroundColor: '#47DFFF',
  height:40,
  alignItems:'center',
  justifyContent: 'center'
},
    
})
