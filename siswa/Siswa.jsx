import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import EditSiswa from './EditSiswa'
import ShowSiswa from './ShowSiswa'

class Siswa extends Component{
  constructor(props){
    super(props)
    this.state = {
      name : null, 
      age: null, 
      window: 'show',
      students: [{name: 'Imam'}, {name: 'John'}, {name: 'Harry'}]
    }
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
    window.cobaaja = this.props
    return <Router>
	    <div>
	    	<Switch>
	    		<Route path="/user/:id/edit" component={EditSiswa}>
	    		</Route>
	    		<Route path="/user/:id" component={ShowSiswa}>
	    		</Route>
	    		<Route path="/">
	    			<div>Halo dunia!</div>
	    			<Link to="/user">Show user</Link>
	    		</Route>
	    	</Switch>
	    </div>
    </Router>
  }
}

module.exports = Siswa