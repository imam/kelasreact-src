import React, {Component} from 'react'
import axios from 'axios'
import {Container, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {getUserById} from '../services/user'
import {connect} from 'react-redux'
import {addUserToUsers} from '../redux/actions'

class EditSiswa extends Component{
  constructor(props){ 
    super(props);
    
    this.state = {name: '', age: '', submitting:false, loaded: false}
  }
  
  async componentDidMount() {
    const data = await getUserById(this.props.users, this.props.match.params.id, this.props.addUserToUsers)
    this.setState({name: data.name, age: data.age, loaded: true})
  }
  
  onSubmit = async () => {
    this.setState({submitting: true})
    const {data} = await axios.post('https://belajar-rest.herokuapp.com/v1/users/' + this.props.match.params.id, {name: this.state.name, age: this.state.age})
  	this.setState({submitting: false})
  	this.props.onNameChange(data.name)
  	this.props.onAgeChange(data.age)
  }
  
  changeName = (event) =>{
    this.setState({name: event.target.value})
  }
  
  changeAge = (event) =>{
    this.setState({age: event.target.value})
  }
  
  render() {
    return (
    <Container>
      <div><input disabled={!this.state.loaded} value={this.state.name} placeholder="Nama" onChange={this.changeName}/></div>
      <div><input disabled={!this.state.loaded} value={this.state.age} onChange={this.changeAge} placeholder="Usia"/></div>
      <Button color="primary" disabled={!this.state.loaded || this.state.submitting} onClick={this.onSubmit}>{this.state.submitting ? 'Sedang Mensubmit...' : 'Submit'}</Button>
      <Link className="btn btn-danger" to={"/user/" + this.props.match.params.id}>Cancel</Link>
    </Container>)
  }
}

export default connect(state => {
  return {users: state.users}
}, {addUserToUsers})(EditSiswa)