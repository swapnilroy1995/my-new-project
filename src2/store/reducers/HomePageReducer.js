import {FETCH_LIST} from './../actionTypes'

const initialState={
    list:[]
    }
;

const HomePageReducer = (state=initialState, action) =>{
    // console.log('inside reducer',action);
    switch (action.type) {
        case FETCH_LIST:{
             console.log('inside reducercase',action);
            return{...state, list:state.list.concat({key:action.id.name,goal:action.goal})}
        }
        default:{
            // console.log('inside reducer default',action);
            return state;
        }
    }
};

export default HomePageReducer;