import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image, Animated,StatusBar, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
let { width, height } = Dimensions.get('window');

const cryptoCurrencies1 = require("./../../assets/android/onboarding/drawable-xxxhdpi/icn_update.png");
const cryptoCurrencies2 = require("./../../assets/android/onboarding/drawable-xxxhdpi/icn_deep_analysis.png");
const cryptoCurrencies3 =require("./../../assets/android/onboarding/drawable-xxxhdpi/icn_compare.png");
const backArrow = require("./../../assets/android/onboarding/drawable-xxxhdpi/icn_on_boarding_back.png");
let step = 0;

export default class Update_Cryptocurrencies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateStep: 0
        }
    }
    static navigationOptions = {
      headerStyle: {
        backgroundColor: "#03273B",
        elevation: null
      },
      header: null
    };
    nextpage = () => {
        console.log("scroll");
        if (step === 0) {
            this.scrollView.scrollTo({ x: width, animated: true });
        }
        if (step === 1) {
            this.scrollView.scrollTo({ x: width + width, animated: true });
        }
        if (step === 2) {
            this.props.navigation.navigate('Forgot');
        }
        //this.scrollView.scrollToEnd({animated: true});
        step++;
    }
    skip = () => {
        this.props.navigation.navigate('Login');
    }
    finish = () => {
        this.props.navigation.navigate('Phone');
    }
    backScreen = () => {
		this.props.navigation.goBack('Login');
       
    }

    handleScroll = (event) => {
        // console.log(event.nativeEvent.contentOffset.x);
        let position = event.nativeEvent.contentOffset.x;
        if (position < (width * 0.9)) {
            step = 0;
            this.setState({ stateStep: 0 })
        }
        else if (position > (width * 0.9) && position < (width * 1.9)) {
            step = 1;
            this.setState({ stateStep: 1 })
        }
        else if (position > (width * 1.9) && position < (width * 3)) {
            step = 2;
            this.setState({ stateStep: 2 })
        }
    }

    handleScrollEndDrag = (event) => {
        console.log(event)
    }

    render() {
        const Touchable = Platform.OS == 'android' ? TouchableNativeFeedback : TouchableOpacity;
        return (
            <View style={styles.container}><View>
                    <ScrollView horizontal={true}
                        pagingEnabled={true}
                        decelerationRate={0}
                        //snapToInterval={width - 50}
                        // snapToAlignment={"center"}
                        ref={ref => this.scrollView = ref}
                        showsHorizontalScrollIndicator={false}
                        onScroll={this.handleScroll}>
                        <View>

                        </View>
                        <View>
                                <Text style={styles.skip} onPress={this.skip}>Skip</Text>
                        
                            <Image source={cryptoCurrencies1} style={styles.cryptoCurrencies1} resizeMode='contain' />
                            <Text style={styles.profile}>Updates on Cryptocurrencies</Text>
                            <View style={{marginVertical:8 }}>
                                <Text style={styles.textprofile}>Lorem ipsum simply dummy text of the simply</Text>
                                <Text style={styles.textprofile}>and typescript industry.Lorem ipsum</Text>
                                <Text style={styles.textprofile}>has been the industry standrd dummy</Text>
                            </View>
                        </View>
                        <View style={{ }}>
                            <View style={styles.header}>
                                <Touchable onPress={this.backScreen}>
                                    <View>
                                        <Image source={backArrow} style={styles.backArrow} resizeMode='contain' />
                                    </View>

                                </Touchable>
                                <Text style={styles.skip} onPress={this.skip}>Skip</Text>
                            </View>
                            <Image source={cryptoCurrencies2} style={styles.cryptoCurrencies1} resizeMode='contain' />
                            <Text style={styles.profile}>Deep Analysis</Text>
                            <View style={{marginVertical:8 }}>
                                <Text style={styles.textprofile}>Lorem ipsum simply dummy text of the</Text>
                                <Text style={styles.textprofile}>and typescript industry.Lorem ipsum</Text>
                                <Text style={styles.textprofile}>has been the industry standrd dummy</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.header}>
                                <Touchable onPress={this.backScreen}>
                                    <View>
                                        <Image source={backArrow} style={styles.backArrow} resizeMode='contain' />
                                 
                                    </View>
                                </Touchable>
                                
                            </View>
                            <Image source={cryptoCurrencies3} style={styles.cryptoCurrencies1} resizeMode='contain' />
                            <Text style={styles.profile}>Compare</Text>
                            <View style={{marginVertical:8 }}>
                                <Text style={styles.textprofile}>Lorem ipsum simply dummy text of the Lorem </Text>
                                <Text style={styles.textprofile}>and typescript industry.Lorem ipsum</Text>
                                <Text style={styles.textprofile}>has been the industry standrd dummy</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                {
                    this.state.stateStep === 2 ?
                        <View style={styles.SubmitButtonStyle} >
                            <Text style={styles.next} onPress={this.finish}>Finish</Text>
                        </View> :
                        <View style={styles.SubmitButtonStyle}>
                            <Text style={styles.next} onPress={this.nextpage}>Next</Text>
                        </View>
                }

                <View style={styles.footer}>
                    <View style={{ flex: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={[styles.pagination, this.state.stateStep === 0 ? { backgroundColor: '#fff' } : { backgroundColor: '#0C3F5B' }]}></View>
                        <View style={[styles.pagination, this.state.stateStep === 1 ? { backgroundColor: '#fff' } : { backgroundColor: '#0C3F5B' }]}></View>
                        <View style={[styles.pagination, this.state.stateStep === 2 ? { backgroundColor: '#fff' } : { backgroundColor: '#0C3F5B' }]}></View>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#001623',
        flex: 1,
    },
    cryptoCurrencies1: {
      marginTop:60,
        width: width * 0.8,
        marginHorizontal: width * 0.1,
        height: height * 0.23,
        alignSelf: 'center'
    },
    profile: {
        alignSelf: 'center',
        fontSize:20,
       // fontFamily: 'Regular-Medium',
        color: '#47DFFF',
        fontWeight: '700',
       marginTop:30
    },
    textprofile: {
        textAlign:'center',
        alignSelf: 'center',
        fontSize:13,
      //  fontFamily: 'Regular',
        color: '#fff',
        fontWeight:'700',
       
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    backArrow: {
        height: 18,
        margin:13,
        marginVertical: 35
    },
    skip: {
        textAlign: 'right',
        color: '#fff',
      //  fontFamily: 'Regular',
        marginTop:30,
        fontSize: 15,
        marginVertical:35,
        paddingRight:30

    },
    SubmitButtonStyle: {
        justifyContent: 'center',
        height: 46,
        backgroundColor: '#47DFFF',
        borderWidth: 1,
        borderColor: '#47DFFF',
        borderRadius:5,
        marginHorizontal: 65,
        marginVertical: 45
    },
    next: {
        textAlign: 'center',
        color: '#000336',
       // fontFamily: 'Regular',
        fontWeight: '700',
        fontSize: 18
    },
    footer: {
        marginVertical:50
    },
    pagination: {
        height: 12,
        width: 12,
        marginHorizontal: 8,
        borderRadius: 8
    }
})