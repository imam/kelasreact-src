//Action creator
const addUserToUsers = (user) => {
	return {type: 'ADD_USER_TO_USERS', user}	
}

export {
	addUserToUsers
}