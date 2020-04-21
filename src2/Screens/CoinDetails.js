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

export default class CoinDetails extends Component {
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
		}
	};
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#16a085",
      elevation: null
    },
    header: null
  };
  
  	
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
      <ScrollView style={styles.contentContainer} contentContainerStyle={{padding:10}}>
	  
	  
        <View style={[styles.container,{ backgroundColor: '#014367'}]}>
			<Text style={{color:'#fff', fontWeight: '700',marginVertical:10,fontSize:15}}>$236.5 B</Text>
			<View style={{marginVertical:10,paddingVertical:5,flexDirection: 'row',justifyContent: 'space-around',width:'100%'}}>
				<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
					<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>$222
					</Text>
				<Text style={{color:'#6D777D', fontSize: 10, marginLeft:15}}>
						High
					</Text>
					</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={{color:'#03CC79'}}>+2.2%</Text>
				</View>
			</View>
			<View style={{marginVertical:10,paddingVertical:5,flexDirection: 'row',justifyContent: 'space-around',width:'100%'}}>
				<View style={{flexDirection: 'row',justifyContent: 'center', flex: 1, alignItems: 'center'}}>
					<Text style={{color:'#fff', fontSize: 15, fontWeight: '700'}}>$222
					</Text>
				<Text style={{color:'#6D777D', fontSize: 10, marginLeft:15}}>
						High
					</Text>
					</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
					<Text style={{color:'#03CC79'}}>+2.2%</Text>
				</View>
			</View>
		</View>
		<View style={{flexDirection: 'row',justifyContent: 'space-around',width:'100%', marginTop:10}}>
				<View  style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
				<TouchableOpacity
								onPress={()=>{
									this.setState({compare:!this.state.compare});
								}}
								style={{flexDirection: 'row'}}
								>{this.state.compare?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#001623'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_compare_selected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#001623'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_compare_unselected.png')}
										/>
								}
								<Text style={{color:'#6D777D', fontSize: 15, marginLeft:15}}>
						Compare
					</Text>
								</TouchableOpacity>
					</View>
					<View  style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
					<TouchableOpacity
								onPress={()=>{
									this.setState({alert:!this.state.alert});
								}}
								style={{flexDirection: 'row'}}
								>{this.state.alert?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#001623'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_notification_selected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#001623'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_alert_unselected.png')}
										/>
								}
								<Text style={{color:'#6D777D', fontSize: 15, marginLeft:15}}>
						Alert
					</Text>
					</TouchableOpacity>
								</View>
								<View  style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
								<TouchableOpacity
								onPress={()=>{
									this.setState({favourite:!this.state.favourite});
								}}
								style={{flexDirection: 'row'}}
								>{this.state.favourite?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#001623'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_selected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#001623'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_unselected.png')}
										/>
								}
								<Text style={{color:'#6D777D', fontSize: 15, marginLeft:15}}>
						Favourite
					</Text>
					</TouchableOpacity>
								</View>
		</View>
		
		<View style={{flexDirection:'row', width:'100%', justifyContent: 'space-around', marginVertical: 15 }}>
                    <TouchableOpacity onPress={()=>this.hour('oneHour')}><Text style={this.state.oneHour?styles.filterSelected:styles.filterUnselected}  >1h</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneDay')}><Text style={this.state.oneDay?styles.filterSelected:styles.filterUnselected} >24h</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneWeek')}><Text style={this.state.oneWeek?styles.filterSelected:styles.filterUnselected} >7d</Text></TouchableOpacity>
               
                    <TouchableOpacity onPress={()=>this.hour('oneMonth')}><Text style={this.state.oneMonth?styles.filterSelected:styles.filterUnselected}  >30d</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('threeMonths')}><Text style={this.state.threeMonths?styles.filterSelected:styles.filterUnselected} >90d</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneYear')}><Text style={this.state.oneYear?styles.filterSelected:styles.filterUnselected} >1y</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('all')}><Text style={this.state.all?styles.filterSelected:styles.filterUnselected} >All</Text></TouchableOpacity>
                </View>
				<View style={styles.graphContainer}/>
				<View style={styles.graphTypeContainer}>
					<View style={{flexDirection:'row', justifyContent:'space-around', width:'20%'}}>
						<TouchableOpacity>
							<Image
								source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_bar_graph_unselected.png')}
								style={{ height: 20, width: 20, marginVertical: 2, }}	
							/>
						</TouchableOpacity>
						<TouchableOpacity>
								<Image
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_bar_graph_unselected.png')}
									style={{ height: 20, width: 20, marginVertical: 2 ,}}	
									resizeMode= 'contain'
								/>
						</TouchableOpacity>
						
					</View>
					<View style={{flexDirection:'row', justifyContent:'space-around', width:'20%'}}>
						<TouchableOpacity>
							<Image
								source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_zoom_in.png')}
								style={{ height: 20, width: 20, marginVertical: 2 , }}	
								resizeMode= 'contain'
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<TouchableOpacity
						style={styles.avgButtons}
					>
						<Text style={{color: '#000',fontSize: 15, fontWeight: '700'}}>
							Global Avg
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.avgButtons}
					>
						<Text style={{color: '#000',fontSize: 15, fontWeight: '700'}}>
							Eth/Usd
						</Text>
					</TouchableOpacity>
				</View>
				
				 <View style={[styles.container,{marginVertical:25}]}>
						<CoinInfo coinInfo={this.state.coinInfo}/>
				 </View>
				 
				<Text style={styles.listTextType}>Arbitrage</Text>
				<View style={styles.arbitrageContainer}>
					<Text style={{color: '#50585D'}}> Exchange</Text>
					<Text style={{color: '#50585D'}}> Vol(1d)</Text>
					<Text style={{color: '#50585D'}}> Vol(%)</Text>
					<Text style={{color: '#50585D'}}> Vol(1d)</Text>
				</View>
				<View style={styles.arbitrageContainer}>
				<View style={{flexDirection:'row',justifyContent:'space-around'}}>
				<Image
								source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
								style={{ height: 20, width: 20, marginVertical: 2 ,}}	
								resizeMode= 'contain'
							/>
					<Text style={{color: '#fff'}}> Binance</Text>
					</View>
					<Text style={{color: '#fff'}}> $43.2 m</Text>
					<Text style={{color: '#fff'}}> 13.5 %</Text>
					<Text style={{color: '#fff'}}> $0.1251</Text>
				</View>
				<View style={styles.arbitrageContainer}>
				<View style={{flexDirection:'row',justifyContent:'space-around'}}>
				<Image
								source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
								style={{ height: 20, width: 20, marginVertical: 2 ,}}	
								resizeMode= 'contain'
							/>
					<Text style={{color: '#fff'}}> Binance</Text>
					</View>
					<Text style={{color: '#fff'}}> $43.2 m</Text>
					<Text style={{color: '#fff'}}> 13.5 %</Text>
					<Text style={{color: '#fff'}}> $0.1251</Text>
				</View>
				<View style={styles.arbitrageContainer}>
				<View style={{flexDirection:'row',justifyContent:'space-around'}}>
				<Image
								source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
								style={{ height: 20, width: 20, marginVertical: 2 ,}}	
								resizeMode= 'contain'
							/>
					<Text style={{color: '#fff'}}> Binance</Text>
					</View>
					<Text style={{color: '#fff'}}> $43.2 m</Text>
					<Text style={{color: '#fff'}}> 13.5 %</Text>
					<Text style={{color: '#fff'}}> $0.1251</Text>
				</View>
				<View style={styles.arbitrageContainer}>
				<View style={{flexDirection:'row',justifyContent:'space-around'}}>
				<Image
								source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
								style={{ height: 20, width: 20, marginVertical: 2 ,}}	
								resizeMode= 'contain'
							/>
					<Text style={{color: '#fff'}}> Binance</Text>
					</View>
					<Text style={{color: '#fff'}}> $43.2 m</Text>
					<Text style={{color: '#fff'}}> 13.5 %</Text>
					<Text style={{color: '#fff'}}> $0.1251</Text>
				</View>
				
				
				
				<Text style={styles.listTextType}>More Information</Text>
				 <View style={[styles.container,{marginVertical:25, backgroundColor:'#001623'}]}>
						<InformationButtonsContainer coinInfo={this.state.coinInfo}/>
				 </View>
            </ScrollView>
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
	  justifyContent: 'space-between'
},
  graphContainer: {
    backgroundColor: '#0C3F5B',
	height:200,
},
  graphTypeContainer: {
	marginVertical:10,
	flexDirection: 'row',
	justifyContent:'space-between',
	paddingVertical: 5
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
},
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#0C3F5B',
    borderRadius:5,
    width:350,
    height:45,
    marginTop:-15,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
},
inputs:{
    height:45,
    backgroundColor: '#0C3F5B',
    color:'#fff',
    flex:1,
	borderRadius:5, 
	paddingLeft:10
},
inputIcon:{
  width:30,
  height:30,
  marginLeft:15,
  justifyContent: 'center'
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
		}
  
  
});
