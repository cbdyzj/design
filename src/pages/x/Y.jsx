import React, { useContext } from 'react'

import SomeContext from './c'

export default function Y() {
    const c = useContext(SomeContext)

    return (
        <div>
            <p>React context value: {c}</p>
        </div>
    )
}
