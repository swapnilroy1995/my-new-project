import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

class InformationButtonsContainer extends Component {
    constructor(props) {
        super(props)
	this.state={
		compare:false,
		alert:false,
		favourite:false,
		image:''
	};
    }
	
    render() {

        const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
		
		
		
        return (
					
						<View style={styles.contentContainer}>
							<View style={styles.InfoSingleContainer}>
								<TouchableOpacity style={styles.infoButton}>
								<View style={styles.infoIconContainer}>
									<Image
										style={styles.iconStyle}
										resizeMode='contain'
										source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_website.png')}
									/>
								</View>
								<Text style={styles.listTextType}>
									Website
								</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.infoButton}>
								<View style={styles.infoIconContainer}>
									<Image
										style={styles.iconStyle}
										resizeMode='contain'
										source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_whitepaper.png')}
									/>
								</View>
									<Text style={styles.listTextType}>WhitePaper</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.infoButton}>
								<View style={styles.infoIconContainer}>
									<Image
										style={styles.iconStyle}
										resizeMode='contain'
										source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_twitter.png')}
									/>
								</View>
									<Text style={styles.listTextType}>Twitter</Text>
								</TouchableOpacity>
							</View>
							
							<View style={styles.InfoSingleContainer}>
								<TouchableOpacity style={styles.infoButton}>
								<View style={styles.infoIconContainer}>
									<Image
										style={styles.iconStyle}
										resizeMode='contain'
										source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_telegram.png')}
									/>
								</View>
								<Text style={styles.listTextType}>
									Telegram
								</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.infoButton}>
								<View style={styles.infoIconContainer}>
									<Image
										style={styles.iconStyle}
										resizeMode='contain'
										source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_reddit.png')}
									/>
								</View>
									<Text style={styles.listTextType}>Reddit</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.infoButton}>
								<View style={styles.infoIconContainer}>
									<Image
										style={styles.iconStyle}
										resizeMode='contain'
										source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_medium.png')}
									/>
								</View>
									<Text style={styles.listTextType}>Medium</Text>
								</TouchableOpacity>
							</View>
							
						</View>
						
        )
    }
}

export default InformationButtonsContainer
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001623',
    },
    iconStyle: {
		height: 20,
		width: 20, 
		marginVertical: 2 
		},
    listTextType: {
		color:'#fff',
		fontSize:10,
		fontWeight: '700'
    },
    listTextValue: {
		color:'#fff',
		fontSize:15,
		fontWeight: '700'
    },
    InfoSingleContainer: {
		flexDirection : 'row',
		marginBottom:1
		},
    infoIconContainer:{ 
	backgroundColor:'#47DFFF', 
	padding:5,
	margin:5,
	borderRadius:5
	},
    infoButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'flex-start',
		margin:5,
		marginBottom:10,
		height:60,
		padding:5,
        backgroundColor: '#03273B',
		borderRadius:10,
		flexDirection:'row',
    },
    contentContainer: {
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#001623',
		alignItems: 'center',
		justifyContent: 'space-between',
    },
    
})
