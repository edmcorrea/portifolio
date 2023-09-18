import React, { useState } from 'react';

function ProjectsBack({ mock }) {
  const [hover, setHover] = useState(true);

  const hoverHandler = () => {
    setHover(!hover);
  };

  return (
    <div className='project-details'>
      <section className='project'>
        {hover ? (
          <div
            onMouseEnter={hoverHandler}
            style={{ backgroundImage: `url(${mock.bgImage})` }}
          >
            <p className='project-title'>{mock.title}</p>
          </div>
        ) : (
          <div
            onMouseLeave={hoverHandler}
            style={{ backgroundImage: `url(${mock.bgImage})` }}
          >
            <div className='project-mirror'>
              <p className='project-descript'>{mock.description}</p>
              <a className='btnRepo' href={mock.site} target="_blank" rel="noreferrer">
                Visite o Repositório
              </a>
            </div>
          </div>
        )}
      </section>
      <section className='project-skills'>
        {mock.skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </section>
    </div>
  );
}

export default ProjectsBack;
