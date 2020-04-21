import React, { Component } from "react";
import {
  AppRegistry,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput,
  StyleSheet,
  Text,
  View	
  ,ScrollView,
  StatusBar,
  TouchableHighlight,
  FlatList,
  Modal, 
  Dimensions,
  TouchableWithoutFeedback
} from "react-native";
import CoinInfo from './../components/CoinInfo';
import InformationButtonsContainer from './../components/InformationButtonsContainer';
import {screenStyles} from '../styleSheet/ScreenStyles';

const search = require('./../../assets/android/all_screens/drawable-xhdpi/icn_zoom_in.png')
const notification = require('./../../assets/android/all_screens/drawable-xhdpi/icn_notification_unselected.png')
const tether = require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')
const ethereum = require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')
const bitcoin = require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')
const filter = require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')
const sideBarCircle = require('./../../assets/android/all_screens/drawable-xhdpi/icn_Bear_bulls_unselected.png')
const increase = require('./../../assets/android/all_screens/drawable-xhdpi/icn_increase_12x8.png')
const decrease = require('./../../assets/android/all_screens/drawable-xhdpi/icn_down.png')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Alerts extends Component {
  constructor() {
    super();
    this.state={
		alertBuilderModal:false,
		compare:false,
		alert:false,
		favourite:false,
		image:'',
		oneHour:false,
		oneDay:true,
		oneWeek:false,
		oneMonth:false,
		threeMonths:false,
		oneYear:false,
		selectedTab:'Alert Builder',
		all:false,
		coinInfo:{
			rank:4,
			marketCap: '$ 88.4 B',
			volume: '$ 16.7 B',
			volumeChange:'17%',
			circulatingSupply: '17.6 M',
			maxSupply: '25.0 M',
			ICOprice: '$ 0.00031',
			percentageATH:'17%',
			category: 'Currency',
			consensus : null,
			watchScore:'85%'
		},dataSource: [
                    {
                        coin: 'USDT',
						id:"1234",
                        cointext: 'dwfewf',
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: increase
                    },
                    {
                        coin: 'ETH',
						id:"1235",
                        cointext: 'dwfewf',
                        icon: ethereum,
                        price: '$115,022.06',
                        dropdownImages: decrease
                    },
                    {
                        coin: 'USDT',
						id:"1236",
                        cointext: 'dwfewf',      
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: increase
                    },
                    {
                        coin: 'BTC',
						id:"1237",
                        cointext: 'dwfewf',
                        icon: bitcoin,
                        price: '$115,022.06',
                        dropdownImages: decrease
                    },
                    {
                        coin: 'ETH',
						id:"1238",
                        cointext: 'dwfewf',
                        icon: ethereum,
                        price: '$115,022.06',
                        dropdownImages: increase
                    },
                    {
                        coin: 'USDT',
                        cointext: 'dwfewf',
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: decrease
                    },
                    {
                        coin: 'USDT',
						id:"1239",
                        cointext: 'dwfewf',
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: increase
                    }
         
                ],
	};
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  
  	
    tabChange=(type)=>{
		this.setState({selectedTab:type})
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
		if(type==='oneMonth'){
			this.setState({oneMonth : !this.state.oneMonth})
			return true
		}
		if(type==='threeMonths'){
			this.setState({threeMonths : !this.state.threeMonths})
			return true
		}
		if(type==='oneYear'){
			this.setState({oneYear : !this.state.oneYear})
			return true
		}
		if(type==='all'){
			this.setState({all : !this.state.all})
			return true
		}
    }
  
  render() {
    return (
	<View style={styles.contentContainer}>
		
    
	  
        
						<View style={styles.arbitrageContainer}>
								<TouchableOpacity onPress={()=>this.tabChange('Alert Builder')} >
									<Text style={{color: '#fff'}}> Alert Builder</Text>
										{
										this.state.selectedTab==='Alert Builder'?<View style={{borderRadius:2,height: 2,backgroundColor: '#47DEFE', marginTop:5}}/>:null
										}
								</TouchableOpacity>
							<TouchableOpacity onPress={()=>this.tabChange('MarketCap')}>
								<Text style={{color: '#fff'}}>Alert History</Text>
										{
										this.state.selectedTab==='Alert History'?<View style={{borderRadius:2,height: 2,backgroundColor: '#47DEFE', marginTop:5}}/>:null
										}
							</TouchableOpacity>
							
					
				</View>
		<View style={styles.filterPropsContainer} >
				<View style={styles.filterContainer}>
				<View style={styles.filterIconsContainer}>
				  <TouchableOpacity style={{height: 30, width: 30,alignItems:'center', justifyContent: 'center', backgroundColor:'#47DFFF', borderRadius:7}}>
				  <Image
					style={{ height: 24, width: 24, backgroundColor:'#47DFFF'}}
					resizeMode={'contain'}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
					/>
					</TouchableOpacity>
					<Text style={styles.filtertext}>
							Coin
						</Text>
						<Text style={styles.filtertext}>
							Type
						</Text>
					</View>
					<View style={{justifyContent:'flex-end', alignItems: 'center'}}>
						
						<Text style={styles.filtertext}>
							Spec
						</Text>
					</View>
					</View>
				</View>
				
				<FlatList
						keyExtractor={(item)=> item.id}
						
						//ListFooterComponent={<View style={{ height: 0, marginBottom: 50 }}></View>}
						data={this.state.dataSource}
						extraData={this.state.dataSource}
						renderItem={(itemData)=>
					<TouchableOpacity  
					style={[screenStyles.listCardStyles,{height: 70}]}
					>
                                        <View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around', alignItems: 'center' }}>

                                            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center'  }}>
                                                <Image 
												source={itemData.item.icon} 
												style={styles.coinStyles} 
												resizeMode='contain' />
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>{itemData.item .coin}</Text>
                                                <Text style={{ fontSize:12,color:'#fff'}}>{itemData.item .cointext}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>Price$</Text>
                                                <Text style={{ fontSize:12,color:'#fff'}}>Single</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.5 }}></View>
                                            <View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
                                                <Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}>{itemData.item .price}</Text>
                                               
                                            </View>
                                </TouchableOpacity>
						}
												/>
				
			
								
							{
								this.state.alertBuilderModal&&						
									<View
											style={{flex:1, height:windowHeight, width:windowWidth, backgroundColor: '#00152299', position: 'absolute', elevation:10}}

										onStartShouldSetResponder={()=>this.setState({alertBuilderModal:!this.state.alertBuilderModal})}
									/>
							}
							{
								this.state.alertBuilderModal&&
									<TouchableOpacity
											style={styles.BuilderButton}
											onPress={()=>this.props.navigation.navigate('AlertBuilderCoinSelecter')}
											>
												<View
													style={styles.alertButtonTextContainer}
												>
														<Text style={{color: '#fff'}}>
															New
														</Text>
												</View>
												<TouchableOpacity
													style={styles.insideBuilderButton}
													onPress={()=>this.props.navigation.navigate('AlertBuilderCoinSelecter')}
													>
												
														
														<Image
																style={{ height: 20, width: 20, marginVertical: 2 ,}}
																resizeMode = {'contain'}
																source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_alert_unselected.png')}
															/>
												</TouchableOpacity>
									</TouchableOpacity>
							}
							{
								this.state.alertBuilderModal&&
									<TouchableOpacity
											style={[styles.BuilderButton,{bottom:210}]}
											onPress={()=>this.props.navigation.navigate('AlertBuilderCoinSelecter')}
											>
												<View
													style={styles.alertButtonTextContainer}
												>
														<Text style={{color: '#fff'}}>
															$Price
														</Text>
												</View>
												<TouchableOpacity
													style={styles.insideBuilderButton}
													
													onPress={()=>this.props.navigation.navigate('AlertBuilderCoinSelecter')}
													>
												
														
														<Image
																style={{ height: 20, width: 20, marginVertical: 2 ,}}
																resizeMode = {'contain'}
																source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_alert_unselected.png')}
															/>
												</TouchableOpacity>
									</TouchableOpacity>
							}
							
							{
								this.state.alertBuilderModal&&
									<TouchableOpacity
											style={[styles.BuilderButton,{bottom:270}]}
											onPress={()=>this.props.navigation.navigate('AlertBuilderCoinSelecter')}
											>
												<View
													style={styles.alertButtonTextContainer}
												>
														<Text style={{color: '#fff'}}>
															% Rsi
														</Text>
												</View>
												<TouchableOpacity
													style={styles.insideBuilderButton}
													onPress={()=>this.props.navigation.navigate('AlertBuilderCoinSelecter')}
													>
												
														<Image
																style={{ height: 20, width: 20, marginVertical: 2 ,}}
																resizeMode = {'contain'}
																source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_alert_unselected.png')}
															/>
												</TouchableOpacity>
									</TouchableOpacity>
							}
		<TouchableOpacity
								style={styles.addBuilderButton}
								onPress={()=>this.setState({alertBuilderModal:!this.state.alertBuilderModal})}
								>
									<Text>+</Text>
								</TouchableOpacity>
			</View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    borderRadius:15,
    justifyContent: 'center',
	alignItems: 'center',
    backgroundColor: '#03273B',
	marginHorizontal:15,
	paddingBottom: 20
  },
  contentContainer: {
    backgroundColor: '#0C3F5B',
},
  arbitrageContainer: {
	  padding:10,
	  marginVertical:5,
	  flexDirection: 'row',
	  justifyContent: 'space-around'
},
addBuilderButton:{
	height:50,
	width:50, 
	position:'absolute', 
	bottom:80, 
	right:20, 
	backgroundColor: '#47DFFF', 
	alignItems: 'center', 
	justifyContent: 'center',
	borderRadius:10,
	shadowOffset:{height:10,width:10},
            shadowOpacity:.85,
            shadowRadius:10,
    shadowColor: "black",
	
   elevation: 50,
	},
insideBuilderButton:{
	height:30,
	width:30, 
	backgroundColor: '#47DFFF', 
	alignItems: 'center', 
	justifyContent: 'center',
	borderRadius:10,
	shadowOffset:{height:10,width:10},
            shadowOpacity:.85,
            shadowRadius:10,
    shadowColor: "black",
	
   elevation: 50,
	},
BuilderButton:{
	height:40,
	width:120, 
	position:'absolute', 
	bottom:150, 
	right:20,  
	alignItems: 'center', 
	justifyContent: 'center',
	borderRadius:10,
	shadowOffset:{height:10,width:10},
            shadowOpacity:.85,
            shadowRadius:10,
    shadowColor: "black",
	
   elevation: 50,
   flexDirection:'row',
   justifyContent: 'space-between',
   padding:5
   
},
	
	alertButtonTextContainer:{
	//backgroundColor: '#47DFFF',
	backgroundColor: '#2AA19880',
		height:30,
		width: 70,
		alignItems:'center',
		justifyContent: 'center',
		borderRadius:5
		
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
  inputHeaderStyles: {
	  color:'#818181',
	  alignSelf:'flex-start',
	  marginVertical:25,
},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#F5FCFF',
    marginBottom: 5,
  },
  contentContainer: {
	  flex:1,
    backgroundColor: '#001623',
	padding:10
},
    filterPropsContainer: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#001623',
		flexDirection:'row',
		paddingRight:0
    },
buttonContainer: {
  height:45,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom:20,
  marginTop:20,
  width:350,
  borderRadius:10,
},
avgButtons: {
  backgroundColor: "#47DFFF",
  width: 120,
  height:50,
  alignItems: 'center',
  justifyContent: 'center', 
  marginHorizontal:15,
  borderRadius: 10
  
},
compareStyle: {
  width: 90,
  height:50,
  alignItems: 'center',
  justifyContent: 'space-around', 
  marginHorizontal:15,
  borderRadius: 10,
  flexDirection:'row'
},
signUpText: {
  color: 'black',
  fontWeight:'bold',
},
touchId:{
  height:20,
  width:20,
  margin:15,
  alignItems:'center',
  },
    listTextType: {
        marginHorizontal: 15,
		color:'#fff',
		fontSize:20,
		fontWeight:'700',
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
		},
    coinStyles: {
        height: 40,
		width:40,
        alignSelf: 'center'
    },
  
  
});
