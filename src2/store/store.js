import {createStore, combineReducers, applyMiddleware} from 'redux';
import AppFeaturesReducer from './reducers/AppFeaturesReducer';
import ImageFeedReducer from './reducers/ImageFeedReducer';
import movieDetailsReducer from './reducers/movieDetailsReducer';
import HomePageReducer from './reducers/HomePageReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        AppFeaturesReducer,
        ImageFeedReducer,
        movieDetailsReducer,
        HomePageReducer,
    }
);
const configureStore =()=>createStore(rootReducer,applyMiddleware(ReduxThunk));

export default configureStore;