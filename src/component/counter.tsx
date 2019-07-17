import React from 'react'

import { connect } from 'react-redux'

function Counter({ count, dispatch }) {

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>⬆</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>⬇</button>
        </div>
    )
}

function mapStateToProps({ count }) {
    return { count }
}

export default connect(mapStateToProps)(Counter)