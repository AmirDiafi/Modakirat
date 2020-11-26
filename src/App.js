import React from 'react'
import Routers from './components/Routers'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends React.Component {

render() {

return (
    <Router>
      <Routers />
    </Router>
  )
}
}

export default App
