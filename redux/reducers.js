import produce from "immer"

const initialState = {
	user: {},
	users: []
}

const siswaApp = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN': 
			return produce(state, newState => {
				newState.user = action.user;
			})			
		case 'ADD_USER_TO_USERS': 
			return produce(state, newState => {
				newState.users.push(action.user)
			})
		default:
			return state;
	}
}

export default siswaApp