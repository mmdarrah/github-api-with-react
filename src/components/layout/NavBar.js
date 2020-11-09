import React from 'react';
import propTypes from 'prop-types';

const NavBar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
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
