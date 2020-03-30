import SomeContext from './c'
import React, { useContext } from 'react'

function Y() {
    const c = useContext(SomeContext)

    return (
        <div>
            <p>React context value: {c}</p>
        </div>
    )
}

export default Y
