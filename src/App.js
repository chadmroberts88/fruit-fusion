import { React, useState } from 'react'
import HeaderContainer from './containers/HeaderContainer'
import PanelContainer from './containers/PanelContainer'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {

  return (
    <div id="app">
      <Router>
        <HeaderContainer />
        <PanelContainer />
      </Router>
    </div>
  )

}

export default App