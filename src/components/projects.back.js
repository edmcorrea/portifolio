import React from 'react';

class ProjectsBack extends React.Component {
  render() {
    return (
      <div>
        <p>oi</p>
        <p>ProjectsBack</p>
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
      </div>
    );
  }
}

export default ProjectsBack;