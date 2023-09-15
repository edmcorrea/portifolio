import React from 'react';
import Header from '../../components/Header/header';
import ProjectsDetails from '../../components/projects.details';
import { mockBack } from '../../mocks-projects/mock.back';
import { mockFront } from '../../mocks-projects/mock.front';
import { mockFull } from '../../mocks-projects/mock.full';
import './projects.css';
import { mockAll } from '../../mocks-projects/mock.all';

class Projects extends React.Component {
  state = {
    all: false,
    back: false,
    full: false,
    front: true
  }

  // titleProjects = [
  //   'All',
  //   'Landing Pages',
  //   'Websites',
  //   'E-commerces',
  //   'Aplicativos'
  // ];

  handleClick = (value) => {
    if(value ==='all') {
      this.setState({ all: true, back: false, full: false, front: false })
    }
    if(value ==='back') {
      this.setState({ all: false, back: true, full: false, front: false })
    }
    if(value ==='full') {
      this.setState({ all: false, back: false, full: true, front: false })
    }
    if(value ==='front') {
      this.setState({ all: false, back: false, full: false, front: true })
    }
  }

  render() {
    const { all, back, full, front } = this.state;
    return (
      <div className='project-page'>
        <Header routeHeader="Contato"/>
        <section className='intro-project'>
          <div className='name-project'>
            <h1>Meus</h1>
            <h1 className='red'>Projetos</h1>
            <h1 className='red'>Recentes</h1>
          </div>
          <div className='projects-button'>
            <button
              className={ `${all}` }
              type='button'
              onClick={() => this.handleClick('all')}
            >
              All
            </button>
            <button
              className={ `${front}` }
              type='button'
              onClick={() => this.handleClick('front')}
            >
              Front-End
            </button>
            <button
              className={ `${back}` }
              type='button'
              onClick={() => this.handleClick('back')}
            >
              Back-End
            </button>
            <button
              className={ `${full}` }
              type='button'
              onClick={() => this.handleClick('full')}
            >
              Full-Stack
            </button>
          </div>
          <div className='projects'>
            {all && mockAll.map((project) => <ProjectsDetails mock={project}/>)}
            {back && mockBack.map((project) => <ProjectsDetails mock={project}/>)}
            {full && mockFull.map((project) => <ProjectsDetails mock={project} />)}
            {front && mockFront.map((project) => <ProjectsDetails mock={project} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
