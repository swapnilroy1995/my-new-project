import React, {Component, PureComponent} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Dimensions} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class MovieCard extends PureComponent{

	
    render(){
		
			const movieDetails=this.props.movieList;
		return(
			  
			   <TouchableOpacity
				style={styles.movieCard}
				onPress={()=>{this.props.navigation.navigate('MovieDetails',{movieDetails:movieDetails, })}}
			  >
				  
					{
						this.props.movieList.poster_path!==null?
							  <Image
								style={styles.moviePoster}
								resizeMode={'cover'}
								source={{uri:`https://image.tmdb.org/t/p/w500/${this.props.movieList.poster_path}`}}
							  />
							  :
							  <View style={[styles.moviePoster,{alignItems:'center', justifyContent: 'center'}]}>
									<Text>Image not available</Text>
							  </View>
					}
				  <View style={styles.movieTitleContainer}>
						  <Text 
							  style={[styles.movieTitleText,{color:'#4285f4', fontSize: 15, fontWeight: '700', width:'80%'}]} 
							  numberOfLines={1}
						  >
								{movieDetails.original_title}
						  </Text>
						  {
							this.props.movieList.vote_average!==null?
								  <Text style={styles.movieTitleText}> ({this.props.movieList.vote_average})</Text>
								  :
								  <Text style={styles.movieTitleText}>NA</Text>
							}
						  
				  </View>
				  <Text 
				  
				  
					numberOfLines={windowWidth>400?3:2}
					style={styles.movieDescText}
				  >
							{movieDetails.overview}
					</Text>
			  
			  </TouchableOpacity>
    ) 
	}
}
const styles= StyleSheet.create({
  
	movieCard:{ 
		//width:windowWidth*.30,
		width: windowWidth>400?windowWidth*.45:windowWidth*.40,
		//height:windowWidth>400?windowHeight*.45:windowHeight*.38,
		height:windowHeight*.42,
		borderRadius:10,
		shadowColor:'red',
		alignItems:'center',
		justifyContent:'flex-start',
		backgroundColor:'#DFDFDF',
		margin: windowWidth>400?10:8
	},
	moviePoster:{ 	
		height:'75%',
		width:'100%',
		borderTopLeftRadius:10,
		borderTopRightRadius:10,

		
	},
	movieTitleContainer:{ 
		
		width:'100%',
		margin:5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal:5,
	},
	movieTitleText:{ 
		fontSize:windowWidth>400?12:10,
		color:'#4a4a4a'
	},
	movieDescText:{ 
		fontSize:windowWidth>400?11:9,
		paddingHorizontal:5,
		color:'#4a4a4a'
	},
});

