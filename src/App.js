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

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const searchUsers = async (text) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
      )
      .then((res) => setUsers(res.data.items), setLoading(false));
  };

  const getUser = async (userName) => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
      )
      .then((res) => setUser(res.data), setLoading(false));
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setMyAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

  return (
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
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setMyAlert={setMyAlert}
                  />
                  <Users loading={loading} users={users} />
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
                  user={user}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
