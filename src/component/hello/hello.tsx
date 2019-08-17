import React, { useState } from 'react'
import Avatar from './avatar'


function Hello({ defaultName }: { defaultName: string }) {

    const [name, setName] = useState(defaultName)

    function handleChange({ target }) {
        setName(target.value)
    }

    return (
        <div style={{ padding: '25px' }}>
            <h2>你好哇，<Avatar character={name} />！</h2>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}

export default Hello