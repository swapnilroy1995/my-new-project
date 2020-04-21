import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image, TextComponent } from 'react-native'

const updropdown = require('./../../assets/android/all_screens/drawable-xhdpi/icn_forward_white.png')
class Setting extends Component {
    constructor(props) {
        super(props),
            this.state = {

            }
    }
    render() {
        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

        return (
           
                <View style={styles.container}>
                    <View style={styles.membership}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 24,fontWeight:'700' }}> Gold Member</Text>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12, fontWeight: '700' }}>Thank You for subscribing</Text>
                        <Text style={{ color: '#fff',marginLeft:-18,fontSize:12,fontWeight:'700' }}>Expiry Date:</Text>
                    </View>
                    <Touchable onPress={() => { this.props.navigation.navigate('Accounts') }}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.account}>My Account</Text>
                        <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                    </View>
               </Touchable>
               <Touchable>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Theme</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                </View>
                </Touchable>
                <Touchable>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Language</Text>
                    <View style={{justifyContent:'space-evenly',flexDirection:'row'}}>
                        <Text style={{color:'#818181',fontSize:12,textAlign:'center'}}>English</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                    </View>
                </View>
                </Touchable>
               <Touchable onPress={() => { this.props.navigation.navigate('TermsConditions') }}>
                <View style={styles.contentContainer}>
                    <Text style={styles.account}>Terms and Condition</Text>
                    <Image source={updropdown} style={styles.dropdown} resizeMode='contain' />
                </View>
                </Touchable>
                </View>
               
        )
    }
}

export default Setting

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor:'#001623'
    },
    membership: {
        
        marginVertical: 10,
        padding: 40,
        backgroundColor:'#0C3F58',
        borderRadius: 5,
        justifyContent: 'center',
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