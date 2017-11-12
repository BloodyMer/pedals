// dependencies
import React, { Component } from 'react'
import InventoryContainer from './inventory-container'

class Inventory extends Component {
  render() {
    return (
      <div className="Inventory">
        <h1><InventoryContainer /></h1>
      </div>
    )
  }
}

export default Inventory