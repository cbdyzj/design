import React from 'react'
import { useSelector } from 'react-redux'

export default function Book(props) {
    const count = useSelector(state => state.count)

    return (
        <div style={{ margin: '16px 16px' }}>
            <h2>Book page: {count}</h2>
        </div>
    )
}

