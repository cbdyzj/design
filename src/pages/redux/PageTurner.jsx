import React from 'react'

import { connect } from 'react-redux'

const style = {
    width: '4em',
    borderWidth: '0px',
    borderRadius: '4px',
    background: '#1E90FF',
    cursor: 'pointer',
    outline: 'none',
    color: 'white',
    fontSize: '17px',
    margin: '0 .5em',
}

function PageTurner(props) {
    const { dispatch } = props

    function increment() {
        dispatch({ type: 'increment' })
    }

    function decrement() {
        dispatch({ type: 'decrement' })
    }

    return (
        <div>
            <button style={style} onClick={decrement}>
                上一页
            </button>
            <button style={style} onClick={increment}>
                下一页
            </button>
        </div>
    )
}

export default connect()(PageTurner)
