import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './Main'

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Main} />
            </Switch>
        )
    }
}
 
export default Routers 