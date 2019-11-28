import axios from 'axios'
const isUserExist = (users, id) => {
	return users.filter(user => user.id == id).length > 0
}

const getUserByIdFromUsersObject = (users, id) => {
	return users.filter(user => user.id == id)[0]
}

const getUserById = async (users, user_id, addUserToUsers) => {
	let data;
	if(!isUserExist(users, user_id)) {
      const req = await axios.get('https://belajar-rest.herokuapp.com/v1/users/' + user_id)
      data = req.data
      addUserToUsers(data)
    } else {
      data = getUserByIdFromUsersObject(users, user_id)
    }
    return data
}

export {
	getUserById
}

