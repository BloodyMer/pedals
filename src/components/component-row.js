import React from 'react'

const ComponentRow = ({component}) =>
  <div key={component.id}>
    <li className="list-group-item">Component_type: {component.component_type}</li>
    <li className="list-group-item">Value: {component.value}</li>
    <li className="list-group-item">Model: {component.model}</li>
    <li className="list-group-item">Rev: {component.rev}</li>
    <li className="list-group-item">Legs: {component.legs}</li>
    <li className="list-group-item">Log: {component.log}</li>
    <li className="list-group-item">Created at: {component.created_at}</li>
    <li className="list-group-item">Created at: {component.updated_at}</li>
  </div>

export default ComponentRow
