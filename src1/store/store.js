import {createStore, combineReducers, applyMiddleware} from 'redux';
import GoalReducer from './reducers/GoalReducer';
import AppFeaturesReducer from './reducers/AppFeaturesReducer';
import ImageFeedReducer from './reducers/ImageFeedReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        GoalReducer,
        AppFeaturesReducer,
        ImageFeedReducer,
    }
);
const configureStore =()=>createStore(rootReducer,applyMiddleware(ReduxThunk));

export default configureStore;