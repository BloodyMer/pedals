import React, { Component } from 'react'
import ComponentsRow from './inventory-row'

class Components extends Component {
  render() {
    return (
      <ul className="media-list">
        {
          this.props.components.map((component) => {
            return (
              <ComponentsRow key={ component.id } component={component} />
            )
          })
        }
      </ul>   
    )
  }
}

export default Components
