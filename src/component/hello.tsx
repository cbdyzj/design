import React, { useState } from 'react'

interface Props {
    defaultName: string
}

function Hello({ defaultName }: Props) {

    const [name, setName] = useState(defaultName)

    let tmpName

    function handleChange({ target }) {
        tmpName = target.value
    }

    function handleSubmit() {
        setName(tmpName)
    }

    return (
        <div>
            <h1>你好哇，{name}！</h1>
            <input type="text" name="name" onChange={handleChange} />
            <input type="button" value="提交" onClick={handleSubmit} />
        </div>
    )
}

export default Hello