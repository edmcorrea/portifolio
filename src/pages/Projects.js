import React from 'react';
import Header from '../components/header';
import ProjectsBack from '../components/projects.back';
import ProjectsFront from '../components/projects.front';
import ProjectsFull from '../components/projects.full';
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
      <div className='project'>
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
            {back && <ProjectsBack />}
            {full && <ProjectsFull />}
            {front && <ProjectsFront />}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
