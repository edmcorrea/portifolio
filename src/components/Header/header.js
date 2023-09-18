import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Link } from 'react-router-dom';

function Header({ routeHeader }) {
  return (
    <div className='header'>
      <Link className='headLinks' to="/">
        <h4>Corrêa.</h4>
        <span>Home</span>
      </Link>
      {/* <p>Traduzir</p> */}
      {/* <Link to={`/${routeHeader}`}>
        <h4>Corrêa.</h4>
        <p>{routeHeader}</p>
      </Link> */}
    </div>
  );
}

Header.propTypes = {
  routeHeader: PropTypes.string
};

export default Header;