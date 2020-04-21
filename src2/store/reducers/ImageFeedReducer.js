import { FETCH_IMAGE, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILED, } from './../actionTypes'

const initialState={
    imageFeed:[],
    error:null,
    loading:false
};

const ImageFeedReducer=(state=initialState, action)=>{
    switch (action.type) {
        case FETCH_IMAGE:{
            // console.log('inside imagefeed reducer ', state.imageFeed);

            return{...state,loading:true}
        }
        case FETCH_IMAGE_SUCCESS:{
            for(let i in action.imageFeed){
                state.imageFeed.push({key:action.imageFeed[i].url.slice(28)+action.imageFeed[i].id , imageUrl:"https://picsum.photos/200/300" , author: action.imageFeed[i].author });
                console.log('i',action.imageFeed[i].url)
            }
            // console.log('inside imagefeed reducer success', state.imageFeed);
            return{...state,loading:false, imageFeed: state.imageFeed}
        }
        case FETCH_IMAGE_FAILED:{
            // console.log('inside imagefeed reducer failed', state.imageFeed);

            return{...state, loading:false, error:action.error}
        }
        default:{
            // console.log('inside imagefeed reducer default', state.imageFeed);

            return{...state}
        }
    }
};

export default ImageFeedReducer;