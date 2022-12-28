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
      <div>
        <section className='project'>
          {hover
          ? (
            <div onMouseEnter={this.hoverHandler}>
              <p>{mock.title}</p>
            </div>
          ) : (
            <div onMouseLeave={this.hoverHandler}>
              <p>{mock.description}</p>
              <a className='' href={mock.site} target="_blank" rel="noreferrer">
                  Visite o Repositório
              </a>
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default ProjectsBack;