import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import {
	Container
} from 'reactstrap'
import {connect} from 'react-redux'
import {addUserToUsers} from '../redux/actions'
import {getUserById} from '../services/user'

class ShowSiswa extends Component{

  constructor(props){
  	super(props)
  	this.state = {
    	name: '',
    	age: ''
    }
  }

  isUserExist(users, id) {
    return users.filter(user => user.id == id).length > 0
  }

  getUserById(users, id) {
    return users.filter(user => user.id == id)[0]
  }

  async componentDidMount() {
    const users = this.props.users;
    const user_id = this.props.match.params.id

    const data = await getUserById(users, user_id, this.props.addUserToUsers)

  	this.setState({name: data.name, age: data.age})
  }

  render() {
    return <Container>
      <h1>{this.state.name ? this.state.name : 'Nama belum ada' }</h1>
      <div>{this.state.age ? this.state.age : 'Usia belum ada'}</div>
      <Link className="btn btn-primary" to={"/user/"+ this.props.match.params.id +"/edit"}>Edit Siswa</Link>
    </Container>
  }
}

export default connect((state) => {
  return {
    users: state.users
  }
}, {addUserToUsers})(ShowSiswa)