import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courseReducer';
import posts from './postReducer';

export default combineReducers({
    routing: routerReducer,
    courses,
    posts
});
