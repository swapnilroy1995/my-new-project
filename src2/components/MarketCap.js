import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

class MarketCap extends Component {
    constructor(props) {
        super(props),
            this.state = {
                dropdown1: false,

                min: '',
                max: ''


            }
    }
    componentDidUpdate() {
        console.log(this.state)
    }

    tabChange = (type) => {
        this.setState({ selectedTab: type })
    }

    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        let textStyle = {
			paddingHorizontal: 12,
			fontSize:14,
			fontFamily: 'Regular',
		};
        return (
                <View style={styles.minBar}>
                    <View style={styles.minContent}>
                        <View style={styles.minContentContainer}>
                        <TextInput placeholder="Min"placeholderTextColor='#818181' value={this.state.min} keyboardType='numeric'
									onChangeText={(min) => this.setState({min })} style={styles.TextInputStyleClass}{...textStyle} />
                        </View>
                        <View style={styles.minContent1}>
                            <Text style={{ color: '#818181', textAlign: 'center', fontWeight: 'bold', alignSelf: 'center' }}>K</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'center', alignSelf: 'center', color: '#fff', fontWeight: "bold", fontSize: 18 }}> - </Text>
                    <View style={styles.minContent}>
                        <View style={styles.minContentContainer}>
                        <TextInput placeholder="Max"placeholderTextColor='#818181' value={this.state.man} keyboardType='numeric'
									onChangeText={(max) => this.setState({max })} style={styles.TextInputStyleClass} {...textStyle} />
                        </View>
                        <View style={styles.minContent1}>
                            <Text style={{ color: '#818181', textAlign: 'center', fontWeight: 'bold', alignSelf: 'center' }}>K</Text>
                        </View>
                    </View>

                </View>
            
        )
    }
}

export default MarketCap

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
    minBar: {
        padding: 15,
        flexDirection: 'row',
        borderRadius: 15,
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    categoryStyle: {
        color: "#818181",
        fontSize: 16
    },
    TextInputStyleClass: {
        //padding:5,
        fontSize: 14,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#001623',
        color: '#818181'
    },
    minContent: {
        flexDirection: 'row',
        flex: .5,
        borderRadius: 5
    },
    minContentContainer: {
        //padding: 15,
        backgroundColor: '#001623',
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
})