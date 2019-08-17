import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AddBook from './pages/AddBook'
import BookDetails from './pages/BookDetails'
import NotFound from './pages/NotFound'

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
              <AnonRoute path="/logout" exact component={Login} />
              <PrivateRoute path="/private" exact component={Private} />
              <PrivateRoute exact path="/books/create" component={AddBook}/>
              <PrivateRoute exact path="/books/:id/update" component={BookDetails}/>
              <Route exact component={NotFound}/>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
