import React, { Component } from 'react'
import ProjectRow from './project-row'

class Project extends Component {
  render() {
    return (
      <ul className="media-list">
        {
          this.props.projects.map((project) => {
            return (
              <ProjectRow 
                key={ project.id }
                name={ project.name }
                updatedAt={project.updated_at}
                createdAt={project.created_at}
              />
            )
          })
        }
      </ul>   
    )
  }
}

export default Project
