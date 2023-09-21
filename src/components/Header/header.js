import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Link } from 'react-router-dom';
import LanguageBtn from '../LanguageBtn/languageBtn';
import Context from '../../Context/Context';
import { headerEng, headerPor } from './mockLanguage';

function Header({ routeHeader }) {
  const { selectedLanguage } = useContext(Context);
  const [showToggle, setShowToggle] = useState(true);
  const [toggleLng, setToggleLng] = useState({});

  useEffect(()=>{
    if(selectedLanguage==="eua") setToggleLng(headerEng);
    else setToggleLng(headerPor);
  },[selectedLanguage]);

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
        {toggleLng.about}
        </Link>
        <Link className='headerRouter' to="/projects">
        {toggleLng.projects}
        </Link>
        <Link className='headerRouter' to="/contact">
        {toggleLng.contact}
        </Link>
        { showToggle && <LanguageBtn /> }
      </section>
    </div>
  );
}

Header.propTypes = {
  routeHeader: PropTypes.string
};

export default Header;