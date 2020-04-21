import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView, SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image, TextComponent } from 'react-native'


class TermsConditions extends Component {
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
                        
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 14, }}>
                        Lorem ipsum simply dummy text of the Lorem ipsum simply dummy 
                        text of the Lorem ipsum simply dummy text of the Lorem ipsum simply dummy text of the
                        and typescript industry.Lorem ipsum  Lorem ipsum simply dummy text of the Lorem ipsum simply dummy 
                        text of the Lorem ipsum simply dummy text of the Lorem ipsum simply dummy text of the
                        and typescript industry.Lorem ipsum
                        </Text>
                    </View>
            
                    </View>
               
               )
           }
       }
    
export default TermsConditions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor:'#001623'
    },
    membership: {
        marginVertical: 10,
        padding: 15,
        backgroundColor:'#00304B',
        borderRadius: 5,
       justifyContent: 'center',
    },
})