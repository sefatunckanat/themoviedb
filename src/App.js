import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Store from './hooks/Store'

import Home from './screens/Home.js'

import './assets/style/app.sass'

function NotFound() {
  return <div className="NotFound">404 - Not Found</div>
}

function App() {
  return (
    <div className="App">
      <Store>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Store>
    </div>
  )
}

export default App
