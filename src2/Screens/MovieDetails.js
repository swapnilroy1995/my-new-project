import React, {Component} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator, ScrollView, StyleSheet, Button, TouchableOpacity, TextInput, Image, StatusBar, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {movieDetails} from './../store/actions/MovieInfo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class MovieDetails extends Component{
	
	componentDidMount(){
		this.props.movieDetails(this.props.route.params.movieDetails.id, false);
	}
	componentWillUnmount(){
		this.props.movieDetails(this.props.route.params.movieDetails.id, true);
	}
	
	
    render(){
		return(
		<SafeAreaView style={styles.container}>
			{
								(this.props.loading||(this.props.route.params.movieDetails.id!==this.props.details.id))?
							<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
									<ActivityIndicator size={30} />
							</View>
							:
							<ScrollView contentContainerStyle={styles.contentContainerStyle}>
						{
							this.props.route.params.movieDetails.poster_path!==null?
									<Image
										style={styles.moviePoster}
										resizeMode={'contain'}
										source={{uri:`https://image.tmdb.org/t/p/original/${this.props.route.params.movieDetails.poster_path}`}}
									  />
									  :
									  <View style={[styles.moviePoster,{alignItems:'center', justifyContent: 'center'}]}>
										<Text>Image not available</Text>
								  </View>
						}
								  <View style={{width:'100%', flexDirection: 'row', justifyContent: 'flex-start'}}>
										  <Text style={{color: '#4a4a4a', fontWeight: '700',fontSize:20}}>{this.props.route.params.movieDetails.original_title}</Text>
										  <Text style={{color: '#9b9b9b', fontWeight: '700',fontSize:20}}> ({this.props.route.params.movieDetails.vote_average})</Text>
										  
									</View>
								  <View style={{width:'100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
										  <Text style={styles.detailsTextStyles}>{this.props.details.release_date}</Text>
										  <View style={{width:2, backgroundColor:'#4a4a4a', height:'60%', marginHorizontal:10}}/>
										  <Text style={styles.detailsTextStyles}>{this.props.details.runtime} mins</Text> 
										  
									</View>
									<Text style={styles.detailsTextStyles}>
											{this.props.details.overview}
									</Text>
							</ScrollView>
			}
			</SafeAreaView>
    )
	}
}
const styles= StyleSheet.create({
    container:{
		flex:1,
    }, 
	contentContainerStyle:{
		alignItems:'center',
		paddingHorizontal: 10
    },
	moviePoster:{ 	
		height:windowHeight*.6,
		width:windowWidth,
		marginVertical:10
	},
	detailsTextStyles:{
		color: '#4a4a4a',
		fontWeight: '700',
		fontSize:15,
		marginVertical:10
		
		},
	headerStyle:{ 
		height: 45, 
		borderRadius:10, 
		marginVertical:10, 
		backgroundColor: '#fff', 
		paddingLeft: 10 ,
		width: '90%',
		marginHorizontal:10
	},
});







const mapStateToProps=(state)=>{
    return {details:state.movieDetailsReducer.details,}
};
const mapDispatchToProps=(dispatch)=>{
    return {
        movieDetails:(id)=> dispatch(movieDetails(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);