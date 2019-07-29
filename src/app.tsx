import { HashRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react';

import style from './app.css'

import Hello from './component/hello'
import Bind2 from './component/bind2/bind2'
import PictureList from './component/picture_list/picture_list'
import Counter from './component/counter'
import QuillEditor from './component/quill_editor'
import Antd from './component/antd/antd'

function App() {
    return (
        <div className={style['app']}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><Link to='/hello'>Hello</Link></li>
                            <li><Link to='/bind2'>Bind2</Link></li>
                            <li><Link to='/picture_list'>Picture List</Link></li>
                            <li><Link to='/counter'>Counter</Link></li>
                            <li><Link to='/quill_editor'>Quill Editor</Link></li>
                            <li><Link to='/antd'>antd</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Route path='/' exact render={() => <h1>Hello! Hello!</h1>} />
                    <Route path='/hello' component={() => <Hello defaultName="访客" />} />
                    <Route path='/bind2' component={Bind2} />
                    <Route path='/picture_list' component={PictureList} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/quill_editor' component={QuillEditor} />
                    <Route path='/antd' component={Antd} />
                </div>
            </Router>
        </div>
    )
}

export default App
