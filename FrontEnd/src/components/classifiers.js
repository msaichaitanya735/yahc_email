import React from 'react'
import { Button } from 'react-bootstrap';
import {Nav,Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom'
import Editors from './editor'
import Templateslist from './templatelist'
import Dashboard from './Dashboard'


const Classifier=()=>{
    return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Dashboard/>
                    </Route>
                    <Route path="/editor">
                        <Editors/>
                    </Route>
                    <Route path="/templateslist">
                        <Templateslist/>
                    </Route>
                </Switch>
            </Router>  
    )
}
export default Classifier;
