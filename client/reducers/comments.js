// a reducer takes in a (A) action and (B) COPY of the current state and it returns an UPDATED COPY of the store
// the first time it runs, state equals nothing
function postComments(state=[], action ){
	switch(action.type){
		case 'ADD_COMMENT':
			return [...state,  {
				user: action.author,
				text: action.comment
			}];
		case 'REMOVE_COMMENT':
			return [
			//from start to where we want to delet
				...state.slice(0, action.i),
				//after deletd one, to the end
				...state.slice(action.i + 1)
			]
		default:
			return state;
	}
	return state;
}


function comments(state=[], action ){
	if(typeof action.postId !== undefined){
		return {
			//TAKE CURERNT STATE
			...state,
			//overwrite this post w/ a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}

export default comments;

//reducer does the editing of state