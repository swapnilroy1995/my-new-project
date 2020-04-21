import React, { Component } from 'react';
// import { FlatList } from 'react-native-gesture-handler'
import { Text, View, StyleSheet, ScrollView, SafeAreaView, FlatList, TextInput,StatusBar, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
import {connect} from 'react-redux';

import {screenStyles} from '../styleSheet/ScreenStyles';
// import FilterContainerComponent from '../components/FilterContainerComponent';

import { fetchHomeCoinsList} from './../store/actions/HomePageAction';


const search = require('./../../assets/android/all_screens/drawable-xhdpi/icn_zoom_in.png')
const notification = require('./../../assets/android/all_screens/drawable-xhdpi/icn_notification_unselected.png')
const tether = require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')
const ethereum = require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')
const bitcoin = require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')
const filter = require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')
const sideBarCircle= require('./../../assets/android/all_screens/drawable-xhdpi/icon_stop_light_green.png')

const redhealthIcon= require('./../../assets/android/all_screens/drawable-xhdpi/icon_stop_light_red.png')
const yellowhealthIcon= require('./../../assets/android/all_screens/drawable-xhdpi/icon_stop_light_yellow.png')
const greenhealthIcon = require('./../../assets/android/all_screens/drawable-xhdpi/icon_stop_light_green.png')
const increase = require('./../../assets/android/all_screens/drawable-xhdpi/icn_increase_12x8.png')
const decrease = require('./../../assets/android/all_screens/drawable-xhdpi/icn_down.png')




class HomeScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {
				modalVisible:false,
                dataSource: [
                    {
                        coin: 'USDT',
						id:"1234",
                        cointext: 'dwfewf',
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: decrease,
                        healthIcon:redhealthIcon

                    },
                    {
                        coin: 'ETH',
						id:"1235",
                        cointext: 'dwfewf',
                        icon: ethereum,
                        price: '$115,022.06',
                        dropdownImages: increase,
                        healthIcon:greenhealthIcon
                    },
                    {
                        coin: 'USDT',
						id:"1236",
                        cointext: 'dwfewf',      
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: decrease,
                        healthIcon:yellowhealthIcon
                    },
                    {
                        coin: 'BTC',
						id:"1237",
                        cointext: 'dwfewf',
                        icon: bitcoin,
                        price: '$115,022.06',
                        dropdownImages: decrease,
                        healthIcon:redhealthIcon
                    },
                    {
                        coin: 'ETH',
						id:"1238",
                        cointext: 'dwfewf',
                        icon: ethereum,
                        price: '$115,022.06',
                        dropdownImages: increase,
                        healthIcon:greenhealthIcon
                    },
                    {
                        coin: 'USDT',
                        cointext: 'dwfewf',
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: decrease,
                        healthIcon:redhealthIcon
                    },
                    {
                        coin: 'USDT',
						id:"1239",
                        cointext: 'dwfewf',
                        icon: tether,
                        price: '$115,022.06',
                        dropdownImages: increase,
                        healthIcon:greenhealthIcon
                    }
         
                ],
					tools:[
					{
						"name":"RSI",
						"color":"#03CC79"
					},
				{
					"name":"EMA",
					"color":"#F1D400"
				},
				{
					"name":"SNR",
					"color":"#FF6060"
				},
				{
					"name":"RSI",
					"color":"#F1D400"
				},
				{
					"name":"EMA",
					"color":"#FF6060"
				},
				{
					"name":"RSI",
					"color":"#03CC79"
				},
				]
            }
    }
    searchFunction=()=>{console.log('inside search');};
    
    modalVisibility=()=>{this.setState({modalVisible:!this.state.modalVisible})};
	
    componentDidMount() {
       this.props.fetchHomeCoinsList();
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    static navigationOptions = {
        header: null
      };
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={screenStyles.container}>
				{
					this.state.modalVisible?<Modal style={{flex:1, backgroundColor: 'red'}}>
					<TouchableOpacity onPress={()=>this.modalVisibility()}>
					<Text>close</Text>
					</TouchableOpacity>
					</Modal>:null
				}
                <View style={styles.searchbarContainer} >
				<TouchableOpacity 
				style={[styles.searchbar,{ width: '100%', justifyContent: 'center'}]}
				onPress={() => { this.props.navigation.navigate('Search') }}
				>
					<Text style={{color: '#536168', fontSize: 20	}}> Search more coins </Text>
				
				<Image
				style={{position: 'absolute', top:15, left: 20, height:25, width: 25}}
				source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_explorer_unselected.png')}
				/>
					</TouchableOpacity>
				
				</View>
                <View style={styles.sideContentContainer}>
				<View style={styles.sideWidth}>
                    <Image source={sideBarCircle} style={styles.sideCircle} resizeMode='contain' />
                    </View>
				<FlatList
						keyExtractor={(item)=> item.id}
						data={this.state.tools}
						horizontal={true}
						extraData={this.state.tools}
						renderItem={(itemData)=>
                    
                    <TouchableOpacity
					style={[styles.circle,{backgroundColor:itemData.item.color}]}
					//onPress={()=>this.props.navigation.navigate('Explorer')}
					>
                        <Text style={{color:'#fff',textAlign:'center'}}>{itemData.item.name}</Text>
						</TouchableOpacity>
						}
					/>
                </View>
                {/* <FilterContainerComponent navigation={this.props.navigation}/> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
				
				
                    <Text style={{ color: '#818181' }}>Coin</Text>
                    <Text style={{ color: '#818181'}}>Price</Text>
                </View>
				<FlatList
						keyExtractor={(item)=> item.id}
						data={this.state.dataSource}
						extraData={this.state.dataSource}
						renderItem={(itemData)=>
					<TouchableOpacity  
					style={[screenStyles.listCardStyles,{height: 70}]}
					onPress={()=>{
						this.props.navigation.navigate('CoinDetails');
					}} 
					>
                                        <View style={{ flexDirection: 'row', flex: 1, justifyContent:'space-around' }}>

                                            <View style={{ flex: 1, justifyContent: 'center',alignItems: 'center' }}>
                                                <Image source={notification} style={styles.notification} resizeMode='contain' />
                                            </View>
                                            <View style={{ flex: 3, justifyContent: 'center',alignItems: 'center'  }}>
                                                <Image 
												source={itemData.item.icon} 
												style={styles.coinStyles} 
												resizeMode='contain' />
                                            </View>
                                            <View>
                                                <Text style={{ fontSize:16,color:'#fff', fontWeight: 'bold'}}>{itemData.item .coin}</Text>
                                                <Text style={{ fontSize:12,color:'#fff'}}>{itemData.item .cointext}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flex: 0.5 }}></View>
                                        <View style={{ flexDirection: 'row',justifyContent: 'space-around', flex: 1}}>
                                            <View style={{ flexDirection: 'column',justifyContent:'space-between' }}>
                                                <Text style={{textAlign:'center', fontSize:14,color:'#fff', marginHorizontal:5}}>{itemData.item .price}</Text>
                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop:3}}>
                                                    <Image source={itemData.item.dropdownImages} style={styles.dropdown} resizeMode='contain' />
                                                    <Text style={{textAlign:'center', fontSize:12,color:'red',}}>0.7%</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Image source={itemData.item.healthIcon} style={{flex:1, }} resizeMode='contain' />
                                            </View>
                                        </View>
                                </TouchableOpacity>
						}
						/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03273B',
    },
    SectionStyle: {
        marginVertical: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
        backgroundColor: '#0C3F5B'
    },
    ImageStyle: {
        height: 23,
        alignItems: 'center',
        marginHorizontal: 10
    },
    contentContainer: {
        padding: 16,
        marginVertical: 0.7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#0C3F5B'
    },
    notification: {
        height: 25,
        alignSelf: 'center',
        justifyContent: 'center'
        
    },
    coinStyles: {
        height: 40,
		width:40,
        alignSelf: 'center'
    },
    filterContent:{  
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterDate: {
        padding:5,
        alignItems: 'center',
        backgroundColor:'#47DFFF',
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
    filterHour:{
       fontSize:14,
        padding:5,
        alignItems: 'center',
        borderRadius:8,
        borderWidth:1,
        marginHorizontal:5,
        backgroundColor:'#47DFFF',
        marginVertical:15
    },
    sideCircle:{
		flex:1,
        flexDirection:'row',
        justifyContent:'center',
		alignItems: 'center',
        height:18,
        width:'60%'
    },
    sideWidth:{
        backgroundColor: '#03273B',
        borderRightWidth:1,
		height:'100%',
        paddingLeft:12,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
		width:'15%'
    },
    circle:{
        justifyContent:'center',
        alignSelf:'center',
        marginHorizontal:15,
        height:60,
        width:60,
        borderRadius:(60)/2,
		marginVertical: 5
    },
    sideContentContainer:{
       // marginHorizontal:moderateScale(5),
       // padding: moderateScale(16),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#000000',
    },
    searchbarContainer: {
        marginVertical: 5,
        borderRadius: 20,
        backgroundColor: '#001623',
		flexDirection: 'row'
    },
    searchbar: {
        marginVertical: 10,
        borderRadius: 30,
		height:50,
		flex:1,
		backgroundColor: '#03273B',
		paddingLeft: 70,
		color:'#fff',
		fontSize:20
    },
   

})

const mapStateToProps=(state)=>{
    return { list:state.HomePageReducer.list}
};	
const mapDispatchToProps=(dispatch)=>{
    return {
        fetchHomeCoinsList:(page)=> dispatch(fetchHomeCoinsList()),
    }
};





export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);