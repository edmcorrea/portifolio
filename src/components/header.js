import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { routeHeader } = this.props;
    return (
      <div className='header'>
        <Link className='headLinks' to="/">
          <h4>Corrêa.</h4>
          <p>Home</p>
        </Link>
        {/* <p>Traduzir</p> */}
        <Link to={`/${routeHeader}`}>
          <h4>Corrêa.</h4>
          <p>{routeHeader}</p>
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  routeHeader: PropTypes.string
};

export default Header;