import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

import AnonRoute from './components/AnonRoute'
import PrivateRoute from './components/PrivateRoute'

import AuthProvider from './contexts/auth-context';

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <Switch>
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/" exact component={Login} />
              <PrivateRoute path="/private" exact component={Private} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
