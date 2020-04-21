import React, { Component } from 'react'
// import Header from '../../component/Header';
// import { accounts } from '../../component/SubHeaderTitles'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image, TextComponent } from 'react-native'

const crypto = require("./../../assets/android/all_screens/drawable-xxxhdpi/bg_cryptonmics.png")

const updropdown = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_Arrow_blue.png")
const cryptoname = require("./../../assets/android/all_screens/drawable-xxxhdpi/Cryptonomics.png")
const gainers = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_gainers_and_losers.png")
const volume = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_core_tools_btn_volume.png")
const volatility = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_core_tools_btn_Volatility_coaster.png")
const momentum = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_core_tools_btn_mometum_volume.png")
const climber = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_Cap_climber_top.png")
const forward = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_forward_white.png")
const cryptonomics = require("./../../assets/android/all_screens/drawable-xxxhdpi/Cryptonomics_Logo_top_left.png")

const arbitrage = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_arbitrage.png")

const rsi = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_rsi_top.png")
const macd = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_macd_top.png")
const sma = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_SMA_top.png")
const ema = require("./../../assets/android/all_screens/drawable-xxxhdpi/icn_ema_top.png")


class TechnicalAnalysis extends Component {
    constructor(props) {
        super(props),
            this.state = {
                gainers: 'Gainers Losers',
                //image:gainers,

                clip: 'Clip Climbers',
                // image:gainers,

                momentum: 'Momentum Volume',
                image: '',

                Volume: 'Gainers & Losers',
                image: '',
                volatility: 'Gainers & Losers',
                image: '',

                arbitrage: 'Arbitrage',
                image: '',


            }
    }
    static navigationOptions = {
        headerStyle: {
            backgroundColor: "#16a085",
            elevation: null
        },
        header: null
    };

    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
            <SafeAreaView>
                <ScrollView contentContainerStyle={{ backgroundColor: '#001623'}}>
                    <View style={styles.container}>
                        <TouchableOpacity
								onPress={()=>this.props.navigation.navigate('Summary')}
						>
                            <Image source={crypto} style={{ width: '100%', height: 140 }} />
                            <View style={{ paddingLeft: 15 }}>
                                <Image source={cryptoname} style={{ width: '45%', height: 50, marginVertical: -110, resizeMode: 'center', }} />
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignContent: 'space-between' }}>
                                <Text style={{ alignSelf: 'center', marginTop: '-32%', color: '#fff', paddingLeft: 15 }}>Cryptonomics Summary</Text>
                                <Image source={updropdown} style={styles.arrow} resizeMode='contain' />
                            </View>
                        </TouchableOpacity>

                        <Text style={{ color: '#fff' }}>Core Tools</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Gainers_Losers') }}> 
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 105, paddingTop: 7 }}>
                                        <Text style={styles.blockletter}>Gainers &</Text>
                                        <Text style={styles.blockletter}>Losers</Text>
                                        <Image source={gainers} style={styles.gainersImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
							onPress={()=>this.props.navigation.navigate('CapClimber')}
							>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 105, paddingTop: 7, }}>
                                        <Text style={styles.blockletter}>Clip</Text>
                                        <Text style={styles.blockletter}>Climber</Text>
                                        <Image source={climber} style={styles.gainersImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
							onPress={()=>this.props.navigation.navigate('MomentumVol')}
							>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 105, paddingTop: 7, }}>
                                        <Text style={styles.blockletter}>Momentum</Text>
                                        <Text style={styles.blockletter}>Volume</Text>
                                        <Image source={momentum} style={styles.gainersImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
						
                            <TouchableOpacity
							onPress={()=>this.props.navigation.navigate('VolumeClimber')}
							>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 105, paddingTop: 7 }}>
                                        <Text style={styles.blockletter}>Volume</Text>
                                        <Text style={styles.blockletter}>Climber</Text>
                                        <Image source={volume} style={styles.gainersImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
							onPress={()=>this.props.navigation.navigate('VolatilityCoaster')}
							>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 105, paddingTop: 7, }}>
                                        <Text style={styles.blockletter}>volatility</Text>
                                        <Text style={styles.blockletter}>Coaster</Text>
                                        <Image source={volatility} style={styles.gainersImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
									onPress={()=>this.props.navigation.navigate('Arbitrage')}
									
							>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 105, paddingTop: 7, }}>
                                        <Text style={styles.blockletter}>Arbitrage</Text>
                                        <Image source={arbitrage} style={styles.arbitrageImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <View style={styles.searchbarContainer}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Image source={cryptonomics} style={styles.cryptologo} resizeMode='contain' />
                                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: '700' }}>Upgrade For Access</Text>
                                </View>
                                <Image source={forward} style={styles.forward} resizeMode='contain' />
                            </View>
                        </TouchableOpacity>
                        <Text style={{ color: '#fff' }}>Pro Tools</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('RSI')}>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 158, paddingTop: 7 }}>
                                        <Text style={styles.problockletter}>RSI</Text>
                                        <Image source={rsi} style={styles.proImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 158, paddingTop: 7 }}>
                                        <Text style={styles.problockletter}>MACD</Text>
                                        <Image source={macd} style={styles.proImagemcd} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <TouchableOpacity>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 158, paddingTop: 7 }}>
                                        <Text style={styles.problockletter}>SMA</Text>
                                        <Image source={sma} style={styles.proImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 158, paddingTop: 7 }}>
                                        <Text style={styles.problockletter}>EMA</Text>
                                        <Image source={ema} style={styles.proImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                            <TouchableOpacity >
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 158, paddingTop: 7 }}>
                                        <Text style={styles.problockletter}>DEMA</Text>
                                        <Image source={sma} style={styles.proImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.blockContent}>
                                    <View style={{ flexDirection: 'column', width: 158, paddingTop: 7 }}>
                                        <Text style={styles.problockletter}>EMA</Text>
                                        <Image source={ema} style={styles.proImage} resizeMode='contain' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default TechnicalAnalysis

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
        backgroundColor: '#001623'
    },
    contentContainer: {
        borderRadius: 55,
    },
    arrow: {
        height: 18,
        marginTop: '-20%',
    },
    crypto: {
        height: 255,
        width: '100%',
    },
    blockContent: {
        backgroundColor: '#00304B',
        borderRadius: 5,
        alignSelf: 'center'
    },
    blockletter: {
        paddingLeft: 7,
        color: '#fff',
        fontSize: 13,
    },
    searchbarContainer: {
        marginVertical: 15,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#656565',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cryptologo: {
        height: 20,
        width: '18%'
    },
    forward: {
        height: 15
    },
    gainersImage: {
        height: 35,
        marginRight: -35,
        marginBottom: 10,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    arbitrageImage: {
        height: 38,
        marginRight: -45,
        marginTop: 25,
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    problockletter: {
        paddingLeft: 7,
        color: '#fff',
        fontSize: 15,
        fontWeight: '700'
    },
    proImage: {
        height: 60,
        marginRight: -65,
        marginVertical: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -15

    },
    proImagemcd: {
        height: 50,
        marginRight: -18,
        marginVertical: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -5
    }
})