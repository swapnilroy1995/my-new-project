import { FETCH_LIST} from './../actionTypes';

export const fetchHomeCoinsList=(goal) => {
    // console.log('inside action123',goal);
    let list=[];
    return async dispatch=> {
       await fetch('http://13.127.138.63:8080/api/v1/cryptocompare/coin_pricing_list/',
            {
                method: 'GET',
                headers:{
                    'Content-Type':'application/json'
                },
            }
            ).then((response)=>
                response.json()
    ).then(responseJson=>list=responseJson);
	console.log('inside state FETCH_LIST', list)

       if(list.code===200){
		   dispatch ({type: FETCH_LIST,
				list: list,
       })}
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
            type:FETCH_LIST,
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
            type:FETCH_LIST,
            key:key
        })
    }
};