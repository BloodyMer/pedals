import React, { Component } from 'react'
import Components from './inventory'

class ComponentsContainer extends Component {
  constructor() {
    super()
    this.state = {
      components: []
    }
  }

  componentWillMount() {
    let url = 'http://localhost:3001/api/v1/inventory'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          components: data
        })
      })
  }

  render() {
    if (this.state.components.length > 0) {
      return (
        <div className="container-fluid">
          <Components components={this.state.components} />
        </div>
      )
    } else {
      return <p className="text-center">Loading components...</p>
    }
  }
}

export default ComponentsContainer

