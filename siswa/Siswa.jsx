import React, {Component} from 'react'
import axios from 'axios'
import EditSiswa from './EditSiswa'
import ShowSiswa from './ShowSiswa'

class Siswa extends Component{
  constructor(props){
    super(props)
    this.state = {name : null, age: null, window: 'edit'}
  }
  
  async componentDidMount() {
    const {data} = await axios.get('https://belajar-rest.herokuapp.com/v1/users/91')
	this.setState({name: data.name, age: data.age})
  }
  
  changeWindowToEdit = () => {
    this.setState({window: 'edit'})
  }
  
  changeWindowToShow = () => {
    this.setState({window: 'show'})
  }
  
  setName = (name) => {
    this.setState({name: name})
  }
  
  setAge = (age) => {
    this.setState({age: age})
  }
  
  render() {
    return <div>
      {this.state.window === "show" && <ShowSiswa name={this.state.name} age={this.state.age} />}
      {this.state.window === "edit" && <EditSiswa onNameChange={this.setName} onAgeChange={this.setAge}/>}
      {this.state.window !== "edit" && <button onClick={this.changeWindowToEdit}>Edit User</button>}
      {this.state.window !== "show" && <button onClick={this.changeWindowToShow}>Show User</button>}
    </div>
  }
}

module.exports = Siswa