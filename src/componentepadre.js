import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Componentetonto from './componente/compo_hijo'
import ComponenteFuncionall1 from './componente/comp_hijo_funcional_1'

class App extends Component {
  render() {
    const nombre_padre="darth vader"
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>react desde cero</h2>
        </div>
        <ComponenteFuncionall1 />
      </div>
    );
  }
}

export default App;
