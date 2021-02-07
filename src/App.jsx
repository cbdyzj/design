import { HashRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

import 'antd/dist/antd.css'
import style from './App.module.less'

import { Spin } from 'antd'

// lazy
const Hello = lazy(() => import('./pages/hello/Hello'))
const Bind2 = lazy(() => import('./pages/bind2/Bind2'))
const PictureList = lazy(() => import('./pages/picture_list/PictureList'))
const ReduxPage = lazy(() => import('./pages/redux/ReduxPage'))
const Antd = lazy(() => import('./pages/antd/Antd'))
const Layout2 = lazy(() => import('./pages/layout2/Layout2'))
const ReactHooks = lazy(() => import('./pages/react_hooks/ReactHooks'))
const Tools = lazy(() => import('./pages/tools/Tools'))
const Xss = lazy(() => import('./pages/xss/Xss'))
const X = lazy(() => import('./pages/x/X'))
const Transformer = lazy(() => import('./pages/transformer/Transformer'))

function Loading() {
    const style = {
        width: '100%',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={style}>
            <Spin size="large" />
        </div>
    )
}

export default function App(props) {

    return (
        <div className={style.app}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/hello">Hello</Link>
                            </li>
                            <li>
                                <Link to="/bind2">Bind2</Link>
                            </li>
                            <li>
                                <Link to="/picture_list">Picture List</Link>
                            </li>
                            <li>
                                <Link to="/redux_page">Redux Page</Link>
                            </li>
                            <li>
                                <Link to="/antd">antd</Link>
                            </li>
                            <li>
                                <Link to="/layout2">Layout2</Link>
                            </li>
                            <li>
                                <Link to="/react_hooks">React Hooks</Link>
                            </li>
                            <li>
                                <Link to="/tools">Tools</Link>
                            </li>
                            <li>
                                <Link to="/xss">Xss</Link>
                            </li>
                            <li>
                                <Link to="/x">X</Link>
                            </li>
                            <li>
                                <Link to="/transformer">Transformer</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route path="/" exact><Redirect to="/hello" /></Route>
                            <Route path="/hello"><Hello defaultName="你" /></Route>
                            <Route path="/bind2"><Bind2 /></Route>
                            <Route path="/picture_list"><PictureList /></Route>
                            <Route path="/redux_page"><ReduxPage /></Route>
                            <Route path="/antd"><Antd /></Route>
                            <Route path="/layout2"><Layout2 /></Route>
                            <Route path="/react_hooks"><ReactHooks /></Route>
                            <Route path="/tools"><Tools /></Route>
                            <Route path="/xss"><Xss /></Route>
                            <Route path="/x"><X /></Route>
                            <Route path="/transformer"><Transformer /></Route>
                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </div>
    )
}