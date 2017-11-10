import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectContainer from './components/project-container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pedals Factory</h1>
        </header>
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
