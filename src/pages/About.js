import React from 'react';
import Header from '../components/header';
import '../styles/about.css';
import frontSkill from '../images/front-skills.png';
import backSkill from '../images/back-skills.png';
import dsSkill from '../images/data-science-skills.png';
import edImage from '../images/edmilson-ai.png';


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
            <section className="about-img-container">
                <img
                  className="about-img"
                  src={edImage}
                  alt="edmilson-ai"
                />
            </section>
          </div>
          <div>
            <p>Com 1 ano de experiência na área de programação, meu desejo é sempre superar minhas próprias expectatvas e ser um agente de mudanças.</p>
            <p>Com mais de 12 anos de experiência em Educação e formado em Engenharia Civil com 4 anos de experiência, já coordenei profissionais em construções residenciais e shopping.</p>
            <p>Minha paixão por tecnologia veio durante um projeto de uma startup que idealizei mais um colega (engenheiro da computação), que consiste em uma impressora 3D de grande porte que imprime casas residenciais. Desde então, mergulhei de cabeça na área da programação e estou maravilhado.</p>
            <p>Apesar de não perder o interesse pela área de formação, me encontrei na área de desenvolvimento, que atiçou meu gosto por lógica, raciocínio e inovação.</p>
            <p>Na área de programação, busco por uma empresa que impacte a sociedade positivamente, com grandes sonhos e com o objetivo principal a satisfação do cliente.</p>
          </div>
        </section>
        <section className='skills'>
          <h1>Hard Skills</h1>
          <section className='back-front'>
            <div>
              <img className='skill-img' src={frontSkill} alt="front-img"/>
              <h2>Front-End</h2>
              <h4>Linguagem que domino:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.Js</li>
                <li>Next.Js</li>
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
                <li>UI / UX</li>
              </ul>
            </div>
            <div>
              <img className='skill-img' src={backSkill} alt="back-img"/>
              <h2>Back-End</h2>
              <h4>Linguagem que domino:</h4>
              <ul>
                <li>Node.Js</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>C# / .Net</li>
              </ul>
              <h4>Ferramentas Dev:</h4>
              <ul>
                <li>Express</li>
                <li>Sequelize</li>
                <li>MySQL - PostgreSQL</li>
                <li>API Restful</li>
                <li>POO / SOLID</li>
              </ul>
            </div>
            <div>
            <img className='skill-img' src={dsSkill} alt="data-science-img"/>
              <h2>Ciência de Dados</h2>
              <h4>Linguagem que domino:</h4>
              <ul>
                <li>Python</li>
              </ul>
              <h4>Ferramentas Dev:</h4>
              <ul>
                <li>Docker</li>
                <li>Big Data</li>
                <li>NoSQL</li>
                <li>MongoDB / Mongoose</li>
                <li>DevOps</li>
              </ul>
            </div>
          </section>
          <div className='adicionais'> 
            <h2>Adicionais</h2>
            <ul>
              <li>Slack</li>
              <li>GitHub - Git</li>
              <li>Figma</li>
              <li>Docker</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
