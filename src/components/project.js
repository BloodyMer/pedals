import React, { Component } from 'react'
import ProjectRow from './project-row'

class Project extends Component {
  render() {
    return (
      <ul className="media-list">
        {
          this.props.projects.map((project) => {
            return (
              <ProjectRow key={ project.id } project={project} />
            )
          })
        }
      </ul>   
    )
  }
}

export default Project
