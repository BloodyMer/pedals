// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './components/App'
import Inventory from './components/inventory'
import Projects from './components/projects'
import Components from './components/components'
import About from './components/about'
import Page404 from './components/page404'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/inventory" component={Inventory} />
      <Route path="/projects" component={Projects} />
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes
