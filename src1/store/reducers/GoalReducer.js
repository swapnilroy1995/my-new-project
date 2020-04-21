import {ADD_GOAL, DELETE_GOAL} from './../actionTypes'

const initialState={
    goalList:[]
    }
;

const GoalReducer = (state=initialState, action) =>{
    console.log('inside reducer',action);
    switch (action.type) {
        case ADD_GOAL:{
            // console.log('inside reducercase',action.goal);
            return{...state, goalList:state.goalList.concat({key:Date.now().toString(),goal:action.goal})}
        }
        case DELETE_GOAL:{
            console.log('inside reducercase',action.key);
            const updatedGoalList= state.goalList.filter((goal)=>goal.key!==action.key);
            return{...state,goalList: updatedGoalList}
        }
        default:{
            console.log('inside reducer default',action);
            return state;
        }
    }
};

export default GoalReducer;