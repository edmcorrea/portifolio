import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import LanguageBtn from '../../components/LanguageBtn/languageBtn';


class HomePt extends React.Component {
  state = {
    hoverAbout: false,
    hoverWork: false,
    hoverContact: false
  }

  hoverHandler = (value) => {
    const { hoverAbout, hoverWork, hoverContact } = this.state;
    if(value === 'about') {
      this.setState({ hoverAbout: !hoverAbout });
    };
    if(value === 'projects') {
      this.setState({ hoverWork: !hoverWork });
    };
    if(value === 'contact') {
      this.setState({ hoverContact: !hoverContact });
    };
  }

  render() {
    const { hoverAbout, hoverWork, hoverContact } = this.state;
    return (
      <div className='home-pt'>
        <section className='home-sectionTexts'>
          <section className='home-child-sections'>
            { hoverAbout
            ? (
            <Link
              to="/about" className='links'
              onMouseLeave={() => this.hoverHandler('about')}
            >
              Sobre
            </Link>
            ) : (
            <p className='static' onMouseEnter={() => this.hoverHandler('about')}>Olá.</p>
            )}
          </section>
          <section className='home-child-sections'>
            { hoverWork
            ? (
            <Link
              to="/projects" className='links red'
              onMouseLeave={() => this.hoverHandler('projects')}
            >
              Projetos
            </Link>
            ) : (
            <p className='static red' onMouseEnter={() => this.hoverHandler('projects')}>Eu Sou</p>
            )}
          </section>
          <section className='home-child-sections'>
            { hoverContact
            ? (
            <Link
              to="/contact" className='links red'
              onMouseLeave={() => this.hoverHandler('contact')}
            >
              Contato
            </Link>
            ) : (
            <p className='static red' onMouseEnter={() => this.hoverHandler('contact')}>E. Corrêa</p>
            )}
          </section>
        </section>
      </div>
    );
  }
}

export default HomePt;
