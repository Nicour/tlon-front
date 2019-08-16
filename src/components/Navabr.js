import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";
import withAuth from '../components/withAuth.js';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="side-menu-container">
          <Menu>
            <a className="menu-item" href="/">
              My profile
            </a>
            <a className="menu-item" href="/">
              Favorites
            </a>
            <a className="menu-item" href="/">
              My books
            </a>
            <a className="menu-item" href="/books/create">
              Add new book
            </a>
            <a onClick={this.props.logout} className="menu-item" href="/logout">
              Logout
            </a>
          </Menu>
        </div>
        <div>
          <a href="/"><h1>TLÖN</h1></a>
        </div>
      </div>
    );
  };
}

export default withAuth(Navbar)
