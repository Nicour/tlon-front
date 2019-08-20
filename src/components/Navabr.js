import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-router-dom'
import withAuth from '../components/withAuth.js';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="side-menu-container">
          <Menu>
            <Link className="menu-item" to="/">
              My profile
            </Link>
            <Link className="menu-item" to="/">
              Favorites
            </Link>
            <Link className="menu-item" to="/">
              My books
            </Link>
            <Link className="menu-item" to="/books/create">
              Add new book
            </Link>
            <Link onClick={this.props.logout} className="menu-item" to="/">
              Logout
            </Link>
          </Menu>
        </div>
        <div>
          <Link to="/"><h1>TLÖN</h1></Link>
        </div>
      </div>
    );
  };
}

export default withAuth(Navbar)
