import { HashRouter as Router, Link, Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react';

import style from './app.less'

// 懒加载
const Hello = lazy(() => import(/* webpackChunkName: "hello" */ './component/hello/hello'))
const Bind2 = lazy(() => import(/* webpackChunkName: "bind2" */ './component/bind2/bind2'))
const PictureList = lazy(() => import(/* webpackChunkName: "picture_list" */ './component/picture_list/picture_list'))
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ './component/counter'))
const QuillEditor = lazy(() => import(/* webpackChunkName: "quill_editor" */ './component/quill_editor/quill_editor'))
const Antd = lazy(() => import(/* webpackChunkName: "antd" */ './component/antd/antd'))
const Layout2 = lazy(() => import(/* webpackChunkName: "layout2" */ './component/layout2/layout2'))
const ReactHook = lazy(() => import(/* webpackChunkName: "react_hook" */ './component/react_hook/react_hook'))

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
                            <li><Link to='/layout2'>Layout2</Link></li>
                            <li><Link to='/react_hook'>React hook</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path='/' exact render={() => <h1>Hello! Hello!</h1>} />
                        <Route path='/hello' component={() => <Hello defaultName="你" />} />
                        <Route path='/bind2' component={Bind2} />
                        <Route path='/picture_list' component={PictureList} />
                        <Route path='/counter' component={Counter} />
                        <Route path='/quill_editor' component={QuillEditor} />
                        <Route path='/antd' component={Antd} />
                        <Route path='/layout2' component={Layout2} />
                        <Route path='/react_hook' component={ReactHook} />
                    </Suspense>
                </div>
            </Router>
        </div>
    )
}

export default App