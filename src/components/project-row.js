import React, { Component } from 'react'

class ProjectRow extends Component {
  render() {
    return (
    	<div>
	      <li className="list-group-item">Name: {this.props.name}</li>
	      <li className="list-group-item">Created: {this.props.createdAt}</li>
	      <li className="list-group-item">Updated: {this.props.updatedAt}</li>
      </div>
    )
  }
}

export default ProjectRow

