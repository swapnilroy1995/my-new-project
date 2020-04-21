import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar, FlatList,ScrollView,SafeAreaView, TextInput, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity, Image } from 'react-native'

class CoinInfo extends Component {
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
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Rank</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.rank}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Market Cap</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.marketCap}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Market Cap</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.marketCap}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Volume(1d)</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.volume}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Volume(1d)p</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.volumeChange}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Volume(1d)p</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.volumeChange}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Circulating Supply</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.circulatingSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Max Supply</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.maxSupply}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Max Supply</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.maxSupply}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>ICO Price</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.ICOprice}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>% from ATH</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.percentageATH}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>% from ATH</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.percentageATH}</Text>
								</View>
							</View>
							<View style={styles.CoinInfoSingleContainer}>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Category</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.category}</Text>
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Consensus</Text>
									{this.props.coinInfo.consensus===null?<Text style={styles.listTextValue}>n/a</Text>:
									<Text style={styles.listTextValue}>{this.props.coinInfo.consensus}</Text>}
								</View>
								<View style={styles.coinInfo}>
									<Text style={styles.listTextType}>Consensus</Text>
									{this.props.coinInfo.consensus===null?<Text style={styles.listTextValue}>n/a</Text>:
									<Text style={styles.listTextValue}>{this.props.coinInfo.consensus}</Text>}
								</View>
							</View>
							<View style={[styles.CoinInfoSingleContainer,{marginBottom:0}]}>
							
								<View style={[styles.coinInfo,{alignItems: 'center', flexDirection: 'column'}]}>
									<Text style={styles.listTextType}>Watch Score</Text>
									<Text style={styles.listTextValue}>{this.props.coinInfo.watchScore}</Text>
									
									</View>
								</View>
							
						</View>
						
        )
    }
}

export default CoinInfo;

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
    contentContainer: {
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: '#001623',
		alignItems: 'center',
		justifyContent: 'space-between',
    },
    
})
