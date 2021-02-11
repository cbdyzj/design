import React from 'react'

import PageTurner from './PageTurner'
import Book from './Book'


export default function ReduxPage(props) {
    return (
        <div>
            <Book />
            <PageTurner />
        </div>
    )
}
