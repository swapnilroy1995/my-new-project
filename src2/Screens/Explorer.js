import React, { Component } from 'react';

import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

const search = require('./../../assets/android/all_screens/drawable-xhdpi/icn_zoom_out.png')
const ethereum = require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')
const bitcoin = require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')
const filter = require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')
const compare = require('./../../assets/android/all_screens/drawable-xhdpi/icn_compare.png')
const dropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')
const increase = require('./../../assets/android/all_screens/drawable-xhdpi/icn_increase_12x8.png')
//const decrease = require('./../../assets/android/all_screens/drawable-xhdpi/icn_decrease_bigger_12x8.png')


class Explorer extends Component {
    constructor(props) {
        super(props),
            this.state = {
                oneHour:false,
	         	oneDay:true,
	        	oneWeek:false,
                recentCoinData: [
                    { "id": "1", name: "BTC", icon: bitcoin, marketcap: "137.4B", marketvol: "12.7B", price: "$7866541",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "2", name: "ETH", icon: ethereum,  marketcap: "137.4B", marketvol: "12.7B", price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "3", name: "USDT", icon: ethereum,  marketcap: "137.4B", marketvol: "12.7B", price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "4", name: "BTC", icon: bitcoin,  marketcap: "137.4B", marketvol: "12.7B", price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "5", name: "USDT", icon: ethereum,  marketcap: "137.4B", marketvol: "12.7B", price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "6", name: "USDT", icon: ethereum,  marketcap: "137.4B", marketvol: "12.7B", price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "7", name: "USDT", icon: bitcoin, marketcap: "137.4B", marketvol: "12.7B",price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "8", name: "USDT", icon: ethereum,  marketcap: "137.4B", marketvol: "12.7B",price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                    { "id": "9", name: "BTC", icon: ethereum,  marketcap: "137.4B", marketvol: "12.7B", price: "$786654",pricePercent:'.7%',dropdownImage:increase, compareimage: compare },
                ]
            }
    }
searchFunction=()=>{console.log('inside search');
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
    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={styles.container}>
                <View style={styles.headerComponent}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#fff', fontSize: 12, marginVertical: 10, fontWeight: '700' }}>Market Cap</Text>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Regular', fontWeight: "700" }}>$ 243.6 B</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image source={increase} style={styles.dropdown} resizeMode='contain' />
                            <Text style={{ textAlign: 'center', fontFamily: 'Regular', fontSize: 12, color: '#FF6060', }}>0.7%</Text>
                        </View>
                    </View>
                    <View style={{ borderStyle: 'dashed', height: 90, borderWidth: 1, borderRadius: 1, borderColor: '#fff' }}>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#fff', fontSize: 12, marginVertical: 10, fontWeight: "700" }}>24 Hr Volume</Text>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Regular', fontWeight: "700" }}>$ 259.2 B</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image source={increase} style={styles.dropdown} resizeMode='contain' />
                            <Text style={{ textAlign: 'center', fontFamily: 'Regular', fontSize: 12, color: '#03CC79', fontWeight: '700' }}>+3.7%</Text>
                        </View>
                    </View>
                    <View style={{ borderStyle: 'dashed', height: 90, borderWidth: 1, borderRadius: 1, borderColor: '#fff' }}>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ color: '#fff', fontSize: 12, marginVertical: 10, fontWeight: '700' }}>BTC Dominance</Text>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Regular', fontWeight: "700", textAlign: 'center' }}>45%</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image source={increase} style={styles.dropdown} resizeMode='contain' />
                            <Text style={{ textAlign: 'center', fontFamily: 'Regular', fontSize:12, color: '#03CC79', fontWeight: '700' }}>0.7%</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.filterContent}>
                    <View style={styles.filterDate}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('FilterScreen') }}>
                        <Image source={filter} style={styles.filterStyle} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.filterDate}>
                        <TouchableOpacity>
                        <Image source={compare} style={styles.filterStyle} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{width:30}}/>
                   
                    <View style={styles.hourContent}>
                    <TouchableOpacity onPress={()=>this.hour('oneHour')}><Text style={this.state.oneHour?styles.filterSelected:styles.filterUnselected}  >1h</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneDay')}><Text style={this.state.oneDay?styles.filterSelected:styles.filterUnselected}>1D</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneWeek')}><Text style={this.state.oneWeek?styles.filterSelected:styles.filterUnselected} >1W</Text></TouchableOpacity>
                    </View>
                  
                </View>
                <View style={{ flexDirection: 'row', justifyContent:'space-between',alignItems:'center', marginVertical:8,}}>

                    <View style={{ flexDirection: 'row'}}>
                        <Image source={dropdown} style={styles.rankdropdown} resizeMode='contain' />
                        <Text style={styles.rank1}>Rank</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between',alignItems:'center',}}>
                    <Text style={styles.rank}>M.Cap</Text>
                    <Text style={styles.rank}>Vol</Text>
                    
                    <View style={{flexDirection:'column',marginVertical:-14}}>
                    <Text style={styles.rank}>Price</Text>
                    <Text style={styles.rank}>%</Text>
                    </View>
                  
                    <Image source={compare} style={styles.compare} resizeMode='contain' />
                    </View>
                </View>
                <FlatList
                    keyExtractor={(item, index) => item.id.toString()}
                    data={this.state.recentCoinData}
                    extraData={this.state.recentCoinData}
                    renderItem={({ item }) => (
                        <View style={styles.contentContainer}>
                            <View style={{ flexDirection: 'row', flex: 2, justifyContent:'space-between' }}>

                                <View style={{ justifyContent: 'center',flex:3 }}>
                                    <Text style={{ color: '#fff' }}>{item.id}</Text>
                                </View>
                                <View style={{ flex: 4}}>
                                    <Image source={item.icon} style={styles.tether} resizeMode='contain' />
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <Text style={{ fontFamily: 'Regular',fontWeight:'bold', fontSize:14, color: '#fff', textAlign: 'center' }}>{item.name}</Text>
                                    <View style={{ flex: .2}}></View>
                                    <Text style={{ fontFamily: 'Regular', fontSize:12,fontWeight:'700', color: '#fff', textAlign: 'center' }}>{item.marketcap}</Text>
                                    <View style={{ flex: .2}}></View>
                                    <Text style={{ fontFamily: 'Regular', fontSize:12, color: '#fff', textAlign: 'center' }}>{item.marketvol}</Text>
                                </View>
                            </View>
                            <View style={{ flex: .35}}></View>
                           <View style={{justifyContent:'space-evenly',flexDirection:'row',flex:1.1}}>
                            <View style={{ flexDirection: 'row',}}>
                               
                                <View style={{ flexDirection: 'column'}}>
                                    
                                    <Text style={{ textAlign: 'center',fontFamily: 'Regular', fontSize:14, color: '#fff' }}>{item.price}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Image source={item.dropdownImage} style={styles.dropdown} resizeMode='contain' />
                                        <Text style={{ textAlign: 'center', fontFamily: 'Regular', fontSize:12, color: '#FF6060', }}>{item.pricePercent}</Text>
                                    </View>
                                </View>
                                </View>
                                
                                <View style={{justifyContent:'center'}}>
                                    <Image source={item.compareimage} style={styles.compare} resizeMode='contain' />
                                
                            </View>
                            </View>
                        </View>
                    )
                    } />
            </View>

        )
    }
}
export default Explorer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'#001623'
    },
    headerComponent: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0C3F5B',
        justifyContent: 'space-between',
    },
    filterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterDate: {
        marginHorizontal:5,
        justifyContent:'center',
        padding: 7,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#47DFFF',
        marginVertical: 25,
        alignSelf:'center',
		width:30,
		height:30
		},
    rank:{    
    fontWeight:'700',
     fontSize:12,
     color: '#818181',
     textAlign:'center',
     marginHorizontal:12
    },
    rank1:{
     fontWeight:'700',
     fontSize:12,
     color: '#818181',
     textAlign:'center',
     marginHorizontal:-18
    },
    compare: {
        height: 20,
    },
    filterStyle: {
        height: 18,
        alignItems: 'flex-start',
    },
    dropdown: {
        height: 5,
        alignSelf: 'center',
        marginHorizontal:-15
    },
    rankdropdown:{
       height: 7,
       alignSelf:'center',
       //marginHorizontal:-28
    },
    hourContent:{
    flexDirection:'row',
    marginVertical:28,
    justifyContent:"space-between"
    },
    filterHour: {
        fontSize: 13,
        padding:5,
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        marginHorizontal: 5,
        backgroundColor: '#fff',
        fontWeight:'700'
    },
    contentContainer: {
        padding: 12,
        marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor:'#00304B'
    },
    tether: {
        height: 30,
        alignSelf: 'center',
        marginHorizontal: 15
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
 
