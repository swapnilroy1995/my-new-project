import {createStore, combineReducers, applyMiddleware} from 'redux';
import movieDetailsReducer from './reducers/movieDetailsReducer';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers(
    {
        movieDetailsReducer,
    }
);
const configureStore =()=>createStore(rootReducer,applyMiddleware(ReduxThunk));

export default configureStore;