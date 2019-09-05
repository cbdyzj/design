import React from 'react'

import PageTurner from './page_turner'
import Book from './book'
import { connect } from 'react-redux'

function ReduxPage(props) {
    const { match } = props
    return (
        <div>
            <p style={{ margin: '20px 25px' }}>
                Path: <b>{match.path}</b>
            </p>
            <Book />
            <PageTurner />
        </div>
    )
}

export default connect()(ReduxPage)
