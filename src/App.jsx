import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Link, Route, Redirect, Switch } from 'react-router-dom'

import store from '@/store'

const Hello = lazy(() => import('@/pages/Hello/Hello'))
const Bind2 = lazy(() => import('@/pages/Bind2/Bind2'))
const PictureList = lazy(() => import('@/pages/PictureList/PictureList'))
const Layout2 = lazy(() => import('@/pages/Layout2/Layout2'))
const ReactHooks = lazy(() => import('@/pages/ReactHooks/ReactHooks'))
const Security = lazy(() => import('@/pages/Security/Security'))
const X = lazy(() => import('@/pages/x/X'))
const Transformer = lazy(() => import('@/pages/Transformer/Transformer'))

function Loading(props) {
    return (
        <div>loading...</div>
    )
}

function Nav(props) {

    const navList = [
        { to: '/hello', children: 'Hello' },
        { to: '/bind2', children: 'Bind2' },
        { to: '/picture_list', children: 'Picture List' },
        { to: '/layout2', children: 'Layout2' },
        { to: '/react_hooks', children: 'React Hooks' },
        { to: '/security', children: 'Security' },
        { to: '/x', children: 'X' },
        { to: '/transformer', children: 'Transformer' },
    ]

    return (
        <nav>
            <ul style={{ margin: '10px 20px' }}>
                {navList.map(it => (
                    <li key={it.to} style={{ display: 'inline-block', margin: '2px 4px' }}>
                        <Link {...it} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function App(props) {

    return (
        <Router>
            <Nav />
            <hr />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/" exact><Redirect to="/hello" /></Route>
                    <Route path="/hello"><Hello defaultName="你" /></Route>
                    <Route path="/bind2"><Bind2 /></Route>
                    <Route path="/picture_list"><PictureList /></Route>
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
        </Router>
    )
}

export default function (props) {
    return (
        <Provider store={store}>
            <App {...props} />
        </Provider>
    )
}