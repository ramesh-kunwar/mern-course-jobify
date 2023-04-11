import React from 'react'
import Landing from './pages/Landing'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Error from './pages/Error';

const App = () => {
    return (

        <Router>
            <nav>
                <Link to='/'>Dashboard</Link>
                <Link to='/register'>Register</Link>
                <Link to='/landing'>Home</Link>
            </nav>

            <Switch>
                <Route path="/" exact >
                    <Dashboard />
                </Route>
                <Route path="/register" exact >
                    <Register />
                </Route>
                <Route path="/landing" exact >
                    <Landing />
                </Route>
                <Route path="*" exact >
                    <Error />
                </Route>

            </Switch>

        </Router>


    )
}

export default App
