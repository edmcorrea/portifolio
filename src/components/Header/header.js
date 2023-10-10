import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './header.css';
import { Link } from 'react-router-dom';
import LanguageBtn from '../LanguageBtn/languageBtn';
import Context from '../../Context/Context';
import { headerEng, headerPor } from './mockLanguage';

function Header() {
  const { selectedLanguage, activeLink, setActiveLink } = useContext(Context);
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
  },[]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='header'>
      <section id='menu'>
        <Link
          className={activeLink === '/' ? 'headerRouter' : 'linkNotActived'}
          to="/"
          onClick={() => handleLinkClick('/')}
        >
          Home
        </Link>
        <Link 
          className={activeLink === '/about' ? 'headerRouter' : 'linkNotActived'}
          to="/about"
          onClick={() => handleLinkClick('/about')}
        >
        {toggleLng.about}
        </Link>
        <Link
          className={activeLink === '/projects' ? 'headerRouter' : 'linkNotActived'}
          to="/projects"
          onClick={() => handleLinkClick('/projects')}
        >
        {toggleLng.projects}
        </Link>
        <Link
          className={activeLink === '/contact' ? 'headerRouter' : 'linkNotActived'}
          to="/contact"
          onClick={() => handleLinkClick('/contact')}
        >
        {toggleLng.contact}
        </Link>
        { showToggle && <LanguageBtn /> }
      </section>
    </div>
  );
}

export default Header;