import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

Search.propTypes = {
  clearUsers: propTypes.func.isRequired,
  setMyAlert: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
};

export default function Search({ showClear, clearUsers, setMyAlert }) {
  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('');

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setMyAlert('Please enter somthing', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={mySubmitHandler} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users....'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
      {/* Show clear button if there are result */}
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}
