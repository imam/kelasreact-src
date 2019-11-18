import React, {Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

class ShowSiswa extends Component{

  constructor(props){
  	super(props)
  	this.state = {
    	name: '',
    	age: ''
    }
  }

  async componentDidMount() {
    const {data} = await axios.get('https://belajar-rest.herokuapp.com/v1/users/' + this.props.match.params.id)

	this.setState({name: data.name, age: data.age})
  }

  render() {
    return <div>
      <h1>{this.state.name ? this.state.name : 'Nama belum ada' }</h1>
      <div>{this.state.age ? this.state.age : 'Usia belum ada'}</div>
    </div>
  }
}

module.exports = ShowSiswa