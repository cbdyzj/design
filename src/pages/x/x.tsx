import React from 'react'

import SomeContext from './c'
import Y from './y'

function X(props) {

    return (
        <SomeContext.Provider value={1}>
            <div style={{ margin: '24px' }}>
                <h1>x</h1>
            </div>
            <Y/>
        </SomeContext.Provider>
    )
}

export default X
