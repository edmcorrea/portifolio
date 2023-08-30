import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

class App extends Component {
  // FUNÇÃO DE ESCRITA DINAMICA PARA O "h1" => https://www.youtube.com/watch?v=zx2axQoY_YM
  // function typeWriter(elemento: string) {
  //   const textoArray = elemento.innerHTML.split('');
  //   elemento.innerHTML = '';
  //   textoArray.forEach((letra, i) => {
  //     setTimeout(() => elemento.innerHTML += letra, 75 * i);
  //   });
  // }
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
