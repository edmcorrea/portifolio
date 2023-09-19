import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import './contact.css';
import Context from '../../Context/Context';
import { contactEng, contactPor } from './mockLanguage';

function Contact() {
  const { selectedLanguage } = useContext(Context);
  const [toggleLng, setToggleLng] = useState({});

  useEffect(()=>{
    if(selectedLanguage==="eua") setToggleLng(contactEng);
    else setToggleLng(contactPor);
  },[selectedLanguage]);

  return (
    <div className='contact'>
      <Header routeHeader="Sobre"/>
      <div className='intro-contact'>
        <section className='name-contact'>
          <h1>{toggleLng.title1}</h1>
          <h1 className='red'>{toggleLng.title2}</h1>
        </section>
        <section>
          <h2>{toggleLng.contact}</h2>
          <p>{toggleLng.paragraph1}</p>
          <p>{toggleLng.paragraph2}</p>
          <section className='hrefs'>
            <a className='red' href="mailto:edm.correa@hotmail.com">
              E-mail
            </a>
            <a className='red' href="https://www.linkedin.com/in/edmilsoncorrea/" target="_blank" rel="noreferrer">
              Linkedin
            </a>
            <a className='red' href="https://github.com/edmcorrea" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className='red' href="https://wa.me/5575992027967" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Contact;
