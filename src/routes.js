// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from './components/App'
import Inventory from './components/inventory'
import Projects from './components/projects'
// import Components from './components/components'
import About from './components/about'
import Page404 from './components/page404'
// import ProjectComponents from './components/projects/project-components'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/" component={Projects} />
      <Route exact path="/about" component={About} />
      {/*<Route exact path="/projects/:id/components" component={ProjectComponents} />*/}
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes
