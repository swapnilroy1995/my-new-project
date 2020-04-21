import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'
const increase = require('./../../assets/android/all_screens/drawable-xhdpi/icn_increase_12x8.png')

class VolatilityComponent extends Component {
    constructor(props) {
        super(props)
	this.state={
		favourite:false,
		image:''
	};
    }
	
    render() {

        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
        const itemData = this.props.itemData;

        return (
					
						<View style={styles.contentContainer}>
                              <Text style={{color:'#fff'}}>{itemData.item.id}</Text>
						<View style={{width:35,marginHorizontal:0, alignItems:'center'}}>
							{this.props.itemData.item.coinImage===1?
							<Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
									source={require("./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png")}
										/>:
										this.props.itemData.item.coinImage===2?
										<Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
									source={require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')}
                                        />:
                                        this.props.itemData.item.coinImage===3?
										<Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
									source={require('./../../assets/android/all_screens/drawable-xhdpi/tether_35x35.png')}
										/>: this.props.itemData.item.coinImage===4?
                                        <Image
									style={{ height: 30, width: 30, marginVertical: 2}}
									 resizeMode='contain'
                                     source={require("./../../assets/android/all_screens/drawable-xhdpi/bitcoin_30x30.png")}
                                        />:
                                        <Image
                                        style={{ height: 30, width: 30, marginVertical: 2}}
                                         resizeMode='contain'
                                         source={require('./../../assets/android/all_screens/drawable-xhdpi/ethereum_35x35.png')}
                                            />
										}
						</View>
							{console.log(this.state.image)}
                       
							<Text style={{fontWeight: 'bold', fontSize: 14, color: '#fff',}}>{itemData.item.name}</Text>
							<Text style={styles.listTextName}>{itemData.item.type}</Text> 
                            <View style={{flex:.1}}></View>
                            <View style={{flexDirection:'column',alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'700',}}>{itemData.item.volumeCharge}</Text> 
                            <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
                            <Image source={increase} style={styles.dropdown} resizeMode='contain' />
                            <Text style={styles.listTextName}>{itemData.item.average}</Text> 
                            </View>
                            </View>
                        <View style={{flex:.01}}></View>
                            <Text style={{color:'#fff',fontWeight:'700'}}>{itemData.item.price}</Text>
						
								
						
								<TouchableOpacity
								onPress={()=>{
									this.setState({favourite:!this.state.favourite});
								}}
								>{this.state.favourite?
										<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_selected.png')}
										/>:<Image
									style={{ height: 20, width: 20, marginVertical: 2 , backgroundColor:'#03273B'}}
									source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_favourite_unselected.png')}
										/>
								}</TouchableOpacity>
						
						</View>
						
        )
    }
}

export default VolatilityComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001623',
    },
    listTextType: {
        marginHorizontal: 0,
		marginRight:10,
		color:'#fff',
		fontSize:20,
		fontWeight:'700'
    },
    listTextName: {
     textAlign: 'center',
      fontSize: 12,
       color: '#03CC79'
    },
    contentContainer: {
        borderBottomWidth: .7,
		height:55,
        backgroundColor: '#03273B',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal:10,
    },
    dropdown: {
        height: 6,
        alignSelf: 'center',
        alignItems:'center',
        marginRight:-5
    },
    
})
