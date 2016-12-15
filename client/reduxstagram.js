import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';

// import { Provider } from 'seedux';
//provider from react-redux is the BINDING that allows you to use Redux w/ react

import { Provider } from 'react-redux';


//importing Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router dependencies
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


// IMPORTING THE STORE
import store, {history} from './store';

//build the Router Component . it needs a history object. The provider tag exposes the store to the actual application.
const router = (
	<Provider store={store}>
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
	</Provider>
)
//pass the router to render function
render(router, document.getElementById('root'));

// we are always starting @ reduxstagram, but the child will either be the singlepage component OR the photogrid component. This switching out(on the same page of the 2 components is done by react ROUTE

// You render react-router to the page and then it decides which components should render)
	//here, if it matches '/' then grab main component. Then, depending on url, pass in photogrid or single