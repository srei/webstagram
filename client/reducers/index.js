// import {combineReducers} from 'redux';

import { combineReducers } from 'seedux';

// import { combineReducers } from './../../seedux/lib/redux/dist/redux';

import {routerReducer} from 'react-router-redux';

import posts from './posts';
import comments from './comments';


//this is the ROOT reducer, and you are combining them using the combineReducers method from redux.
const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer
});

export default rootReducer;