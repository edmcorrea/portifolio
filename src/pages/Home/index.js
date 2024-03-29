import React, { useContext, useEffect, useState } from 'react';
import './home.css';
import LanguageBtn from '../../components/LanguageBtn/languageBtn';
import Context from '../../Context/Context';
import { homeEng, homePor } from './mockLanguage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BackgroundImg from './backgroundImg';

function Home() {
  const { selectedLanguage, setActiveLink } = useContext(Context);

  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);
  const [toggleLng, setToggleLng] = useState({});

  useEffect(()=>{
    if(selectedLanguage==="eua") setToggleLng(homeEng);
    else setToggleLng(homePor);
  },[selectedLanguage]);

  const hoverHandler = (value) => {
    if (value === 'about') {
      setHoverAbout(!hoverAbout);
    }
    if (value === 'projects') {
      setHoverWork(!hoverWork);
    }
    if (value === 'contact') {
      setHoverContact(!hoverContact);
    }
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='home'>
      <div className='home-pt'>
        <section className='home-sectionTexts'>
          <section className='home-child-sections'>
            {hoverAbout ? (
              <Link
                to="/about"
                className='links'
                onMouseLeave={() => hoverHandler('about')}
                onClick={() => handleLinkClick('/about')}
              >
                {toggleLng.about}
                
              </Link>
            ) : (
              <p className='static' onMouseEnter={() => hoverHandler('about')}>
                {toggleLng.hi}
              </p>
            )}
          </section>
          <section className='home-child-sections'>
            {hoverWork ? (
              <Link
                to="/projects"
                className='links red'
                onMouseLeave={() => hoverHandler('projects')}
                onClick={() => handleLinkClick('/projects')}
              >
                {toggleLng.projects}
              </Link>
            ) : (
              <p className='static red' onMouseEnter={() => hoverHandler('projects')}>
                {toggleLng.i}
              </p>
            )}
          </section>
          <section className='home-child-sections'>
            {hoverContact ? (
              <Link
                to="/contact"
                className='links red'
                onMouseLeave={() => hoverHandler('contact')}
                onClick={() => handleLinkClick('/contact')}
              >
                {toggleLng.contact}
              </Link>
            ) : (
              <p className='static red' onMouseEnter={() => hoverHandler('contact')}>
                {toggleLng.name}
              </p>
            )}
          </section>
        </section>
        <section className='home-subtitle'>
          <p>{toggleLng.subtitle}</p>
        </section>
      </div>
      <BackgroundImg />

      <section style={{ paddingBottom: '25px' }}>
        <LanguageBtn />
      </section>
    </div>
  );
}

export default Home;
