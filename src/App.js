import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
