import React, { useState } from 'react'
import Avatar from './avatar'
import CountButton from './count_button'

function Hello({ defaultName }: { defaultName: string }) {

    const [name, setName] = useState(defaultName)

    function handleChange({ target }) {
        const val: string = target.value
        setName(val.length ? val[0] : '')
    }

    return (
        <div style={{ padding: '25px' }}>
            <h2>你好哇，<Avatar character={name} />！</h2>
            <input type="text" value={name} onChange={handleChange} />
            <CountButton />
        </div>
    )
}

export default Hello