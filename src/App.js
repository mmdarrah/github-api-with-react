import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from '../src/components/layout/NavBar';
import Users from '../src/components/users/Users';
import axios from 'axios';
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLINT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLINT_SECRET}`
      )
      .then((res) => setUsers(res.data), setLoading(false));
  }, []);

  return (
    <div className='App'>
      <NavBar title='Github Finder' icon='fab fa-github' />
      <div className='container'>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
