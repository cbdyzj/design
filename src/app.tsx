import { HashRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react';

import './app.css'

import Hello from './component/hello'
import Bind2 from './component/bind2/bind2'
import PictureList from './component/picture-list/picture-list'
import Main from './component/main'

export default () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li><Link to='/hello'>Hello</Link></li>
                    <li><Link to='/bind2'>Bind2</Link></li>
                    <li><Link to='/picture-list'>PictureList</Link></li>
                    <li><Link to='/main'>Main</Link></li>
                </ul>
            </nav>
            <hr />
            <Route path='/' exact component={() => <h1>Hello! Hello!</h1>} />
            <Route path='/hello' component={Hello} />
            <Route path='/bind2' component={Bind2} />
            <Route path='/picture-list' component={PictureList} />
            <Route path='/main' component={Main} />
        </div>
    </Router>
)
