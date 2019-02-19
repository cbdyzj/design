import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom";

import { Hello } from './hello'

export const Main = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/me">Me</Link>
                    </li>
                    <li>
                        <Link to="/hi/Ada">Ada</Link>
                    </li>
                    <li>
                        <Link to="/hi/Alice">Alice</Link>
                    </li>
                </ul>
            </nav>
            <Route path="/" exact component={() => <h1>Hello! Hello!</h1>} />
            <Route path="/me" component={() => <Hello name="Cbdy" />} />
            <Route path="/hi/:name" component={({ match }) => <Hello name={match.params.name} />} />
        </div>
    </Router>
);