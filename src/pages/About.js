import React from 'react';
import Header from '../components/header';
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <Header routeHeader="Projetos"/>
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
          </div>
          <p>Com 1 ano de experiência na área de programação, meu desejo é sempre superar minhas próprias expectatvas e ser um agente de mudanças.</p>
          <p>Com mais de 12 anos de experiência em Educação e formado em Engenharia Civil com 4 anos de experiência, já coordenei profissionais em construções residenciais e shopping.</p>
          <p>Minha paixão por tecnologia veio durante um projeto de uma startup que idealizei mais um colega (engenheiro da computação), que consiste em uma impressora 3D de grande porte que imprime casas residenciais. Desde então, mergulhei de cabeça na área da programação e estou maravilhado.</p>
          <p>Apesar de não perder o interesse pela área de formação, me encontrei na área de desenvolvimento, que atiçou meu gosto por lógica, raciocínio e inovação.</p>
          <p>Na área de programação, busco por uma empresa que impacte a sociedade positivamente, com grandes sonhos e com o objetivo principal a satisfação do cliente.</p>
        </section>
        <section className='skills'>
          <h1>Hard Skills</h1>
          <section className='back-front'>
            <div>
              <h2>Back-End</h2>
              <h4>Linguagem que domino:</h4>
              <ul>
                <li>Node.Js</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
              <h4>Ferramentas Dev:</h4>
              <ul>
                <li>Express</li>
                <li>Docker</li>
                <li>Sequelize</li>
                <li>MySQL - SQL</li>
                <li>MongoDB / Mongoose</li>
                <li>API Restful</li>
                <li>POO</li>
                <li>SOLID</li>
                <li>DevOps</li>
              </ul>
            </div>
            <div> 
              <h2>Front-End</h2>
              <h4>Linguagem que domino:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJs</li>
                <li>Javascript</li>
                <li>Typescript</li>
              </ul>
              <h4>Ferramentas Dev:</h4>
              <ul>
                <li>React-Redux</li>
                <li>React-Hooks</li>
                <li>Context-API</li>
                <li>Bootstrap</li>
                <li>SASS</li>
              </ul>
            </div>
          </section>
          <div className='adicionais'> 
            <h2>Adicionais</h2>
            <ul>
              <li>Slack</li>
              <li>GitHub - Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
