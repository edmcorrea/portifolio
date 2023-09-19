import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import './about.css';
import frontSkill from '../../images/front-skills.png';
import backSkill from '../../images/back-skills.png';
import dsSkill from '../../images/data-science-skills.png';
import edImage from '../../images/edmilson-ai.png';
import { BackLanguages, BackTools, DataTools, ExtraTools, FrontLanguages, FrontTools, aboutEng, aboutPor } from './mockLanguage';
import Context from '../../Context/Context';

function About() {
  const { selectedLanguage } = useContext(Context);
  const [toggleLng, setToggleLng] = useState({});

  useEffect(()=>{
    if(selectedLanguage==="eua") setToggleLng(aboutEng);
    else setToggleLng(aboutPor);
  },[selectedLanguage]);

  return (
    <div className='about'>
      <Header routeHeader="Projetos" />
      <section className='intro-about'>
        <div className='name-about'>
          <section className='row'>
            <h1 className='red name-about'>{toggleLng.title1}</h1>
            <h1 className=''>{toggleLng.title2}</h1>
          </section>
          <section className='row'>
            <h1 className='red name-about'>{toggleLng.title3}</h1>
            <h1 className=''>{toggleLng.title4}</h1>
          </section>
          <section className='row'>
            <h1 className='red name-about'>{toggleLng.title5}</h1>
            <h1 className=''>{toggleLng.title6}</h1>
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
          <p>{toggleLng.paragraph1}</p>
          <p>{toggleLng.paragraph2}</p>
          <p>{toggleLng.paragraph3}</p>
          <p>{toggleLng.paragraph4}</p>
          <p>{toggleLng.paragraph5}</p>
        </div>
      </section>
      <section className='skills'>
        <h1>Hard Skills</h1>
        <section className='back-front'>
          <div>
            <img className='skill-img' src={frontSkill} alt="front-img" />
            <h2>Front-End</h2>
            <h4>{toggleLng.domain}</h4>
            <ul>
              {FrontLanguages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
            <h4>{toggleLng.tools}</h4>
            <ul>
              {FrontTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <img className='skill-img' src={backSkill} alt="back-img" />
            <h2>Back-End</h2>
            <h4>{toggleLng.domain}</h4>
            <ul>
              {BackLanguages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
              ))}
            </ul>
            <h4>{toggleLng.tools}</h4>
            <ul>
              {BackTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
          <div>
            <img className='skill-img' src={dsSkill} alt="data-science-img" />
            <h2>{toggleLng.science}</h2>
            <h4>{toggleLng.domain}</h4>
            <ul>
              <li>Python</li>
            </ul>
            <h4>{toggleLng.tools}</h4>
            <ul>
              {DataTools.map((tool, idx) => (
                <li key={idx}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
        <div className='adicionais'>
          <h2>{toggleLng.adictions}</h2>
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
