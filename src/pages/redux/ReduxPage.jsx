import React from 'react'
import { connect } from 'react-redux'

import PageTurner from './PageTurner'
import Book from './Book'


function ReduxPage(props) {
    return (
        <div>
            <Book />
            <PageTurner />
        </div>
    )
}

export default connect()(ReduxPage)
