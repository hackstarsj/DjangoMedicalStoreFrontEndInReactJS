import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Login from './pages/Login'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Login}></Route>
        </Switch>
    </Router>
    ,document.getElementById("root"))