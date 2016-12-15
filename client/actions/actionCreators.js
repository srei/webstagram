//increment links
export function increment(index){
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

//add comment
export function addComment(postId, author, comment){
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	}
}


//remove comment
export function removeComment(postId, i){
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}



// the change of the route -- happens w/ REDUX, w/ react router redux,
//
//
// HERE: each action creator is a function taking in data, it has a type and the rest of it is called a 'PAYLOAD'. the action creator RETURNS an object.

// only COMPONENTS can be hotreloaded
// THE OTHER SIDE OF THIS, is when these action creators are DISPATCHED (how it is handled to update the STORE) --> this is handled by the REDUCER,. (e.g. like a listener)



// EVERYTIME you dispatch/cause.  an action, EVERY SINGLE reducer will fire off, but you choose what to do w/ that. you have to write logic w/in the mini-reducers



// w/ react, you have pass things down via props all the way down to the level where you want to use it. BUT w/ REDUX you have the connect() function, you can connect it @ the level you need it.