import React, { Component } from 'react'
import Project from './project'

class ProjectComponents extends Component {
  constructor() {
    super()
    this.state = {
      components: []
    }
  }

  componentWillMount() {
    let url = 'http://localhost:3001/api/v1/projects/:id/components'
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
          <Project projects={this.state.components} />
        </div>
      )
    } else {
      return <p className="text-center">Loading components...</p>
    }
  }
}

export default ProjectComponents
