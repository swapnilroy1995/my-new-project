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
import CoinInfo from './../components/CoinInfo';
import InformationButtonsContainer from './../components/InformationButtonsContainer';

export default class AlertBuilder extends Component {
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
      <ScrollView style={styles.contentContainer} contentContainerStyle={{padding:10}}>
        <View style={[styles.container,{ backgroundColor: '#014367'}]}>
							<View style={{marginVertical:10,paddingVertical:5,flexDirection: 'row',justifyContent: 'space-around',width:'100%'}}>
								<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
											
										<Text style={{color:'#6D777D', fontSize: 12}}>
												Coin
											</Text>
											</View>
										<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
											
										<Text style={{color:'#6D777D', fontSize: 12}}>
												Type
											</Text>
											</View>
										<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
											
										<Text style={{color:'#6D777D', fontSize: 12}}>
												Spec
											</Text>
											</View>
							</View>
							
						<View style={{marginVertical:10,paddingVertical:5, paddingHorizontal:5,flexDirection: 'row',justifyContent: 'space-around',width:'100%'}}>
									<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
										
									   <View style={styles.filterUnselected}  >
											<TouchableOpacity  style={{flexDirection: 'row', alignItems: 'center'}}>
											<Image
														style={{ height: 25, width: 25, marginVertical: 2 ,}}
														source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
															/>
												<Text style={styles.filterUnselected}  >
													+2
												</Text>
											</TouchableOpacity>
										</View>
										</View>
									<View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
										<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>Rsi%
										</Text>
										<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>-
										</Text>
										</View>
									<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
										
									   <View style={[styles.filterUnselected,{width:'100%', marginRight:10}]}  >
											<TouchableOpacity onPress={()=>this.hour('oneMonth')} style={{flexDirection: 'row', alignItems: 'center'}}>
											
												<Text style={styles.filterUnselected}  >
													-
												</Text>
											</TouchableOpacity>
										</View>
										</View>
						</View>
		</View>
		
		
        <View style={[styles.container,{ backgroundColor: '#014367', }]}
					
		>
								<View style={{ paddingHorizontal: 20, paddingVertical:15,flexDirection: 'row',justifyContent: 'space-between',width:'100%', alignItems: 'center', backgroundColor: '#014367',}}
									onStartShouldSetResponder={()=>
															this.setState({
																typeDropdown:{...this.state.typeDropdown,isOpen:!this.state.typeDropdown.isOpen},
																frequencyDropdown:{...this.state.frequencyDropdown,isOpen:false},
																valueDropdown:{...this.state.valueDropdown,isOpen:false}
															})
					}
								>
												<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>
														Type
												</Text>
												
												<View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', }}>
												
												<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
														RSI %
												</Text>
												{this.state.typeDropdown.isOpen?
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')}
															/>
															:
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
												}
												</View>
								</View>
								
								{this.state.typeDropdown.isOpen?
											<View style={{backgroundColor:'#001623'}}>
											<View style={{backgroundColor:'#014367'}}>
													<Text style={{color:'#fff', fontSize: 15, fontWeight: '700', marginHorizontal: 20}}>
																			Simple Notification
													</Text>
													</View>
										
													<View style={styles.notificationParamContainer}>
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View><View style={{backgroundColor:'#001623'}}>
											<View style={{backgroundColor:'#014367', paddingTop:20}}>
													<Text style={{color:'#fff', fontSize: 15, fontWeight: '700', marginHorizontal: 20}}>
																			TA Notification
													</Text>
													</View>
										
													<View style={styles.notificationParamContainer}>
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
													<View style={styles.notificationParamContainer}>
											
															<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
																	RSI %
															</Text>
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
													</View>
											</View>
											</View>
										
								:null}
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
												<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>
														Type
												</Text>
												
												<View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', }}>
												
												<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
														RSI %
												</Text>
												{this.state.frequencyDropdown.isOpen?
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')}
															/>
															:
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
												}
												</View>
								</View>
		</View>
		
		
        <View style={[styles.container,{ backgroundColor: '#014367', }]}
				onStartShouldSetResponder={()=>
						this.setState({
								valueDropdown:{...this.state.valueDropdown,isOpen:!this.state.valueDropdown.isOpen},
								typeDropdown:{...this.state.typeDropdown,isOpen:false},
								frequencyDropdown:{...this.state.frequencyDropdown,isOpen:false}
						})
				}
		>
								<View style={{marginVertical:10, paddingHorizontal: 20, paddingVertical:5,flexDirection: 'row',justifyContent: 'space-between',width:'100%', alignItems: 'center'}}>
												<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>
														Type
												</Text>
												
												<View style={{flexDirection: 'row',justifyContent: 'space-around', alignItems: 'center', }}>
												
												<Text style={{color:'#6D777D', fontSize: 12, marginHorizontal:5}}>
														RSI %
												</Text>
												{this.state.valueDropdown.isOpen?
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')}
															/>
															:
															<Image
																	resizeMode={'contain'}
																	style={{ height: 12, width: 12}}
																	
																	source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')}
															/>
												}
												</View>
								</View>
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
  }
  
});
