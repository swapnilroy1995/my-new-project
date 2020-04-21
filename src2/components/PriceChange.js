import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

const dropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_drop_down.png')
const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_up_grey.png')
const icn_selected = require('./../../assets/android/all_screens/drawable-xhdpi/icn_selected.png')
const unselected = require('./../../assets/android/all_screens/drawable-xhdpi/unselected.png')

class PriceChange extends Component {
    constructor(props) {
        super(props),
            this.state = {
                dropdown7: false,

                selectedTab:'',

            }
    }
    componentDidUpdate() {
        console.log(this.state)
    }

    over_20 = () => {
        this.setState({ over_20: !this.state.over_20 })
    }
    over_10 = () => {
        this.setState({ over_10: !this.state.over_10 })
    }
    over_5 = () => {
        this.setState({ over_5: !this.state.over_5 })
    }
    over_0 = () => {
        this.setState({ over_0: !this.state.over_0 })
    }
    under_5 = () => {
        this.setState({ under_5: !this.state.under_5 })
    }
    under_10 = () => {
        this.setState({ under_10: !this.state.under_10 })
    }
    under_20 = () => {
        this.setState({ under_20: !this.state.under_20 })
    }
    tabChange = (type) => {
        this.setState({ selectedTab: type })
    }

    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
            <View>
            <TouchableOpacity onPress={() => this.tabChange('Over +20%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Over +20%</Text>
                    {
                        this.state.selectedTab === 'Over +20%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.tabChange('Over +10%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Over +10%</Text>
                    {
                        this.state.selectedTab === 'Over +10%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.tabChange('Over +5%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Over +5%</Text>
                    {
                        this.state.selectedTab === 'Over +5%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.tabChange('Over 0%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Over 0%</Text>
                    {
                        this.state.selectedTab === 'Over 0%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.tabChange('Under -5%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Under -5%</Text>
                    {
                        this.state.selectedTab === 'Under -5%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => this.tabChange('Under -10%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Under -10%</Text>
                    {
                        this.state.selectedTab === 'Under -10%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.tabChange('Under -20%')}>
                <View style={styles.minBarCategory}>
                    <Text style={styles.categoryStyle}>Under -20%</Text>
                    {
                        this.state.selectedTab === 'Under -20%' ? <Image source={icn_selected} style={styles.selected} resizeMode='contain' />
                            : <Image source={unselected} style={styles.selected} resizeMode='contain' />
                    }
                </View>
            </TouchableOpacity>
        </View>
        )
    }
}

export default PriceChange

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