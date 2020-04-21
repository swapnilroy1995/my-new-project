import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

const dropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')
const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')
const icn_selected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_selected.png')
const unselected = require('./../../assets/android/all_screens/drawable-xhdpi/unselected.png')

class Consensus extends Component {
    constructor(props) {
        super(props),
            this.state = {
                dropdown3: false,
                selectedTab: 'Proof of Work',
            }
    }
    componentDidUpdate() {
        console.log(this.state)
    }

    proofwork = () => {
        this.setState({ under_20: !this.state.under_20 })
    }
    proofofstake = () => {
        this.setState({ under_20: !this.state.under_20 })
    }
    other = () => {
        this.setState({ under_20: !this.state.under_20 })
    }




    tabChange = (type) => {
        this.setState({ selectedTab: type })
    }


    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
           
                <View>
                    <TouchableOpacity onPress={() => this.tabChange('Proof of Work')}>
                        <View style={styles.minBarCategory}>
                            <Text style={styles.categoryStyle}>Proof of Work</Text>
                            {
                                this.state.selectedTab === 'Proof of Work' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                    : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.tabChange('Proof of Stake')}>
                        <View style={styles.minBarCategory}>
                            <Text style={styles.categoryStyle}>Proof of Stake</Text>
                            {
                                this.state.selectedTab === 'Proof of Stake' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                    : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.tabChange('Other')}>
                        <View style={styles.minBarCategory}>
                            <Text style={styles.categoryStyle}>Other (i.e: Proof of capacity,etc)</Text>
                            {
                                this.state.selectedTab === 'Other' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                                    : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                            }
                        </View>
                    </TouchableOpacity>
                </View>

        )
    }
}

export default Consensus

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