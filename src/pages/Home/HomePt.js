import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function HomePt() {
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

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

  return (
    <div className='home-pt'>
      <section className='home-sectionTexts'>
        <section className='home-child-sections'>
          {hoverAbout ? (
            <Link to="/about" className='links' onMouseLeave={() => hoverHandler('about')}>
              Sobre
            </Link>
          ) : (
            <p className='static' onMouseEnter={() => hoverHandler('about')}>
              Olá.
            </p>
          )}
        </section>
        <section className='home-child-sections'>
          {hoverWork ? (
            <Link
              to="/projects"
              className='links red'
              onMouseLeave={() => hoverHandler('projects')}
            >
              Projetos
            </Link>
          ) : (
            <p className='static red' onMouseEnter={() => hoverHandler('projects')}>
              Eu Sou
            </p>
          )}
        </section>
        <section className='home-child-sections'>
          {hoverContact ? (
            <Link
              to="/contact"
              className='links red'
              onMouseLeave={() => hoverHandler('contact')}
            >
              Contato
            </Link>
          ) : (
            <p className='static red' onMouseEnter={() => hoverHandler('contact')}>
              E. Corrêa
            </p>
          )}
        </section>
      </section>
    </div>
  );
}

export default HomePt;
