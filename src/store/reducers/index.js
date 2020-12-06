import { combineReducers } from 'redux';

import appReducer from './app';
import usesReducer from './user'

export default combineReducers({
    app: appReducer,
    user: usesReducer,
});