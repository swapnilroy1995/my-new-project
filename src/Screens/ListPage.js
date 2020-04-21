import React, {Component, PureComponent} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback, ActivityIndicator, TouchableOpacity, TextInput, FlatList,Keyboard, StatusBar, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import { movieList, searchMovie } from './../store/actions/MovieInfo';
import MovieCard from './../components/MovieCard';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


class ListPage extends PureComponent{
	constructor(props){
		super(props);
		this.state={
			searchInput: '',
			nextMovieListPage:1,
			searchMovieListPage:1,
			searchMode:false,
			loading:true
	}
	}
	
	
	
	  static getDerivedStateFromProps(props, state) {
	  if (
			  props.list.page === state.nextMovieListPage &&
			  !state.searchMode
			) {
			  return {
			   ...state, nextMovieListPage: props.list.page+1, loading:false
			  };
			}
			
			if (
			  props.list.page === state.searchMovieListPage &&
			  state.searchMode
			) {
			  return {
			   ...state, searchMovieListPage: props.list.page+1, loading:false
			  };
			}
			return null;
  }
  
  
	componentDidMount(){
		
							this.props.movieList(this.state.nextMovieListPage);
	}

    render(){
		return(
			
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} style={{flex:1}}>
				{this.state.loading?
						<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
								<ActivityIndicator size={30} />
						</View>
									:
						<View style={styles.container}>
						<View style={styles.searchBarContainerStyle}>
						 <TextInput  
							style={[styles.searchBarStyle,{paddingLeft:25}]}
							maxLength={30}
							onChangeText={text => {
							this.setState({searchInput:text})
								if(text.length!==0){
								this.setState({nextMovieListPage:1,searchMode:true});
										this.props.searchMovie(1,text);
										return true;
										}
										this.setState({searchMode: false, searchMovieListPage:1})
										this.props.movieList(this.state.nextMovieListPage);
							}}
							value={this.state.searchInput}
							inlineImageLeft='baseline_search_black_18'
							inlineImagePadding={2}
							placeholder = 'Search'
						  />
						  <Image
								resizeMode= 'contain'
								style={[styles.goBackIcon,{left:10,}]}
								onStartShouldSetResponder={()=>{
									
										this.setState({searchInput:'', searchMode: false, searchMovieListPage:1})
										this.props.movieList(this.state.nextMovieListPage);
								}}
								source={require('./../../assets/baseline_search_black_18.png')}
						  />
						  {this.state.searchInput.length!==0&&
						  <Image
								resizeMode= 'contain'
								style={styles.goBackIcon}
								onStartShouldSetResponder={()=>{
									
										this.setState({searchInput:'', searchMode: false, searchMovieListPage:1})
										this.props.movieList(this.state.nextMovieListPage);
								}}
								source={require('./../../assets/sharp_close_black_36.png')}
						  />}
						  </View>
						  <View style={styles.seperator}/>
						  <FlatList
								  data={this.props.results}
								  showsVerticalScrollIndicator={false}
								  keyExtractor={(item)=>item.id}
								  extraData={this.props.results}
								  numColumns={2}
								  onEndReachedThreshold={.3}
								  keyboardShouldPersistTaps={'never'}
								  keyboardDismissMode={'on-drag'}
								  onEndReached={()=>{
								  
								  if(this.state.searchMode){
								 	this.props.searchMovie(this.state.searchMovieListPage,this.state.searchInput);
									this.setState({searchMovieListPage:this.state.searchMovieListPage+1})
										return true;
										}	
								  this.props.movieList(this.state.nextMovieListPage)
								  this.setState({nextMovieListPage:this.state.nextMovieListPage+1});
								  
								  
								  }}
								  ListFooterComponent={
													this.props.loading?
															<View style={{height:40,width:'100%'}}>
																	<ActivityIndicator size={30}/>
															</View>:
															null
															
													}
								ListEmptyComponent={
														<View style={{height:40,width:'100%', alignItems:'center', justifyContent: 'center'}}>
																	<Text>No Results</Text>
															</View>
													}
								  renderItem={(item)=>
										<MovieCard movieList={item.item} navigation={this.props.navigation}/>
								  }
							  />
							  
						  
							
						</View>
			}
			</TouchableWithoutFeedback>
    )
	}
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
		alignItems:'center'
    },
	searchBarContainerStyle:{ 
		height: 45, 
		borderRadius:10, 
		marginVertical:10, 
		backgroundColor: '#fff', 
		paddingLeft: 10 ,
		width: '90%',
		marginHorizontal:10
	},
	searchBarStyle:{ 
		height: 45, 
		borderRadius:10, 
		backgroundColor: '#fff', 
		width: '100%',
		paddingRight:35
	},
	seperator:{ 
		height: 1,
		width: '100%',
		backgroundColor: '#9B9B9B'
	},	
	  goBack: {
		flex: 1.5,
		// backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flexDirection:'row',
		justifyContent: 'space-around'
	  },
	goBackIcon: {
		  height:25,
		  width: 25,
		  position: 'absolute',
		  top:10,
		  right:10
	  
	  },
});

const mapStateToProps=(state)=>{
    return { list:state.movieDetailsReducer.list, results:state.movieDetailsReducer.results, loading:state.movieDetailsReducer.loading, searchMode: state.movieDetailsReducer.searchMode }
};	
const mapDispatchToProps=(dispatch)=>{
    return {
        movieList:(page)=> dispatch(movieList(page)),
        searchMovie:(page,query)=> dispatch(searchMovie(page,query)),
    }
};





export default connect(mapStateToProps, mapDispatchToProps)(ListPage);


