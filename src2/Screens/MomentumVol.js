import React, { Component } from 'react'
import MomentumComponent from './../components/MomentumComponent';

import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
//import axios from 'axios'
const tether = require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')
const ethereum = require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')
const bitcoin = require('./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png')
const filter = require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')
const info = require('./../../assets/android/all_screens/drawable-xhdpi/icn_info.png')
const selectedgraph = require('./../../assets/android/all_screens/drawable-xhdpi/icn_line_graph_unselected.png')
const momentum = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_core_tools_btn_mometum_volume.png")
const increase = require('./../../assets/android/all_screens/drawable-xhdpi/icn_increase_12x8.png')
const selected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_selected.png')
const unselected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_unselected.png')


class MomentumVol extends Component {
    constructor(props) {
        super(props),
            this.state = {
                oneHour: false,
                oneDay: true,
                oneWeek: false,
                favourite: false,
                momentumData: [
                    { "id": "1", name: "USDT", coinImage: 1, icon: bitcoin, volumeCharge:"20.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "2", name: "USDT", coinImage: 2, icon: ethereum,volumeCharge:"20.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "3", name: "USDT", coinImage: 3, icon: ethereum,volumeCharge:"20.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "4", name: "USDT",coinImage: 4, icon: bitcoin,volumeCharge:"70.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "5", name: "USDT",coinImage: 5, icon: ethereum,volumeCharge:"80.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "6", name: "USDT", coinImage: 6,icon: ethereum,volumeCharge:"20.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "7", name: "USDT", coinImage: 7,icon: bitcoin,volumeCharge:"4.0.1 M",dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "8", name: "USDT", coinImage: 8,icon: ethereum,volumeCharge:"20.1 M", dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                    { "id": "9", name: "USDT", coinImage: 9,icon: ethereum, volumeCharge:"20.1 M",dropdownImage: increase, average: "+23.89%", price: "$7,8665.41", graph: unselected, imagegraph: selected },
                ]
            }
    }
    searchFunction = () => {
        console.log('inside search');
    }

    hour = (type) => {
        if (type === 'oneHour') {
            this.setState({ oneHour: !this.state.oneHour })
            return true
        }
        if (type === 'oneDay') {
            this.setState({ oneDay: !this.state.oneDay })
            return true
        }
        if (type === 'oneWeek') {
            this.setState({ oneWeek: !this.state.oneWeek })
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
                <View style={styles.blockContent}>
                    <View style={{ width: 245, padding: 12, }}>
                        <Text style={styles.obvletter}>Momentum</Text>
                        <Text style={styles.obvletter}>Volume</Text>
                       
                        <View style={{ flexDirection: 'row',paddingLeft: 7, }}>
                            {/* <View style={{ height: 30, width: 30, borderRadius: 30 / 2, marginTop: 15, backgroundColor: '#47DFFF', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={info} style={styles.info} resizeMode='contain' />
                            </View> */}
                            <Image source={momentum} style={styles.gainersImage} resizeMode='contain' />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#fff' ,marginVertical:5}}>Momentum Volume</Text>
                    <Text style={styles.textprofile}>
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                        Lorem ipsum simply dummy text of the simply Lorem ipsum simply dummy text of the simply
                    </Text>
                </View>
                <View style={styles.filterPropsContainer} >
				<View style={styles.filterContainer}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('FilterScreen') }}
                  style={{height: 30, width: 30,alignItems:'center', justifyContent: 'center', backgroundColor:'#47DFFF', borderRadius:5}}>
				  <Image
					style={{ height: 24, width: 24, marginVertical: 2 , backgroundColor:'#47DFFF'}}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
					/>
					</TouchableOpacity>
					<View style={styles.filterIconsContainer}>
                    <TouchableOpacity onPress={()=>this.hour('oneHour')}><Text style={this.state.oneHour?styles.filterSelected:styles.filterUnselected}>30d</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneDay')}><Text style={this.state.oneDay?styles.filterSelected:styles.filterUnselected}>90d</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.hour('oneWeek')}><Text style={this.state.oneWeek?styles.filterSelected:styles.filterUnselected}>1y</Text></TouchableOpacity>
                    </View>
					</View>
					</View>
				
                <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-around',marginVertical:5 ,marginHorizontal:-10}}>

                    <Text style={styles.rank}>Coin</Text>
                   <View style={{flex:.1}}></View>
                    <View style={{flexDirection:'column'}}>
                    <Text style={styles.rank}>Volume</Text>
                    <Text style={styles.rank}>%Change</Text>

                    </View>
                  
                    <Text style={styles.rank}>Price</Text>
                    <Image source={unselected} style={styles.filterStyle} resizeMode='contain' />
                </View>
                    
				<FlatList
						keyExtractor={(item,index)=> item.id.toString()}
						data={this.state.momentumData}
						extraData={this.state.momentumData}
						initialNumToRender={10}
						renderItem={(itemData,key)=>
							<MomentumComponent itemData={itemData} />
						}
						/>
						
            </View>
        )
    }
}
export default MomentumVol;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: '#001623',
    },
    gainersImage: {
        height: 75,
        width: 105,
        marginLeft:100,
        marginTop: -10,
        marginVertical: 8,
      //  justifyContent: 'flex-end',
        alignSelf: 'center',
    },
    info: {
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    obvletter: {
        paddingLeft: 7,
        color: '#fff',
        fontSize: 17,
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
    rank: {
        fontWeight: '700',
        fontSize: 12,
        color: '#818181',
        textAlign: 'center',
    },

    compare: {
        alignSelf: 'center',
        height: 20,
        width: 25
    },
    filterStyle: {
        height: 22,
        width: 22,
        alignItems: 'center'
    },

    textprofile: {
        alignSelf: 'center',
        fontSize: 12,
        //  fontFamily: 'Regular',
        color: '#fff',
        fontWeight: '700',

    },
    dropdown: {
        height: 5,
        alignSelf: 'center',
        marginHorizontal: -15
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
         backgroundColor:'#001623',
         fontWeight: '700',
         color:'#fff'
         } ,
    filterPropsContainer: {
        borderRadius: 10,
        backgroundColor: '#001623',
		flexDirection:'row',
		paddingRight:0
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
	
});

