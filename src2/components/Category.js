import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList,Button, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

const dropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')
const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')
const icn_selected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_selected.png')
const unselected = require('./../../assets/android/all_screens/drawable-xhdpi/unselected.png')

class Category extends Component {
    constructor(props) {
        super(props),
            this.state = {
                dropdown2: false,
                selectedTab:'',     

            }
    }
    componentDidUpdate() {
        console.log(this.state)
    }

    currency = () => {
        this.setState({ currency: !this.state.currency })
    }
    platform = () => {
        this.setState({ platform: !this.state.platform })
    }
    privacy = () => {
        this.setState({ privacy: !this.state.privacy })
    }
    exchange = () => {
        this.setState({ exchange: !this.state.exchange })
    }
    stableCoin = () => {
        this.setState({ stableCoin: !this.state.stableCoin })
    }


    tabChange = (type) => {
        this.setState({ selectedTab: type })
    }


    updateParentState=()=>{
        console.log('selectedTab')
        var data= this.state.selectedTab
        this.props.updateState(data);
    }


    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
            <TouchableOpacity onPress={()=>{this.updateParentState}}>
               
                <TouchableOpacity onPress={() => this.tabChange('Currency')}>
                    <View style={styles.minBarCategory}>
                        <Text style={styles.categoryStyle}>Currency</Text>
                        {
                            this.state.selectedTab === 'Currency' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.tabChange('Platform')}>
                    <View style={styles.minBarCategory}>
                        <Text style={styles.categoryStyle}>Platform</Text>
                        {
                            this.state.selectedTab === 'Platform' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.tabChange('Privacy')}>
                    <View style={styles.minBarCategory}>
                        <Text style={styles.categoryStyle}>Privacy</Text>
                        {
                            this.state.selectedTab === 'Privacy' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.tabChange('Exchange')}>
                    <View style={styles.minBarCategory}>
                        <Text style={styles.categoryStyle}>Exchange</Text>
                        {
                            this.state.selectedTab === 'Exchange' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.tabChange('Stable Coin')}>
                    <View style={styles.minBarCategory}>
                        <Text style={styles.categoryStyle}>Stable Coin</Text>
                        {
                            this.state.selectedTab === 'Stable Coin' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                        }
                    </View>
                </TouchableOpacity>
               
                </TouchableOpacity>
        )
    }
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#03273B',
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
        backgroundColor: '#00304B',
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
        borderBottomColor:'#001623',
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
    selected: {
        height: '95%',
        marginRight: -20
    },
})