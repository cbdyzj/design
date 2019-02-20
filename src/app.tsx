import { HashRouter as Router, Link, Route } from "react-router-dom"
import React from "react";

import Hello from "./component/hello"
import Main from "./component/main"
import './app.css'

export default () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to="/me">Me</Link></li>
                    <li><Link to="/hi/Ada">Ada</Link></li>
                    <li><Link to="/hi/Alice">Alice</Link></li>
                    <li><Link to="/main">Main</Link></li>
                </ul>
            </nav>
            <hr />
            <Route path="/" exact component={() => <h1>Hello! Hello!</h1>} />
            <Route path="/me" component={() => <Hello name="Cbdy" />} />
            <Route path="/hi/:name" component={({ match }) => <Hello name={match.params.name} />} />
            <Route path="/main" component={() => <Main />} />
        </div>
    </Router>
)
