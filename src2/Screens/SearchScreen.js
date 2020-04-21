import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
import SearchListComponent from './../components/SearchListComponent';
const windowWidth = Dimensions.get('window').width;
class SearchScreen extends Component {
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
					<View style={styles.filterIconsContainer}>
						<Text style={styles.filtertext}>
							Compare
						</Text>
						<Text style={styles.filtertext}>
							Alert
						</Text>
						<Text style={styles.filtertext}>
							Fav
						</Text>
					</View>
					</View>
				</View>
				<View style={{height:180}}>
				<FlatList
						keyExtractor={(item,index)=> item.id.toString()}
						data={this.state.recentCoinData}
						extraData={this.state.recentCoinData}
						initialNumToRender={3}
						renderItem={(itemData,key)=>
						
							<SearchListComponent itemData={itemData} />
						
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
						extraData={this.state.rankCoinData}
						renderItem={(itemData,key)=>
					<SearchListComponent itemData={itemData} />
						}
						/>
						<View style={styles.buttonContainer}>
							<TouchableOpacity style={styles.button}  
							onPress={() => { 
							//this.props.navigation.navigate('Screen2') 
							}
							}>
								<Text style={styles.signUpText}>Clear</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.button}  
							onPress={() => { this.props.navigation.navigate('CompareCrypto') }}
							>
								<Text style={styles.signUpText}>Compare</Text>
							</TouchableOpacity>
						</View>
            </SafeAreaView>
        )
    }
}

export default SearchScreen;

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
		marginTop:15
		
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
    buttonContainer: {
		width:windowWidth,
		height:100,
		position: 'absolute',
		backgroundColor:'#001623',
		bottom:0,
		left:0,
		borderTopLeftRadius:60,
		borderTopRightRadius:60,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'space-around'
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
