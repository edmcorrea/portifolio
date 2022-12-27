import React from 'react';
import Header from '../components/header';
import '../styles/about.css';

class About extends React.Component {
  render() {
    return (
      <div className='about'>
        <Header routeHeader="Projects"/>
        <section className='intro-about'>
          <div className='name-about'>
            <h1 className=''>Programador por Paixão,</h1>
            <h1 className=''>Eng. Civil por Formação,</h1>
            <h1 className=''>Professor nas Horas Vagas.</h1>
          </div>
          <p>Com 1 ano de experiência na área de programação, meu desejo é sempre superar minhas próprias expectatvas e ser um agente de mudanças.</p>
          <p>Como professor, desde os 12 anos de idade, estudava e trabalhava no curso Kumon e considero esse curso como o carro chefe da minha formação pessoal e profissional, pois habilidades como disciplina, habito de estudo, gerenciamento de tempo, autodidatismo e a curiosidade pelos porquês vieram desse período.</p>
          <p>Como engenharia civil, sou formado pela universidade estadual e tive lá meu primeiro contato e afinidade com a programação. Entretanto, embora alguns professores da engenharia da computação me orientassem trocar de área, eu acreditava que estaria satisfeito em qualquer área de atuação, contanto que envolvesse lógica, que sempre foi meu ponto forte.</p>
          <p>Após formado, entrei no mercado de trabalho na pandemia e para não ficar parado, peguei o dinheiro da minha formatura e investi em vendas na Amazon, onde trabalhei 2 anos. Na Amazon, descobri minha primeira paixão e o segredo para uma empresa realmente crescer: satisfazer o cliente. Em contrapartida, paralelamente, me juntei com mais 2 sócios e empreendemos na área de construção civil. Em quase 1 ano querendo fazer a empresa dar certo e tentando aplicar a ideia do `foco no cliente` aprendido na Amazon, reconheci que criar uma cultura não é tarefa fácil e tive que me reinventar. Além disso, sempre fiquei sujeito a retirar o dinheiro das vendas da internet para garantir o nível de entrega que eu julgava ideal. Nunca estive satisfeito de fato.</p>
          <p>Minha paixão por tecnologia veio durante um projeto de uma startup que idealizei mais um colega (engenheiro da computação), voltado para a área de construção civil, que consiste em uma impressora 3D que imprime casas residenciais. A fim de agilizar o projeto e por falta de tempo do outro socio, comecei meus estudos na área de desenvolvimento e reconheci esse interesse. Assim, para entrar na Trybe, abdiquei da empresa de reformas residenciais e me mantive apenas com a renda das vendas e atividades home-office de engenheiro civil.</p>
          <p>Por fim, falando sobre ambições, desejo seguir a área de desenvolvimento, fazer faculdade assim que possível e me persistir na área, pois é evidente que há maiores oportunidades no mercado para essa area.</p>
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
                <li>MongoDB</li>
                <li>API Restful</li>
                <li>POO</li>
                <li>SOLID</li>
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
