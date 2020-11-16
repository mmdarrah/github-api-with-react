import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from '../src/components/layout/NavBar';
import Users from '../src/components/users/Users';
import User from '../src/components/users/User';
import Search from './components/users/Search';
import Alert from '../src/components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Get a specific Github user
  const getUser = async (userName) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
      )
      .then((res) => setUser(res.data), setLoading(false));
  };

  // Get a specific user last 5 Repos
  const getUserRepos = async (userName) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
      )
      .then((res) => setRepos(res.data), setLoading(false));
  };

  // Clear users
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

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
                    <Search
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setMyAlert={setMyAlert}
                    />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    repos={repos}
                    getUserRepos={getUserRepos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
