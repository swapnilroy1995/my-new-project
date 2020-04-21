import { FETCH_IMAGE, FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILED, } from './../actionTypes';

export const imageFeeder=(page)=>{
    var list=[];
    var imagefeedError='';
    return async dispatch=>{
        dispatch({
            type:FETCH_IMAGE,
        });

        await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`,{
            method:'GET',
        }
        )
            .then(response=>response.json())
            .then(
                imageList=>{

                    // console.log('imagelist',imageList,'list',list);
                    dispatch({
                        type:FETCH_IMAGE_SUCCESS,
                        imageFeed:imageList
                    })
                }
            )
            .catch(
            error=>{
                imagefeedError = error;
            dispatch({
                type:FETCH_IMAGE_FAILED,
                error: imagefeedError
            })}
        );
    }
};
