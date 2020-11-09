import React, { Component } from 'react';
import propTypes from 'prop-types';

export class NavBar extends Component {
  static defaultProps = {
    title: 'Title',
    icon: 'fab fa-react',
  };

  static propTypes = {
    title: propTypes.string,
    icon: propTypes.string,
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default NavBar;
