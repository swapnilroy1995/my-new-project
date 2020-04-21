import { EMPTY_MOVIE_DETAILS, FETCH_MOVIE_DETAILS, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_IMAGE_FAILED, FETCH_MOVIE_LIST, FETCH_MOVIE_LIST_SUCCESS, FETCH_MOVIE_LIST_FAILED, } from './../actionTypes';

export const movieDetails=(id, unmount)=>{
	if(unmount===true){
		return{
        type:EMPTY_MOVIE_DETAILS,
    }
	}
    
    return async dispatch=>{
        dispatch({
            type:FETCH_MOVIE_DETAILS,
        });

        await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b09846023ae4e1498427434ce6325d49&language=en-US`,{
            method:'GET',
        }
        )
            .then(response=>response.json())
            .then(
                details=>{

                    dispatch({
                        type:FETCH_MOVIE_DETAILS_SUCCESS,
                        details:details
                    })
                }
            )
            .catch(
            error=>{
                
            dispatch({
                type:FETCH_MOVIE_DETAILS_FAILED,
                error: error
            })}
        );
    }
};

export const movieList=(page)=>{
    console.log('inside action',page);
    return async dispatch=>{
        dispatch({
            type:FETCH_MOVIE_LIST,
        });

        await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b09846023ae4e1498427434ce6325d49&language=en-US&page=${page}`)
		.then(response=> response.json())
		.then(list=> {
					//console.log('inside list action',list);
							dispatch({
                        type:FETCH_MOVIE_LIST_SUCCESS,
                        list:list,
						search:false
                    })
                })
            .catch(
            error=>{
                
            dispatch({
                type:FETCH_MOVIE_LIST_FAILED,
                error: error
            })}
        );
    }
};

export const searchMovie=(page,query)=>{
    console.log('inside action',page,query);
    return async dispatch=>{
        dispatch({
            type:FETCH_MOVIE_LIST,
        });

        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b09846023ae4e1498427434ce6325d49&language=en-US&query=${query}&page=${page}&include_adult=false`)
		.then(response=> response.json())
		.then(list=> {
					//console.log('inside search action',list);
							dispatch({
                        type:FETCH_MOVIE_LIST_SUCCESS,
                        list:list,
						search:true,
						page:page
                    })
                })
            .catch(
            error=>{
                
            dispatch({
                type:FETCH_MOVIE_LIST_FAILED,
                error: error
            })}
        );
    }
};
