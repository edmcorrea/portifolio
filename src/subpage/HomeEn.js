import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

class HomeEn extends React.Component {
  state = {
    hoverAbout: false,
    hoverWork: false,
    hoverContact: false
  }

  hoverHandlerAbout = () => {
    const { hoverAbout } = this.state;
    this.setState({ hoverAbout: !hoverAbout })
  }

  hoverHandlerWork = () => {
    const { hoverWork } = this.state;
    this.setState({ hoverWork: !hoverWork })
  }

  hoverHandlerContact = () => {
    const { hoverContact } = this.state;
    this.setState({ hoverContact: !hoverContact })
  }

  render() {
    const { hoverAbout, hoverWork, hoverContact } = this.state;
    return (
        <section className='home-section'>
          <section className='home-child-sections'>
            { hoverAbout
            ? (
            <Link
              to="/about" className='links'
              onMouseLeave={this.hoverHandlerAbout}
            >
              About
            </Link>
            ) : (
            <p className='static' onMouseEnter={this.hoverHandlerAbout}>Hello.</p>
            )}
          </section>
          <section className='home-child-sections'>
            { hoverWork
            ? (
            <Link
              to="/work" className='links red'
              onMouseLeave={this.hoverHandlerWork}
            >
              Work
            </Link>
            ) : (
            <p className='static red' onMouseEnter={this.hoverHandlerWork}>I am</p>
            )}
          </section>
          <section className='home-child-sections'>
            { hoverContact
            ? (
            <Link
              to="/contact" className='links red'
              onMouseLeave={this.hoverHandlerContact}
            >
              Contact
            </Link>
            ) : (
            <p className='static red' onMouseEnter={this.hoverHandlerContact}>E. Corrêa</p>
            )}
          </section>
        </section>
    );
  }
}

export default HomeEn;
