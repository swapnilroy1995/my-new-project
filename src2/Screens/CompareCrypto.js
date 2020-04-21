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
import CoinCompareInfo from './../components/CoinCompareInfo';
import InformationButtonsContainer from './../components/InformationButtonsContainer';

export default class CompareCrypto extends Component {
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
		selectedTab:'Price',
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
      <ScrollView style={styles.contentContainer} contentContainerStyle={{padding:10}}>
	  <View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<View
						style={styles.compareStyle}
					><Image
									style={{ height: 25, width: 25, marginVertical: 2 }}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')}
										/>
						<Text style={{color: '#fff',fontSize: 15, fontWeight: '700'}}>
							BTC
						</Text>
					</View>
					<Text style={{color: '#fff',fontSize: 15, fontWeight: '700', alignSelf: 'center'}}>
							vs
						</Text>
					<View
						style={styles.compareStyle}
					>
					<Image
									style={{ height: 25, width: 25, marginVertical: 2 ,}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
										/>
						<Text style={{color: '#fff',fontSize: 15, fontWeight: '700'}}>
							USDT
						</Text>
					</View>
				</View>
        
						<View style={styles.arbitrageContainer}>
								<TouchableOpacity onPress={()=>this.tabChange('Price')}>
									<Text style={{color: '#50585D'}}> Price</Text>
										{
										this.state.selectedTab==='Price'?<View style={{borderRadius:2,height: 2,backgroundColor: '#47DEFE', marginTop:5}}/>:null
										}
								</TouchableOpacity>
							<TouchableOpacity onPress={()=>this.tabChange('MarketCap')}>
								<Text style={{color: '#50585D'}}>Market Cap</Text>
										{
										this.state.selectedTab==='MarketCap'?<View style={{borderRadius:2,height: 2,backgroundColor: '#47DEFE', marginTop:5}}/>:null
										}
							</TouchableOpacity>
							<TouchableOpacity onPress={()=>this.tabChange('Volume')}>
								<Text style={{color: '#50585D'}}> Volume</Text>
										{
										this.state.selectedTab==='Volume'?<View style={{borderRadius:2,height: 2,backgroundColor: '#47DEFE', marginTop:5}}/>:null
										}
							</TouchableOpacity>
							<TouchableOpacity onPress={()=>this.tabChange('CircSupply')}>
								<Text style={{color: '#50585D'}}> Circ. Supply %</Text>
										{
										this.state.selectedTab==='CircSupply'?<View style={{borderRadius:2,height: 2,backgroundColor: '#47DEFE', marginTop:5}}/>:null
										}
							</TouchableOpacity>
							
					
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
				<View style={{flexDirection:'row', width:'100%', justifyContent: 'space-around', marginVertical: 15 }}>
                    <TouchableOpacity onPress={()=>this.hour('oneHour')}><Text style={this.state.oneHour?styles.filterSelected:styles.filterUnselected}  >1h</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneDay')}><Text style={this.state.oneDay?styles.filterSelected:styles.filterUnselected} >1d</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneWeek')}><Text style={this.state.oneWeek?styles.filterSelected:styles.filterUnselected} >1w </Text></TouchableOpacity>
               <View style={{width:70}}/>
                   <View>
						<TouchableOpacity onPress={()=>this.hour('oneMonth')} style={{flexDirection: 'row', alignItems: 'center'}}>
						<Image
									style={{ height: 25, width: 25, marginVertical: 2 }}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')}
										/>
							<Text style={styles.filterUnselected}  >
								BTC
							</Text>
						</TouchableOpacity>
                    </View>
					<View style={{width:30}}/>
                   <View>
						<TouchableOpacity onPress={()=>this.hour('oneMonth')} style={{flexDirection: 'row', alignItems: 'center'}}>
						<Image
									style={{ height: 25, width: 25, marginVertical: 2 ,}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
										/>
							<Text style={styles.filterUnselected}  >
								USDT
							</Text>
						</TouchableOpacity>
                    </View>
					</View>
				
				 <View style={[styles.container,{marginVertical:25}]}>
						<CoinCompareInfo coinInfo={this.state.coinInfo}/>
				 </View>
				 <View style={{flexDirection: 'row', justifyContent: 'center'}}>
					<TouchableOpacity
						style={styles.avgButtons}
						onPress={()=>this.props.navigation.goBack()}
					>
						<Text style={{color: '#000',fontSize: 15, fontWeight: '700'}}>
							Clear Compare
						</Text>
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
		}
  
  
});
