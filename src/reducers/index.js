import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    x: counterReducer,
    y: loggedReducer
});

export default allReducers;