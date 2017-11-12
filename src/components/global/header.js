// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Assets
import { Logo } from './images/logo.svg'
import './css/header.css'

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  }

  render() {
    const { title, items } = this.props

    return (
      <div className="Header">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h2 className="title">{title}</h2>
        <ul className="Menu">
          {items && items.map((item, key) =>
            <li key={key}><Link to={item.url}>{item.title}</Link></li>
          )}
        </ul>
      </div>
    )
  }
}

export default Header
