// import {createStore, compose} from 'redux';

import {createStore, dispatchLogger} from 'seedux';


import {applyMiddleware} from 'redux';

import {Provider} from 'react-redux'


//hooks up react router w/ REDUX
import {syncHistoryWithStore} from 'react-router-redux';

import {browserHistory} from 'react-router';

//import the combined reducers
import rootReducer from './reducers/index';

//import the data for the default view
import comments from './data/comments';
import posts from './data/posts';

//create an object for default data
const defaultState = {
	posts,
	comments
}
//seting up REDUX DEV TOOLS
// const enhancers = compose(
// 	window.devToolsExtension ? window.devToolsExtension() : f => f
// );

//creating Store && exporting it
// const store = createStore(rootReducer, defaultState, enhancers));


const store = createStore(rootReducer, defaultState, applyMiddleware(dispatchLogger));



export const history = syncHistoryWithStore(browserHistory, store);


//hot reloading REDUCERS (not just components )
if(module.hot){
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}
export default store;

