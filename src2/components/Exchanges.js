import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

const dropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')
const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')
const icn_selected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_selected.png')
const unselected = require('./../../assets/android/all_screens/drawable-xhdpi/unselected.png')

class Exchanges extends Component {
    constructor(props) {
        super(props),
            this.state = {
                dropdown4: false,
                selectedTab: '',
            }
    }
    componentDidUpdate() {
        console.log(this.state)
    }

    bitBay = () => {
        this.setState({ bitBay: !this.state.bitBay })
    }
    bit = () => {
        this.setState({ bit: !this.state.bit })
    }
    binance = () => {
        this.setState({ binance: !this.state.binance })
    }

    tabChange = (type) => {
        this.setState({ selectedTab: type })
    }

    
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
<View>
                    <TouchableOpacity onPress={() => this.tabChange('BitBay')}>
                        <View style={styles.minBarCategory}>
                            <Text style={styles.categoryStyle}>BitBay</Text>
                            {
                                this.state.selectedTab === 'BitBay' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                    : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.tabChange('Bit-Z')}>
                        <View style={styles.minBarCategory}>
                            <Text style={styles.categoryStyle}>Bit-Z</Text>
                            {
                                this.state.selectedTab === 'Bit-Z' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                    : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.tabChange('Binance')}>
                        <View style={styles.minBarCategory}>
                            <Text style={styles.categoryStyle}>Binance</Text>
                            {
                                this.state.selectedTab === 'Binance' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                    : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
           
        )
    }
}

export default Exchanges

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#03273B',
    },
    mainContainer: {
        flexDirection: 'column',
        borderRadius: 16,
        backgroundColor: '#0C3F5B',
        marginVertical: 3
    },
    contentContainer: {
        // marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#0C3F5B',
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
        backgroundColor: '#03273B',
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
    selected: {
        height: '95%',
        marginRight: -20
    },
})