import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <div className="navbar">
    <Menu {...props}>
      <a className="menu-item" href="/private">
        My profile
      </a>
      <a className="menu-item" href="/">
        Favorites
      </a>
      <a className="menu-item" href="/">
        My books
      </a>
      <Link to='/books/create'>
        <a className="menu-item" href="/">
          Add new book
        </a>
      </Link>
      <a className="menu-item" href="/logout">
        Logout
      </a>
    </Menu>
      <h1>TLÖN</h1>
    </div>
  );
};
