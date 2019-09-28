import React from 'react'

import { connect } from 'react-redux'

function Book(props) {
    const { count } = props
    return (
        <div style={{ margin: '16px 16px' }}>
            <h2>Book page: {count}</h2>
        </div>
    )
}

function mapStateToProps({ count }) {
    return { count }
}

export default connect(mapStateToProps)(Book)
