// Each action creator is a function taking in data w/ a type and payload. The action creator RETURNS an object.

// increment likes
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment to a particular picture
export function addComment(postId, author, comment){
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}


// remove comment
export function removeComment(postId, i){
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}




