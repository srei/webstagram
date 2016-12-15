import React from 'react';
import Photo from './Photo';
import Comments from './Comments';


const Single = React.createClass({
	render() {
		//index of POST
		const  {postId} = this.props.params;

		const i = this.props.posts.findIndex((post) => post.code === postId);
		//the actual post
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];

		//render it
		return (
			<div className="single-photo">
		<Photo i={i} post={post} {...this.props} />
		<Comments postComments={postComments} {...this.props}>


		</Comments>
			</div>
		)
	}
});

export default Single;