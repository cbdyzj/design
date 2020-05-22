import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'

import style from './app.less'
import { Spin } from 'antd'

// 懒加载
const Hello = lazy(() => import('./pages/hello/hello'))
const Bind2 = lazy(() => import('./pages/bind2/bind2'))
const PictureList = lazy(() => import('./pages/picture_list/picture_list'))
const ReduxPage = lazy(() => import('./pages/redux/redux_page'))
const QuillEditor = lazy(() => import('./pages/quill_editor/quill_editor'))
const Antd = lazy(() => import('./pages/antd/antd'))
const Layout2 = lazy(() => import('./pages/layout2/layout2'))
const ReactHooks = lazy(() => import('./pages/react_hooks/react_hooks'))
const Tools = lazy(() => import('./pages/tools/tools'))
const Xss = lazy(() => import('./pages/xss/xss'))
const X = lazy(() => import('./pages/x/x'))
const Transformer = lazy(() => import('./pages/transformer/transformer'))

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
            <Spin size="large"/>
        </div>
    )
}

function App() {
    return (
        <div className={style['app']}>
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
                                <Link to="/redux_page">Redux page</Link>
                            </li>
                            <li>
                                <Link to="/quill_editor">Quill Editor</Link>
                            </li>
                            <li>
                                <Link to="/antd">antd</Link>
                            </li>
                            <li>
                                <Link to="/layout2">Layout2</Link>
                            </li>
                            <li>
                                <Link to="/react_hooks">React hooks</Link>
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
                    <hr/>
                    <Suspense fallback={<Loading/>}>
                        <Route path="/" exact render={() => <Redirect to="/hello"/>}/>
                        <Route path="/hello" component={() => <Hello defaultName="你"/>}/>
                        <Route path="/bind2" component={Bind2}/>
                        <Route path="/picture_list" component={PictureList}/>
                        <Route path="/redux_page" component={ReduxPage}/>
                        <Route path="/quill_editor" component={QuillEditor}/>
                        <Route path="/antd" component={Antd}/>
                        <Route path="/layout2" component={Layout2}/>
                        <Route path="/react_hooks" component={ReactHooks}/>
                        <Route path="/tools" component={Tools}/>
                        <Route path="/xss" component={Xss}/>
                        <Route path="/x" component={X}/>
                        <Route path="/transformer" component={Transformer}/>
                    </Suspense>
                </div>
            </Router>
        </div>
    )
}

export default App
