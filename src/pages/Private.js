import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navabr'

class Private extends Component {
  render() {
    return (
      <div>
        <Navbar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <h1>Welcome Jackito</h1>
      </div>
    )
  }
}

export default withAuth(Private);