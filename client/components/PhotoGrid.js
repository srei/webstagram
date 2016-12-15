import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
	render(){
		return(
			<div className="photo-grid">
			{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		)
	}
});

export default PhotoGrid;

//			{this.props.posts.map} - LETS YOU LOOP OVER THE POSTS
//
//			Photo {...this.props}  -- is the Es6 Spread operator which will let you have access to the props actually containg the photo
//
//
//
//			key={i} i={i}/ -- we are passing 'I' becuase we will need access to it later on and you have no access to key in react.