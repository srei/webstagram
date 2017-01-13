// import {bindActionCreators} from 'redux';

import {bindActionCreators} from 'seedux';

// import {connect} from 'react-redux';
import { connect } from 'seedux';


import * as actionCreators from '../actions/actionCreators';

import Main from './Main';


function mapStateToProps(state){
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
		return bindActionCreators(actionCreators, dispatch)
}


// Taking data from the store and INJECTING it into the 'MAIN'
const App = connect(mapStateToProps, mapDispatchToProps)(Main);


export default App;
