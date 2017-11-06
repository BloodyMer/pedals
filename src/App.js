import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PedalsContainer from './components/PedalsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pedals Factory</h1>
        </header>
        <PedalsContainer />
      </div>
    );
  }
}

export default App;
