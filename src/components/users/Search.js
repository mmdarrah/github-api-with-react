import React, { useState } from 'react';
import propTypes from 'prop-types';

Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  setMyAlert: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
};

export default function Search({
  showClear,
  clearUsers,
  searchUsers,
  setMyAlert,
}) {
  const [text, setText] = useState('');

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      setMyAlert('Please enter somthing', 'light');
    } else {
      searchUsers(text);
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
