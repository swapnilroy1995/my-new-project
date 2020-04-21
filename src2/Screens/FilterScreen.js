import React, { Component } from 'react'
import Category from './../components/Category'
import Consensus from './../components/Consensus'
import Exchanges from './../components/Exchanges'
import PriceChange from './../components/PriceChange'
import VolumeChange from './../components/VolumeChange'
import MarketCap from './../components/MarketCap'
import Volume from './../components/Volume'
import Price from './../components/Price'

import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

const dropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')
const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')
const icn_selected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_selected.png')
const unselected = require('./../../assets/android/all_screens/drawable-xhdpi/unselected.png')
const search = require('./../../assets/android/all_screens/drawable-xhdpi/icn_zoom_out.png')



class FilterScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {

                selectedTab: true,
                dropdown1: false,
                category:'',
               // marketCap: 'Market Cap',
                capvalue: '500K to $1B',
                dropdown2: false,
                dropdown3: false,
                dropdown4: false,
                dropdown5: false,
                dropdown6: false,
                dropdown7: false,
                dropdown8: false,
            }
    }


componentDidUpdate() {
        console.log(this.state)
    }

    dropdown1 = () => {
        this.setState({ dropdown1: !this.state.dropdown1 })
    }
    dropdown2 = () => {
        this.setState({ dropdown2: !this.state.dropdown2 })
    }
    dropdown3 = () => {
        this.setState({ dropdown3: !this.state.dropdown3 })
    }
    dropdown4 = () => {
        this.setState({ dropdown4: !this.state.dropdown4 })
    }
    dropdown5 = () => {
        this.setState({ dropdown5: !this.state.dropdown5 })
    }
    dropdown6 = () => {
        this.setState({ dropdown6: !this.state.dropdown6 })
    }
    dropdown7 = () => {
        this.setState({ dropdown7: !this.state.dropdown7 })
    }
    dropdown8 = () => {
        this.setState({ dropdown8: !this.state.dropdown8 })
    }

    tabChange = (type) => {
        this.setState({ selectedTab: type })
    }
    searchFunction = () => {

    }
    updateState=()=>{
        this.setState(this.state.category);
    }
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <ScrollView style={styles.scrollviewContainer} contentContainerStyle={{padding:10}}>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown1() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>MarketCap</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Text style={styles.capValue}></Text>
                                    {/* <Category updateParentState={()=>{ this.updateState()}}/> */}
                                       
                                    {
                                        this.state.dropdown1 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }
                                </View>

                            </View>
                        </Touchable>
                        {this.state.dropdown1 &&
                        <View> 
                            <MarketCap/>
                        </View>
                        }
                    </View>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown2() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>Category</Text>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.capValue}>{}</Text>
                  
                                    {
                                        this.state.dropdown2 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }
                                </View>
                            </View>
                        </Touchable>
                        {this.state.dropdown2 &&
                            <View>
                               <Category updateParentState={()=>{this.updateState()}}/> 

                            </View>
                        }
                    </View>

                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown3() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>Consensus</Text>

                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.capValue}>Proof of Work</Text>
                                    {
                                        this.state.dropdown3 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }

                                </View>
                            </View>
                        </Touchable>
                        {this.state.dropdown3 &&
                            <View>
                                <Consensus />

                            </View>
                        }
                    </View>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown4() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>Exchanges</Text>

                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.capValue}>Binance</Text>
                                    {
                                        this.state.dropdown4 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }
                                </View>
                            </View>
                        </Touchable>
                        {this.state.dropdown4 &&
                            <View>
                                <View style={styles.SectionStyle}>
                                    <Image source={search} style={styles.ImageStyle} resizeMode='contain' />
                                    <TextInput style={{ flex: 1, fontSize: 14, color: '#818181' }} placeholder="Search more Exchanges" placeholderTextColor='#818181'
                                        underlineColorAndroid="transparent" onChange={() => { this.searchFunction() }} />
                                </View>
                                <Exchanges />
                            </View>
                        }
                    </View>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown5() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>Price</Text>

                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.capValue}>500k to $1B</Text>
                                    {
                                        this.state.dropdown5 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }

                                </View>

                            </View>
                        </Touchable>

                        {this.state.dropdown5 &&
                            <View>
                                <Price/>
                            </View>
                        }
                    </View>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown6() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>Volume</Text>

                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.capValue}>500k to $1B</Text>
                                    {
                                        this.state.dropdown6 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }
                                </View>

                            </View>
                        </Touchable>

                        {this.state.dropdown6 &&
                            <View>
                            <Volume/>
                            </View>
                        }
                    </View>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown7() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>% Price Change</Text>

                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.capValue}>Over +5</Text>
                                    {
                                        this.state.dropdown7 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }
                                </View>
                            </View>
                        </Touchable>
                        {this.state.dropdown7 &&
                            <View>
                                <PriceChange />
                            </View>
                        }
                    </View>
                    <View style={styles.mainContainer}>
                        <Touchable onPress={() => { this.dropdown8() }}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.contentBar}>% Volume Change</Text>

                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={styles.capValue}>{}</Text>
                                    {
                                        this.state.dropdown8 === true ?
                                            <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                                            : <Image source={dropdown} style={styles.dropdown} resizeMode='contain' />
                                    }
                                </View>


                            </View>
                        </Touchable>
                        {this.state.dropdown8 &&
                            <View>
                                <VolumeChange />

                            </View>
                        }
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Touchable>
                            <View style={styles.SubmitButtonStyle} >
                                <Text style={styles.TextStyle}>Clear</Text>
                            </View>
                        </Touchable>
                        <Touchable>
                            <View style={styles.SubmitButtonStyle} >
                                <Text style={styles.TextStyle}>Apply</Text>
                            </View>
                        </Touchable>
                    </View>
                </View>
            </ScrollView>

        )
    }
}
export default FilterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor:'#001623',
    },
    mainContainer: {
        flexDirection: 'column',
        borderRadius: 16,
        backgroundColor: '#00304B',
        marginVertical: 3
    },
    contentContainer: {
        // marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#00304B'
    },
    contentBar: {
        padding: 15,
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Regular',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    capValue: {
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#818181',
        marginHorizontal: -15
    },
  scrollviewContainer: {
	  flex:1,
    backgroundColor: '#001623',
},
    dropdown: {
        height: 8.5,
        alignSelf: 'center',
    },
    minBar: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    minBarCategory: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-between',
        marginVertical: .5,
        borderBottomWidth: 1.5,
        borderBottomColor: '#00304B',
        borderRadius: 2
    },
    categoryStyle: {
        color: "#818181",
        fontSize: 16
    },
    minContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: .5,
        borderRadius: 5
    },
    minContentContainer: {
        padding: 10,
        backgroundColor: '#00304B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 3,
        borderRadius: 5
    },
    minContent1: {
        flex: 1,
        backgroundColor: '#4FDFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5
    },
    SectionStyle: {
        marginHorizontal: 16,
        marginVertical: 10,
        marginTop: -5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'#001623',
    },
    ImageStyle: {
        height: 45,
        alignItems: 'center',
        marginHorizontal: 10
    },
    selected: {
        height: '95%',
        marginRight: -20
    },
    SubmitButtonStyle: {
        marginVertical: 37,
        justifyContent: 'center',
        height: 40,
        width: '40%',
        backgroundColor: '#47DFFF',
        borderWidth: 1,
        borderColor: '#0C3F58',
        borderRadius: 5
    },
    TextStyle: {
        color: '#0C3F58',
        fontSize: 15,
        textAlign: 'center'
    },
})