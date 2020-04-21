import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image, TextComponent } from 'react-native'

const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_forward_white.png')

class Accounts extends Component {
    constructor(props) {
        super(props),
            this.state = {

            }
    }

    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
           
                <View style={styles.container}>
                    <Touchable>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Change username</Text>
                    <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
                        <Text style={{color:'#818181',fontSize:12,textAlign:'center'}}>Rachel_crypto</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                    </View>
                </View>
                </Touchable>
                <Touchable onPress={this.Terms}>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Log Out</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                </View>
                </Touchable>
                <Touchable onPress={this.Terms}>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Delete Account</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                </View>
                </Touchable>
                <Touchable>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Currency</Text>
                    <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
                        <Text style={{color:'#818181',fontSize:12,textAlign:'center'}}>Us Dollar(USD)</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                    </View>
                </View>
                </Touchable> 
                <Touchable onPress={this.Terms}>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Subscription</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                </View>
                </Touchable>     
                    </View>
               
               )
           }
       }
    
export default Accounts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor:'#001623'
    },
    contentContainer: {
        padding: 16,
        marginVertical:3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#00304B',
    },
    account: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14
    },
    dropdown: {
        height: 10,
        alignSelf: 'center',
    },
})