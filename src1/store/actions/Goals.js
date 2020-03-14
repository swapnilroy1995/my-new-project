import {ADD_GOAL, DELETE_GOAL, EDIT_GOAL} from './../actionTypes';

export const addGoal=(goal) => {
    // console.log('inside action123',goal);
    return {
        type: ADD_GOAL,
        goal: goal
    }
};
export const deleteGoal=(key)=>{
    console.log('inside delete action123',key);
    return{
        type:DELETE_GOAL,
        key:key
    }
};