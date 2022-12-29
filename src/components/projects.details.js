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
      <div className='project'>
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
      </div>
    );
  }
}

export default ProjectsBack;