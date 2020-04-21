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
  ,ScrollView,StatusBar,TouchableHighlight
} from "react-native";
import FilterContainerComponent from '../components/FilterContainerComponent';

import {screenStyles} from '../styleSheet/ScreenStyles';

const increase = require('./../../assets/android/all_screens/drawable-xhdpi/icn_increase_12x8.png')
const decrease = require('./../../assets/android/all_screens/drawable-xhdpi/icn_down.png')
const gainers = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_gainers_and_losers.png")
const info = require('./../../assets/android/all_screens/drawable-xhdpi/icn_info.png')

const crypto = require("./../../assets/android/all_screens/drawable-xxxhdpi/bg_cryptonmics.png")
const cryptoname = require("./../../assets/android/all_screens/drawable-xxxhdpi/Cryptonomics.png")
const updropdown = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_Arrow_blue.png")

export default class Summary extends Component {
  constructor() {
    super();
    this.state={
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
		all:false,
		frequencyDropdown:{
			isOpen:false,
		},
		typeDropdown:{
			isOpen:true,
		},
		valueDropdown:{
			isOpen:false,
		},
		candlestickDropdown:{
			isOpen:false,
		}
	};
  }
  
  render() {
    return (
      <ScrollView style={styles.contentContainer} contentContainerStyle={{padding:10, }}>
	  
	  
	  <TouchableOpacity
								onPress={()=>this.props.navigation.navigate('Summary')}
								style={{width:'100%', alignItems: 'center'}}
						>
						<View style={{width:'60%', height:140}}>
                            <Image source={crypto} style={{ width: '100%', height: 140 }} />
							<Image source={cryptoname} style={{ width: '45%', height: 50,position:'absolute', top:15, left:15, resizeMode: 'center', }} />
                                <Text style={{ alignSelf: 'center', color: '#fff', paddingLeft: 15, position:'absolute', top:65, left:5,}}>Summary</Text>
                            
							</View>
                                
                           
                        </TouchableOpacity>
						
						
	  
	    
		<View style={{ marginVertical:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>Cryptonomics Summary</Text>
                    <Text style={styles.textprofile}>
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                    </Text>
                </View>
	  
          <FilterContainerComponent  filter={'hidden'} navigation={this.props.navigation}/>
        
		
        <View style={[styles.container,{ backgroundColor: '#014367', }]}
				onStartShouldSetResponder={()=>
				this.setState({
					frequencyDropdown:{...this.state.frequencyDropdown,isOpen:!this.state.frequencyDropdown.isOpen},
					valueDropdown:{...this.state.valueDropdown,isOpen:false},
					typeDropdown:{...this.state.typeDropdown,isOpen:false}
					})
					}
		>
								<View style={{marginVertical:10, paddingHorizontal: 20, paddingVertical:5,flexDirection: 'row',justifyContent: 'space-between',width:'100%', alignItems: 'center'}}>
												<Text style={{color:'#6D777D', fontSize: 15, fontWeight: '700'}}>
														Market Overview
												</Text>
												
												
								</View>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										
										>
											<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

												<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>1</Text>
												<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
													<Image 
													source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
													style={styles.coinStyles} 
													resizeMode='contain' />
												</View>
												<View>
													<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
												</View>
											</View>
											<View style={{ flex: 1 }}></View>
											<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1}}>
												<View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
													<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
													
												</View>
											</View>
                                </TouchableOpacity>
		</View>
	
	
	      <View style={[styles.container,{ backgroundColor: '#014367', }]}
								onStartShouldSetResponder={()=>
								this.setState({
									frequencyDropdown:{...this.state.frequencyDropdown,isOpen:!this.state.frequencyDropdown.isOpen},
									valueDropdown:{...this.state.valueDropdown,isOpen:false},
									typeDropdown:{...this.state.typeDropdown,isOpen:false}
									})
								}
					>
								<View style={{marginVertical:10, paddingHorizontal: 20, paddingVertical:5,flexDirection: 'row',justifyContent: 'space-between',width:'100%', alignItems: 'center'}}>
												<Text style={{color:'#6D777D', fontSize: 15, fontWeight: '700'}}>
														Top Volume(24H)
												</Text>
												
												
								</View>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										 
										>
												<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

													<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>1</Text>
													<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
														<Image 
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
														style={styles.coinStyles} 
														resizeMode='contain' />
													</View>
													<View>
														<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
													</View>
												</View>
												<View style={{ flex: 1 }}></View>
												<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1}}>
													<View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
														<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
														
													</View>
												</View>
                                </TouchableOpacity>
								<View style={{backgroundColor: '#03273B', height:1}}/>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										 
										>
												<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

													<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>2</Text>
													<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
														<Image 
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
														style={styles.coinStyles} 
														resizeMode='contain' />
													</View>
													<View>
														<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
													</View>
												</View>
												<View style={{ flex: 1 }}></View>
												<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1}}>
													<View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
														<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
														
													</View>
												</View>
                                </TouchableOpacity>
								<View style={{backgroundColor: '#03273B', height:1}}/>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										 
										>
												<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

													<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>3</Text>
													<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
														<Image 
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
														style={styles.coinStyles} 
														resizeMode='contain' />
													</View>
													<View>
														<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
													</View>
												</View>
												<View style={{ flex: 1 }}></View>
												<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1}}>
													<View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
														<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
														
													</View>
												</View>
                                </TouchableOpacity>
		</View>
	
	
	      <View style={[styles.container,{ backgroundColor: '#014367', }]}
								onStartShouldSetResponder={()=>
								this.setState({
									frequencyDropdown:{...this.state.frequencyDropdown,isOpen:!this.state.frequencyDropdown.isOpen},
									valueDropdown:{...this.state.valueDropdown,isOpen:false},
									typeDropdown:{...this.state.typeDropdown,isOpen:false}
									})
								}
					>
								<View style={{marginVertical:10, paddingHorizontal: 20, paddingVertical:5,flexDirection: 'row',justifyContent: 'space-between',width:'100%', alignItems: 'center'}}>
												<Text style={{color:'#6D777D', fontSize: 15, fontWeight: '700'}}>
														Top Gainers(24H)
												</Text>
												
												
								</View>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										 
										>
												<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

													<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>1</Text>
													<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
														<Image 
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
														style={styles.coinStyles} 
														resizeMode='contain' />
													</View>
													<View>
														<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
													</View>
												</View>
												<View style={{ flex: 1 }}></View>
												<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1.5}}>
													<View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
														<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
														<View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop:3}}>
															<Image source={decrease} style={styles.dropdown} resizeMode='contain' />
															<Text style={{textAlign:'center', fontSize:12,color:'red',}}>0.7%</Text>
														</View>
													</View>
												</View>
                                </TouchableOpacity>
								<View style={{backgroundColor: '#03273B', height:1}}/>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										 
										>
												<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

													<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>1</Text>
													<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
														<Image 
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
														style={styles.coinStyles} 
														resizeMode='contain' />
													</View>
													<View>
														<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
													</View>
												</View>
												<View style={{ flex: 1 }}></View>
												<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1.5}}>
													<View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
														<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
														<View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop:3}}>
															<Image source={increase} style={styles.dropdown} resizeMode='contain' />
															<Text style={{textAlign:'center', fontSize:12,color:'green',}}>0.7%</Text>
														</View>
													</View>
												</View>
                                </TouchableOpacity>
								<View style={{backgroundColor: '#03273B', height:1}}/>
								<TouchableOpacity  
										style={[screenStyles.listCardStyles,{height: 60, backgroundColor: '#014367',}]}
										 
										>
												<View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' , alignItems:'center'}}>

													<Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>1</Text>
													<View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
														<Image 
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')} 
														style={styles.coinStyles} 
														resizeMode='contain' />
													</View>
													<View>
														<Text style={{ fontSize:14,color:'#fff', fontWeight: 'bold'}}>Tether</Text>
													</View>
												</View>
												<View style={{ flex: 1 }}></View>
												<View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1.5}}>
													<View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
														<Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}> $115,022.06</Text>
														<View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop:3}}>
															<Image source={increase} style={styles.dropdown} resizeMode='contain' />
															<Text style={{textAlign:'center', fontSize:12,color:'green',}}>0.7%</Text>
														</View>
													</View>
												</View>
                                </TouchableOpacity>
		</View>
	
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    borderRadius:15,
    justifyContent: 'center',
    backgroundColor: '#03273B',
	marginHorizontal:15,
	marginVertical:10,
	paddingBottom: 20,

  },
  contentContainer: {
    backgroundColor: '#0C3F5B',
},

  contentContainer: {
	  flex:1,
    backgroundColor: '#001623',
	
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
    arrow: {
        height: 18,
        marginTop: '-20%',
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
  ,
  notificationParamContainer:{
	  flexDirection: 'row',
	  justifyContent:'space-between',
	  alignItems: 'center',
	  paddingHorizontal: 20,
	  paddingVertical:10,
	  marginBottom:1,
	  backgroundColor:'#014367'
  },
    coinStyles: {
        height: 30,
		width:30,
        alignSelf: 'center'
    },
    dropdown: {
        height: 5,
        alignSelf: 'center',
    },
    membership: {
        marginVertical: 10,
        padding: 15,
        backgroundColor:'#00304B',
        borderRadius: 5,
       justifyContent: 'flex-start',
    },

    textprofile: {
        alignSelf: 'center',
        fontSize: 12,
        //  fontFamily: 'Regular',
        color: '#fff',
        fontWeight: '700',

    },
    obvletter: {
        paddingLeft: 7,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'

    },
    blockContent: {
        backgroundColor: '#00304B',
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 10
    },
    blockletter: {
        paddingLeft: 7,
        color: '#fff',
        fontSize: 13,
    },
    gainersImage: {
        height: 75,
        width: 80,
        //  marginRight: -35,
        marginTop: -30,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center',
    },
  
});
