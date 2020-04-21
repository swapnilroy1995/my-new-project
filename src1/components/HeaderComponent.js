import React, {Component} from'react'
import {View,TouchableOpacity,Text, Button} from 'react-native';
import {changeTheme} from './../store/actions/AppFeatures';
import {headerStyles} from '../styleSheet/HeaderStyles'
import {connect} from 'react-redux';

class HeaderComponent extends Component{
    render(){
        return(
            <View style={this.props.theme==="Light"?headerStyles.centerLight:headerStyles.centerDark}>
                {this.props.previous ? (
                    <TouchableOpacity
                        style={this.props.theme==="Light"?headerStyles.goBackLight:headerStyles.goBackDark}
                        onPress={()=>this.props.navigation.goBack(this.props.previous)}
                    >
                        <Text styles={this.props.theme==="Light"?headerStyles.goBackTextLight:headerStyles.goBackTextDark}> Go Back</Text>
                    </TouchableOpacity>
                ) : (
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
                        {this.props.title} {this.props.theme}
                    </Text>
                </View>
                <Button style={{ flex: 1 }} title={"Theme"} onPress={this.props.changeTheme} />
            </View>
        );
    }
}
const mapStateToProps=(state)=>{
    console.log('theme mapstatetoprops',state)
    return {theme:state.AppFeaturesReducer.theme}
};
const mapDispatchToProps=(dispatch)=>{
    return{
        changeTheme:()=>dispatch(changeTheme())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);