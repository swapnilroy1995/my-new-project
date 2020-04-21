import {createStore, combineReducers} from 'redux';
import GoalReducer from './reducers/GoalReducer';
import AppFeaturesReducer from './reducers/AppFeaturesReducer';

const rootReducer = combineReducers(
    {
        GoalReducer,
        AppFeaturesReducer,
    }
);
const configureStore =()=>createStore(rootReducer);

export default configureStore;