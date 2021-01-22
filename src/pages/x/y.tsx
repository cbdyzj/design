import React, { useContext } from 'react'

import SomeContext from './c'

function Y() {
    const c = useContext(SomeContext)

    return (
        <div>
            <p>React context value: {c}</p>
        </div>
    )
}

export default Y
