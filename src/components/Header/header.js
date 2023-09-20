import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Link } from 'react-router-dom';
import LanguageBtn from '../LanguageBtn/languageBtn';

function Header({ routeHeader }) {
  const [showToggle, setShowToggle] = useState(true);

  const fixHeader = () => {
    let menu = document.getElementById('menu');
    menu.classList.add('menuPrincipal');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {menu.classList.add('menuFixo');
      menu.classList.remove('menuPrincipal');
      setShowToggle(false);
      } else {
        menu.classList.remove('menuFixo');
        menu.classList.add('menuPrincipal');
        setShowToggle(true);
      };
    });
  };

  useEffect(()=>{
    fixHeader();
  },[])

  return (
    <div className='header'>
      <section id='menu'>
        <Link className='headerHome' to="/">
          Home
        </Link>
        <Link className='headerRouter' to="/about">
          <h4>Sobre</h4>
        </Link>
        <Link className='headerRouter' to="/projects">
          <h4>Projetos</h4>
        </Link>
        <Link className='headerRouter' to="/contact">
          <h4>Contato</h4>
        </Link>
        { showToggle && <LanguageBtn /> }
      </section>
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