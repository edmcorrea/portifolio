import React from 'react';
import Header from '../components/header';
import ProjectsDetails from '../components/projects.details';
import { mockBack } from '../mocks-projects/mock.back';
import { mockFront } from '../mocks-projects/mock.front';
import '../styles/projects.css';

class Projects extends React.Component {
  state = {
    back: true,
    full: false,
    front: false
  }

  handleClick = (value) => {
    // const { back, full, front } = this.state;
    if(value ==='back') {
      this.setState({ back: true, full: false, front: false })
    }
    if(value ==='full') {
      this.setState({ back: false, full: true, front: false })
    }
    if(value ==='front') {
      this.setState({ back: false, full: false, front: true })
    }
  }

  render() {
    const { back, full, front } = this.state;
    return (
      <div className='project-page'>
        <Header routeHeader="Contact"/>
        <section className='intro-project'>
          <div className='name-project'>
            <h1>Meus</h1>
            <h1 className='red'>Projetos</h1>
            <h1 className='red'>Recentes</h1>
          </div>
          <div className='projects-button'>
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
            <button
              className={ `${front}` }
              type='button'
              onClick={() => this.handleClick('front')}
            >
              Front-End
            </button>
          </div>
          <div className='projects'>
            {back && mockBack.map((project) => <ProjectsDetails mock={project}/>)}
            {full && mockFront.map((project) => <ProjectsDetails mock={project} />)}
            {front && mockFront.map((project) => <ProjectsDetails mock={project} />)}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
