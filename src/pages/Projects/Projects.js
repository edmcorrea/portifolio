import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import ProjectsDetails from '../../components/projects.details';
import { mockBack } from '../../mocks-projects/mock.back';
import { mockFront } from '../../mocks-projects/mock.front';
import { mockFull } from '../../mocks-projects/mock.full';
import './projects.css';
import { mockAll } from '../../mocks-projects/mock.all';
import Context from '../../Context/Context';
import { projectsEng, projectsPor } from './mockLanguage';

function Projects() {
  const [category, setCategory] = useState('front');
  const { selectedLanguage } = useContext(Context);
  const [toggleLng, setToggleLng] = useState({});

  useEffect(()=>{
    if(selectedLanguage==="eua") setToggleLng(projectsEng);
    else setToggleLng(projectsPor);
  },[selectedLanguage]);

  const categoryData = {
    all: mockAll,
    front: mockFront,
    back: mockBack,
    full: mockFull,
  };

  const handleClick = (value) => {
    setCategory(value);
  };

  const projects = categoryData[category];

  return (
    <div className='project-page'>
      <Header routeHeader="Contato"/>
      <section className='intro-project'>
        <div className='name-project'>
          <h1>{toggleLng.title1}</h1>
          <h1 className='red'>{toggleLng.title2}</h1>
          <h1 className='red'>{toggleLng.title3}</h1>
        </div>
        <div className='projects-button'>
          {Object.keys(categoryData).map((cat) => (
            <button
              key={cat}
              className={category === cat ? 'active' : 'notActive'}
              type='button'
              onClick={() => handleClick(cat)}
            >
              {cat === 'all' ? 'All' : `${cat.charAt(0).toUpperCase()}${cat.slice(1)}`}
            </button>
          ))}
        </div>
        <div className="projects">
          {projects.map((project) => (
            <ProjectsDetails key={project.id} mock={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
