// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Components
import Header from './global/header'
import Content from './global/content'
import Footer from './global/footer'

// Data
import items from '../data/menu'

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props
    
    return (
      <div className="App">
        <Header
          title="Pedals Project"
          items={items}
        />
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App
