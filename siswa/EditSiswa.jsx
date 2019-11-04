import React, {Component} from 'react'
import axios from 'axios'

class EditSiswa extends Component{
  constructor(props){ 
    super(props);
    
    this.state = {name: '', age: '', submitting:false}
  }
  
  async componentDidMount() {
    const {data} = await axios.get('https://belajar-rest.herokuapp.com/v1/users/91')
    this.setState({name: data.name, age: data.age})
  }
  
  onSubmit = async () => {
    this.setState({submitting: true})
    const {data} = await axios.post('https://belajar-rest.herokuapp.com/v1/users/91', {name: this.state.name, age: this.state.age})
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
    return <div>
      <div><input value={this.state.name} placeholder="Nama" onChange={this.changeName}/></div>
      <div><input value={this.state.age} onChange={this.changeAge} placeholder="Usia"/></div>
      <button onClick={this.onSubmit}>{this.state.submitting ? 'Sedang Mensubmit...' : 'Submit'}</button>
    </div>
  }
}

module.exports = EditSiswa