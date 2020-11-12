import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  title: 'Title',
  icon: 'fab fa-react',
};
NavBar.propTypes = {
  title: propTypes.string,
  icon: propTypes.string,
};

export default NavBar;
