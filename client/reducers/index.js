// import {combineReducers} from 'redux';

import { combineReducers } from 'seedux';

// import { combineReducers } from './../../seedux/lib/redux/dist/redux';

import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';


const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer
});

export default rootReducer;