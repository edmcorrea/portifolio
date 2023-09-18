import React from 'react';
import Header from '../../components/Header/header';
import './about.css';
import frontSkill from '../../images/front-skills.png';
import backSkill from '../../images/back-skills.png';
import dsSkill from '../../images/data-science-skills.png';
import edImage from '../../images/edmilson-ai.png';
import { BackLanguages, BackTools, DataTools, ExtraTools, FrontLanguages, FrontTools, PTIntroductionText } from './mocks';

function About() {
  return (
    <div className='about'>
      <Header routeHeader="Projetos" />
      <section className='intro-about'>
        <div className='name-about'>
          <section className='row'>
            <h1 className='red name-about'>Programador</h1>
            <h1 className=''>por Paixão,</h1>
          </section>
          <section className='row'>
            <h1 className='red name-about'>Eng. Civil</h1>
            <h1 className=''>por Formação,</h1>
          </section>
          <section className='row'>
            <h1 className='red name-about'>Professor</h1>
            <h1 className=''>nas Horas Vagas.</h1>
          </section>
          <section className="about-img-container">
            <img
              className="about-img"
              src={edImage}
              alt="edmilson-ai"
            />
          </section>
        </div>
        <div>
          {PTIntroductionText.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </section>
      <section className='skills'>
        <h1>Hard Skills</h1>
        <section className='back-front'>
          <div>
            <img className='skill-img' src={frontSkill} alt="front-img" />
            <h2>Front-End</h2>
            <h4>Linguagem que domino:</h4>
            <ul>
              {FrontLanguages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
            <h4>Ferramentas Dev:</h4>
            <ul>
              {FrontTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <img className='skill-img' src={backSkill} alt="back-img" />
            <h2>Back-End</h2>
            <h4>Linguagem que domino:</h4>
            <ul>
              {BackLanguages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
            <h4>Ferramentas Dev:</h4>
            <ul>
              {BackTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <img className='skill-img' src={dsSkill} alt="data-science-img" />
            <h2>Ciência de Dados</h2>
            <h4>Linguagem que domino:</h4>
            <ul>
              <li>Python</li>
            </ul>
            <h4>Ferramentas Dev:</h4>
            <ul>
              {DataTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className='adicionais'>
          <h2>Adicionais</h2>
          <ul>
            {ExtraTools.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
