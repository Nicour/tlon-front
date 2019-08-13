import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import auth from '../services/auth-service';

class Signup extends Component {

  state = {
    username: '',
    password: '',
    email: ''
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;

    auth.signup({ username, password, email })
      .then( (user) => {
        this.setState({
            username: '',
            password: '',
            email: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, email } = this.state;
    return (
      <div className="log-form">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='email'>Mail</label>
          <input id='email' type='email' name='email' value={email} onChange={this.handleChange}/>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Signup' className="button"/>
        </form>

        <p>Already have account? 
          <Link to={'/'} className="signup"> Login</Link>
        </p>

      </div>
    )
  }
}

export default Signup;