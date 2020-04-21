import React, {Component} from'react'
import {View,TouchableOpacity,Text, Button, Image} from 'react-native';
import {changeTheme} from './../store/actions/AppFeatures';
import {headerStyles} from '../styleSheet/HeaderStyles';
import {connect} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

class HeaderComponent extends Component{
    render(){
        return(
            <View style={this.props.theme==="Light"?headerStyles.centerLight:headerStyles.centerDark}>
			
                {
                    this.props.previous ? (
                    <TouchableOpacity
                        style={this.props.theme==="Light"?headerStyles.goBackLight:headerStyles.goBackDark}
                        onPress={()=>this.props.navigationer.goBack(this.props.previous)}
                    >
                     <Image
						resizeMode= 'contain'
						style={this.props.theme==="Light"?headerStyles.settingsLight:headerStyles.settingsDark}
						source={require('./../../assets/android/all_screens/drawable-xhdpi/Cryptonomics_Logo_top_left.png')}
					/>
					</TouchableOpacity>
                ) : this.props.title?(
                    <TouchableOpacity
                        style={this.props.theme==="Light"?headerStyles.goBackLight:headerStyles.goBackDark}
                        onPress={()=>console.log('inside header')}
                    >
                         <Image
						resizeMode= 'contain'
						style={this.props.theme==="Light"?headerStyles.settingsLight:headerStyles.settingsDark}
						source={require('./../../assets/android/all_screens/drawable-xhdpi/Cryptonomics_Logo_top_left.png')}
					/>
					</TouchableOpacity>

                ):(
                    <View style={{ flex: 1 }} />
                )}
                <View
                    style={{
                        flex: 5,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text style={this.props.theme==="Light"?headerStyles.headerTitleLight:headerStyles.headerTitleDark}>
                        {this.props.title}
                    </Text>
                </View>
                {this.props.scene !== 'Summary'?
				<TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} 
					title={"Theme"} 
					//onPress={this.props.changeTheme} 
					
					onPress={()=>this.props.navigationer.navigate('Settings')} 
					>
					<Image
					resizeMode= 'contain'
					style={this.props.theme==="Light"?headerStyles.settingsLight:headerStyles.settingsDark}
						source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_settings.png')}
						/>
				</TouchableOpacity>:
				<TouchableOpacity style={{ flex: 1, alignItems: "center", justifyContent: "center" }} 
					title={"Theme"} 
					//onPress={this.props.changeTheme} 
					onPress={()=>this.props.navigationer.navigate('Settings')} 
					>
					<Image
					resizeMode= 'contain'
					style={[this.props.theme==="Light"?headerStyles.settingsLight:headerStyles.settingsDark,{ backgroundColor:'#47DFFF'}]}
						source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
						/>
				</TouchableOpacity>}
				{/*<TouchableOpacity style={{height: 32, width: 32,alignItems:'center', borderRadius: 5, justifyContent: 'center', backgroundColor:'#47DFFF', padding:10}}>
				  <Image
					style={{ height: 24, width: 24 }}
					source={require('./../../assets/android/all_screens/drawable-xhdpi/icn_filter.png')}
					/>
				</TouchableOpacity>*/}
            </View>
        );
    }
}
const mapStateToProps=(state)=>{
    // console.log('theme mapstatetoprops',state)
    return {theme:state.AppFeaturesReducer.theme}
};

const mapDispatchToProps=(dispatch)=>{
    return{
        changeTheme:()=>dispatch(changeTheme())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);