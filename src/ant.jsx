import React from 'react'
import { render } from 'react-dom'

import Ant from './pages/ant/Ant'
import Tools from './pages/tools/Tools'

import 'antd/dist/antd.css'

function App(props) {
    return (
        <>
            <Ant />
            <hr />
            <Tools />
        </>
    )
}

render(<App />, document.querySelector('#app'))
