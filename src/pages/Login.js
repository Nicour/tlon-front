import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import withAuth from '../components/withAuth';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state
    this.props.login({ username, password })
    .then( (user) => {
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="log-form">
        <h1 className='title'>TLÖN</h1>
        <form onSubmit={this.handleFormSubmit} >
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Login' className="button"/>
        </form>

        <p>You don't have an accout yet?
          <Link to={'/signup'} className="signup"> Signup</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Login);