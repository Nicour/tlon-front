import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import Navbar from './components/Navabr.js';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

import './App.css';
import 'milligram';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/private" exact component={Private} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
