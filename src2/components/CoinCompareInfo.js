import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

class CoinCompareInfo extends Component {
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
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Rank</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.rank}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.marketCap}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.marketCap}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Vol</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.volume}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.volumeChange}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.volumeChange}</Text>
								</View>	
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfoType}>
									<Text style={styles.listTextType}>Cap</Text>
									<Text style={styles.listTextUnit}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextValue}>$0.1207</Text>
									<Text style={styles.listTextChange}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							
						</View>
						
        )
    }
}

export default CoinCompareInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001623',
    },
    listTextType: {
		color:'#808080',
		fontSize:12,
		fontWeight: '700'
    },
    listTextValue: {
		color:'#fff',
		fontSize:15,
		fontWeight: '700'
    },
    listTextChange: {
		color:'red',
		fontSize:10,
		fontWeight: '700'
    },
    listTextUnit: {
		color:'#fff',
		fontSize:10,
		fontWeight: '700'
    },
    CoinInfoSingleContainer: {
		flexDirection : 'row',
		marginBottom:1
		},
    coinInfo: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent:'space-around',
		marginHorizontal:1,
		height:70,
		paddingHorizontal:10,
		paddingVertical:10,
		
        backgroundColor: '#03273B',
    },
    coinInfoType: {
		flex: 1,
		alignItems: 'center',
		justifyContent:'space-between',
		marginHorizontal:1,
		height:70,
		paddingHorizontal:5,
		paddingVertical:10,
		flexDirection: 'row',
		
        backgroundColor: '#03273B',
    },
    contentContainer: {
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#001623',
		alignItems: 'center',
		justifyContent: 'space-between',
    },
    
})
