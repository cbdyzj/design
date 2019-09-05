import React, { useState } from 'react'

function CountButton() {
    const [count, setCount] = useState(0)

    function handleOnClick() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div style={{ margin: '20px 0' }}>
            <button onClick={handleOnClick}>Clicked {count}</button>
        </div>
    )
}

export default CountButton
