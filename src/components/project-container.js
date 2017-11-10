import React, { Component } from 'react'
import Project from './project'

class ProjectContainer extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    let url = 'http://localhost:3000/projects'
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          projects: data
        })
      })
  }

  render() {
    if (this.state.projects.length > 0) {
      return (
        <div className="container-fluid">
          <Project projects={this.state.projects} />
        </div>
      )
    } else {
      return <p className="text-center">Loading projects...</p>
    }
  }
}

export default ProjectContainer

