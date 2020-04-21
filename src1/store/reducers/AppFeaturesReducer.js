import {CHANGE_THEME} from "../actionTypes";

const initialState={
    theme:'Light'
};
const AppFeaturesReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_THEME:{
            if(state.theme==='Light')
                return {...state,theme:'Dark'};

            return{...state, theme: 'Light'}
        }
        default: {
            return{...state}
        }
    }
};

export default AppFeaturesReducer;