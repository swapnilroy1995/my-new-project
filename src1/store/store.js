import {createStore, combineReducers, applyMiddleware} from 'redux';
import GoalReducer from './reducers/GoalReducer';
import AppFeaturesReducer from './reducers/AppFeaturesReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        GoalReducer,
        AppFeaturesReducer,
    }
);
const configureStore =()=>createStore(rootReducer,applyMiddleware(ReduxThunk));

export default configureStore;