import React from 'react';
import {Link} from 'react-router'

const Main = React.createClass({
	render(){
		return(
			<div>
				<h1>
					<Link to="/"> REDUXSTAGRAM</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
});

export default Main;

//this.props.children is POPULATED by react-router



//REDUX
	//store: //one giant object holds all the data in the STORE (rather than in a component state).
	//action: something that HAPPENS on the application. WHNEVER something happens, an ACTION is dispatched, the DISPATCHED action contains 2 things: the type of action and (b) the payload of info


	//WE ARE INFUSING this MAIN component w/ the ACTION CREATORS & the DATA by creating a 2nd component that will do it