import React, { Component } from 'react'
// import Header from '../../component/Header';
// import { explorer} from '../../component/SubHeaderTitles'

import FilterContainerComponent from '../components/FilterContainerComponent';

import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
//import axios from 'axios'
const tether = require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')
const ethereum = require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')
const bitcoin = require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')
const filter = require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')
const info = require('./../../assets/android/all_screens/drawable-xhdpi/icn_info.png')
const selectedgraph = require('./../../assets/android/all_screens/drawable-xhdpi/icn_line_graph_unselected.png')
const obv = require('./../../assets/android/all_screens/drawable-xhdpi/icn_obv_top.png')
// const decrease = require('../../assets/images/icn_decrease_bigger_12x8.png')
const climber = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_rsi_top.png")

class RSI extends Component{
    constructor(props) {
        super(props),
            this.state = {
                oneHour: false,
                oneDay: true,
                oneWeek: false,
                recentCoinData: [
                    { "id": "1", name: "USDT", icon: bitcoin, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "2",name: "USDT", icon: ethereum, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "3", name: "USDT", icon: ethereum, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "4", name: "USDT", icon: bitcoin, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "5", name: "USDT",icon: ethereum, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "6", name: "USDT", icon: ethereum, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "7", name: "USDT", icon: bitcoin, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "8", name: "USDT", icon: ethereum, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                    { "id": "9",name: "USDT", icon: ethereum, uptrend: "2.44$", average: "+7.56%", price: "$7866541", graph: selectedgraph },
                ]
            }
    }
    searchFunction = () => {
        console.log('inside search');
    }
    // hour = (type) => {
    //     if (type === 'oneHour') {
    //         this.setState({ oneHour: !this.state.oneHour })
    //         return true
    //     }
    //     if (type === 'oneDay') {
    //         this.setState({ oneDay: !this.state.oneDay })
    //         return true
    //     }
    //     if (type === 'oneWeek') {
    //         this.setState({ oneWeek: !this.state.oneWeek })
    //         return true
    //     }
    // }
    componentDidUpdate() {
        console.log(this.state)
    }

    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={styles.container}>
               
                    <View style={styles.blockContent}>
                        <View style={{ width: 250,padding:12, paddingBottom: 0}}>
                            <Text style={styles.obvletter}>RSI</Text>
                            <Text style={styles.obvletter}>(Relative Strength</Text>
                            <Text style={styles.obvletter}>Index)</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 7, alignItems: 'center' }}>
                                <View style={{ height: 30, width: 30, borderRadius: 30/2, marginVertical:10, backgroundColor:'#47DFFF',justifyContent:'center', alignItems: 'center' }}>
                                    <Image source={info} style={styles.info} resizeMode='contain' />
                                </View>
                                
                            </View>
							<Image source={climber} style={styles.gainersImage} resizeMode='contain' />
                        </View>
                    </View>
               
                <View style={{ marginVertical:10}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' }}>RSI</Text>
                    <Text style={styles.textprofile}>
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                    </Text>
                </View>
               
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 10 }}>

					<TouchableOpacity 
					onPress={() => { this.props.navigation.navigate('FilterScreen')}}
					style={{height: 32, width: 32, marginRight:10, alignItems:'center', borderRadius: 5, justifyContent: 'center', backgroundColor:'#47DFFF', padding:10}}>
				  <Image
					style={{ height: 24, width: 24 }}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
					/>
					</TouchableOpacity>
                    <Text style={styles.rank}>Coin</Text>
                    <Text style={styles.rank}>Signal</Text>
                    <Text style={styles.rank}>Price</Text>
                </View>
                <FlatList
                    keyExtractor={(item, index) => item.id.toString()}
                    data={this.state.recentCoinData}
                    extraData={this.state.recentCoinData}
                    renderItem={({ item }) => (
                        <View style={styles.contentContainer}>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', }}>

                                <View style={{ justifyContent: 'center', flex: .5}}>
                                    <Text style={{ color: '#fff' }}>{item.id}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image source={item.icon} style={styles.tether} resizeMode='contain' />
                                </View>
                                <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#fff', }}>{item.name}</Text>
                                <View style={{ flex: .35 }}></View>
                                <View style={{ flexDirection: 'column', flex:3 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 14, color: '#fff', fontWeight: '700' }}>{item.uptrend}</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 12, color: '#03CC79', }}>{item.average}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: .03 }}></View>
                            <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 14, color: '#fff', justifyContent: 'center' }}>{item.price}</Text>
                            <View style={{ flex: .07 }}></View>
                            <View style={{ justifyContent: 'center' }}>
                                <Image source={item.graph} style={styles.compare} resizeMode='contain' />
                            </View>
                        </View>
                    )
                    } />
            </View>
        )
    }
}
export default RSI;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 14,
        backgroundColor: '#001623',
    },
    gainersImage: {
        height: 75,
         width:80,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center',
		position: 'absolute',
		right:10,
		bottom:10
    },
	filterContainer:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginVertical:10,
		marginTop:15,
	},
    info: {
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',     
    },
    obvletter:{
        paddingLeft: 7,
        color: '#fff',
        fontSize: 16,
        fontWeight:'bold'

    },
    blockContent: {
        backgroundColor: '#00304B',
        borderRadius: 5,
        alignSelf: 'center',
     marginVertical:10
    },
    blockletter: {
        paddingLeft: 7,
        color: '#fff',
        fontSize: 13,
    },
    filterDate: {
        marginRight: 15,
        padding: 6,
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        backgroundColor: '#47DFFF',
        marginVertical: 8,
        alignSelf: 'center'
    },
    rank: {
        fontWeight: '700',
        fontSize: 12,
        color: '#818181',
        textAlign: 'center',
        marginRight: 48
    },

    compare: {
        alignSelf: 'center',
        height: 20,
        width: 25
    },
    filterStyle: {
        height: 18,
        width: 20,
        alignItems: 'center'
    },

    textprofile: {
        alignSelf: 'center',
        fontSize: 12,
        //  fontFamily: 'Regular',
        color: '#fff',
        fontWeight: '700',

    },
    candlestick: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    },
    contentContainer: {
        padding: 10,
        borderBottomWidth: .5,
        color: '#001623',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00304B'
    },
    tether: {
        height: 28,
        width: 30,
        alignSelf: 'center',
    },
    filterSelected: {
        fontSize: 14,
        padding: 5,
        paddingHorizontal: 18,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: '#00304B',
        fontWeight: '700',
        color: '#fff'
    },

});

