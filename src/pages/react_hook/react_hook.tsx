import React, { useCallback, useState } from 'react'

function ReactHook(props) {
    const now = new Date().toISOString()
    const [info, setInfo] = useState('?')

    const memoCallback = useCallback(() => setInfo(now), [now])

    function handleClick() {
        memoCallback()
    }

    return (
        <div style={{ margin: '24px' }}>
            <h1>React hook</h1>
            <p>{info}</p>
            <button onClick={handleClick}>Callback</button>
        </div>
    )
}

export default ReactHook
