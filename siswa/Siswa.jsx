import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditSiswa from './EditSiswa'
import ShowSiswa from './ShowSiswa'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'
import { connect } from 'react-redux'

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
    return <Router>
	    <div>
        <div>Halo, {this.props.user && this.props.user.name}</div>      
	    	<Switch>
	    		<Route path="/user/:id/edit" component={EditSiswa}>
	    		</Route>
	    		<Route path="/user/:id" component={ShowSiswa}>
	    		</Route>
	    		<Route path="/">
	    			<div>Halo dunia!</div>
	    			<Link to="/user/12">Show user</Link>
	    		</Route>
	    	</Switch>
	    </div>
    </Router>
  }
}

module.exports = connect(
  (state) => {
    return {user: state.user}
  })(Siswa)