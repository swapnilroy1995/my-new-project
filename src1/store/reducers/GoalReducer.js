import {ADD_GOAL, DELETE_GOAL, FETCH_GOALS} from './../actionTypes'

const initialState={
    goalList:[]
    }
;

const GoalReducer = (state=initialState, action) =>{
    console.log('inside reducer',action);
    switch (action.type) {
        case ADD_GOAL:{
            // console.log('inside reducercase',action);
            return{...state, goalList:state.goalList.concat({key:action.id.name,goal:action.goal})}
        }
        case DELETE_GOAL:{
            // console.log('inside reducercase',action.key);
            const updatedGoalList= state.goalList.filter((goal)=>goal.key!==action.key);
            return{...state,goalList: updatedGoalList}
        }
        case FETCH_GOALS:{

            return{...state,goalList: action.goals}
        }
        default:{
            // console.log('inside reducer default',action);
            return state;
        }
    }
};

export default GoalReducer;