import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// global style
import 'antd/dist/antd.css'

import { store } from './redux-config'
import App from './app'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
