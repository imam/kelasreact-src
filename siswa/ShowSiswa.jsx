import React, {Component} from 'react'

class ShowSiswa extends Component{
  render() {
    return <div>
      <h1>{this.props.name ? this.props.name : 'Nama belum ada' }</h1>
      <div>{this.props.age ? this.props.age : 'Usia belum ada'}</div>
    </div>
  }
}

module.exports = ShowSiswa