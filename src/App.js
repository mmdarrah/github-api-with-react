import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../src/components/layout/NavBar';
import Users from '../src/components/users/Users';
import User from '../src/components/users/User';
import Search from './components/users/Search';
import Alert from '../src/components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

const App = () => {
  const [alert, setAlert] = useState(null);

  // Add alert
  const setMyAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <NavBar title='Github Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search setMyAlert={setMyAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
