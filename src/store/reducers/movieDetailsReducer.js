import { EMPTY_MOVIE_DETAILS, FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILED, FETCH_MOVIE_LIST, FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_LIST_FAILED, } from './../actionTypes'

const initialState={
    details:[],
	results:[],
	searchResults:[],
	moviesList:[],
	list:[],
    error:null,
    loading:false,
	searchMode:false
};

const movieDetailsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FETCH_MOVIE_DETAILS:{
            return{...state,loading:true}
        }
        case FETCH_MOVIE_DETAILS_SUCCESS:{
            return{...state,loading:false, details:action.details}
        }
        case FETCH_MOVIE_DETAILS_FAILED:{
            return{...state, loading:false, error:action.error}
        }
        case EMPTY_MOVIE_DETAILS:{
            return{...state, loading:false, details:[]}
        }
        case FETCH_MOVIE_LIST:{
            return{...state,loading:true}
        }
        case FETCH_MOVIE_LIST_SUCCESS:{
		
		 if(action.search=== false){
				for(let i in action.list.results){
						state.moviesList.push(action.list.results[i]);
				}
				return{...state,loading:false, list:action.list, results:state.moviesList, searchMode:false, searchResults:[]}
			}
			
			if(action.search && action.page>1){
					for(let i in action.list.results){
						
						state.searchResults.push(action.list.results[i]);
				}
				
			return{...state,loading:false, list:action.list, results:state.searchResults, searchMode: true,moviesList:[]}
				}
				
				if(action.search && action.page===1){
					state.moviesList=[];
				state.searchResults=[];
					 for(let i in action.list.results){
						state.searchResults.push(action.list.results[i]);
						}
					return{...state,loading:false, list:action.list, results:state.searchResults, searchMode: true, moviesList:[]}
			
				}
		
            
        }
        case FETCH_MOVIE_LIST_FAILED:{
            return{...state, loading:false, error:action.error}
        }
        default:{
            return{...state}
        }
    }
};

export default movieDetailsReducer;