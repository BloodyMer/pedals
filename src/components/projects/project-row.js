import React from 'react'
import { Link } from 'react-router-dom'

const ProjectRow = ({project}) =>
	<div key={project.id}>
    <li className="list-group-item">Name: <Link to={'/projects/'+project.id+'/components'}>{project.name}</Link></li>
    <li className="list-group-item">Created: {project.created_at}</li>
    <li className="list-group-item">Updated: {project.updated_at}</li>
  </div>

export default ProjectRow
