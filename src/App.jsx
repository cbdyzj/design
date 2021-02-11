import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'

import store from '@/store'

const Hello = lazy(() => import('@/pages/Hello/Hello'))
const Bind2 = lazy(() => import('@/pages/Bind2/Bind2'))
const PictureList = lazy(() => import('@/pages/PictureList/PictureList'))
const ReduxPage = lazy(() => import('@/pages/redux/ReduxPage'))
const Layout2 = lazy(() => import('@/pages/Layout2/Layout2'))
const ReactHooks = lazy(() => import('@/pages/ReactHooks/ReactHooks'))
const Security = lazy(() => import('@/pages/Security/Security'))
const X = lazy(() => import('@/pages/x/X'))
const Transformer = lazy(() => import('@/pages/Transformer/Transformer'))

function Loading() {
    return (<div>loading...</div>)
}

function App(props) {

    return (
        <div>
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
                                <Link to="/layout2">Layout2</Link>
                            </li>
                            <li>
                                <Link to="/react_hooks">React Hooks</Link>
                            </li>
                            <li>
                                <Link to="/security">Security</Link>
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
                            <Route path="/layout2"><Layout2 /></Route>
                            <Route path="/react_hooks"><ReactHooks /></Route>
                            <Route path="/security"><Security /></Route>
                            <Route path="/x"><X /></Route>
                            <Route path="/transformer"><Transformer /></Route>
                            <Route path="*">
                                <div>No match route</div>
                            </Route>

                        </Switch>
                    </Suspense>
                </div>
            </Router>
        </div>
    )
}

export default function (props) {
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )
}