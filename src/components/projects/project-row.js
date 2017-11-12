import React from 'react'

const ProjectRow = ({project}) =>
	<div key={project.id}>
    <li className="list-group-item">Name: {project.name}</li>
    <li className="list-group-item">Created: {project.created_at}</li>
    <li className="list-group-item">Updated: {project.updated_at}</li>
  </div>

export default ProjectRow
