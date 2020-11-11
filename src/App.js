import React, { useState } from 'react';
import './App.css';
import NavBar from '../src/components/layout/NavBar';
import Users from '../src/components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from '../src/components/layout/Alert';
function App() {
  const [users, setUsers] = useState([]);
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
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setMyAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <div className='App'>
      <NavBar title='Github Finder' icon='fab fa-github' />
      <div className='container'>
        <Alert alert={alert} />
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={users.length > 0 ? true : false}
          setMyAlert={setMyAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
