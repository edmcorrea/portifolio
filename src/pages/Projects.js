import React from 'react';
import Header from '../components/header';
import '../styles/projects.css';

class Work extends React.Component {
  render() {
    return (
      <div className='work'>
        <Header routeHeader="Contact"/>
        <h2>Meus</h2>
        <h2>Projetos</h2>
        <h2>MRecentes</h2>
        <button type='button'> Back-End </button>
        <button type='button'> Full-Stack </button>
        <button type='button'> Front-End </button>
      </div>
    );
  }
}

export default Work;
