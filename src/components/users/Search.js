import React, { useState } from 'react';
import propTypes from 'prop-types';

Search.propTypes = {
  searchUsers: propTypes.func.isRequired,
  clearUsers: propTypes.func.isRequired,
  setMyAlert: propTypes.func.isRequired,
  showClear: propTypes.bool.isRequired,
};

export default function Search(props) {
  const [text, setText] = useState('');

  const mySubmitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      props.setMyAlert('Please enter somthing', 'light');
    } else {
      props.searchUsers(text);
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
      {props.showClear && (
        <button className='btn btn-light btn-block' onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}
