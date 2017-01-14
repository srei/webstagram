// a reducer takes in a (A) action and (B) COPY of the current state and it returns an UPDATED COPY of the store
// the first time it runs, state equals nothing
function posts(state=[], action ){
	switch(action.type){
		case 'INCREMENT_LIKES' :
			//return updatedState
			console.log('incrementing likes');
			const i = action.index;
			return [
				...state.slice(0,i), //everything up and to
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i+1), //after updates
			]
		default:
			return state;
	}
}

export default posts;