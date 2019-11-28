//Packages
import React from 'react'
import {render} from 'react-dom'
import axios from 'axios'

//Local files
import Siswa from './siswa/Siswa'
import { Provider } from 'react-redux'
import store from './redux/store'
import actions from './redux/actions'

window.store = store

render(<Provider store={store}>
		<Siswa/>
	</Provider>, document.getElementById('app'))