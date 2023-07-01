import React from 'react';

class ProjectsBack extends React.Component {
  state = {
    hover: true
  }

  hoverHandler = () => {
    const { hover } = this.state;
    this.setState({ hover: !hover })
  }
  render() {
    const { mock } = this.props;
    const { hover } = this.state;
    return (
      <div className='project-details'>
        <section className='project'>
          { hover
          ? (
            <div
            onMouseEnter={this.hoverHandler}
            style={{ backgroundImage: `url(${mock.bgImage})` }}
            >
              <p className='project-title'>{mock.title}</p>
            </div>
          ) : (
            <div className='' onMouseLeave={this.hoverHandler}>
              <p className='project-descript'>{mock.description}</p>
              <a className='btnRepo' href={mock.site} target="_blank" rel="noreferrer">
                  Visite o Repositório
              </a>
            </div>
          )}
        </section>
        <section className='project-skills'>
          {mock.skills.map(skill => (
            <p>{skill}</p>
          ))}
        </section>
      </div>
    );
  }
}

export default ProjectsBack;