import React from 'react';
import Header from '../components/header';
import '../styles/contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className='contact'>
        <Header routeHeader="Sobre"/>
        <div className='intro-contact'>
          <section className='name-contact'>
            <h1>Estou à procura de</h1>
            <h1 className='red'>Novos Desafios</h1>
          </section>
          <section>
            <h2>Contato</h2>
            <p>
            Estou procurando oportunidades para colaborar com empresas/agências/indivíduos, não apenas trabalhar para eles. Quero levar minha experiência para um ambiente onde podemos trabalhar juntos para resolver problemas reais de uma forma que coloquemos em hamonia nossas experiências para um objetivo em comum.
            </p>
            <p>
              Busco por uma empresa que impacte a sociedade, com grandes sonhos, mente aberta (onde os egos estão fora de questão) e com o objetivo principal de satisfazer o cliente. Se faz sentido para você, então podemos caminhar juntos.
            </p>
           <section className='hrefs'>
            <a className='red' href="mailto:edm.correa@hotmail.com">
                E-mail
              </a>
              <a className='red' href="https://www.linkedin.com/in/edmilsoncorrea/" target="_blank" rel="noreferrer">
                Linkendin
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
}

export default Contact;