import {ADD_GOAL, DELETE_GOAL, EDIT_GOAL, FETCH_GOALS} from './../actionTypes';

export const addGoal=(goal) => {
    // console.log('inside action123',goal);
    let id='';
    return async dispatch=> {
       await fetch('https://react-native-self-project.firebaseio.com/goals.json',
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    goal
                })
            }
            ).then((response)=>
                response.json()
    ).then(responseJson=>id=responseJson);

       dispatch ({type: ADD_GOAL,
        goal: goal,
           id:id
       })
    }
};
export const fetchGoals=() =>{
    let goals=[];
   return async dispatch=>{
        await fetch('https://react-native-self-project.firebaseio.com/goals.json',
            {
                method:'GET',
            }
            )
            .then(response=>response.json())
            .then(responseJson=>{
                for(const key in responseJson){
                    goals.push({key:key,goal:responseJson[key].goal})
                }
            });
        // console.log('fetchgoals',goals);
        dispatch({
            type:FETCH_GOALS,
            goals:goals
        })
    }
};
export const deleteGoal=(key)=>{
    // console.log('inside delete action123',key);
    return async dispatch=>{
        await fetch(`https://react-native-self-project.firebaseio.com/goals/${key}.json`,
            {
                method:'DELETE',
            }
            )
            // .then(response=>response.json()).then(responseJson=>console.log('inside delete action', responseJson));

        dispatch({
            type:DELETE_GOAL,
            key:key
        })
    }
};