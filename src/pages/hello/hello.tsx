import React, { useState } from 'react'
import Avatar from '../../components/avatar/avatar'

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

function Hello(props) {
    const { defaultName } = props
    const [name, setName] = useState(defaultName)

    function handleChange({ target }) {
        setName(target.value)
    }

    function handleBlur() {
        setName(name.length ? name[0] : '')
    }

    return (
        <div style={{ padding: '25px' }}>
            <h2>
                你好哇，
                <Avatar character={name}/>！
            </h2>
            <input type="text" value={name} onBlur={handleBlur} onChange={handleChange}/>
            <CountButton/>
        </div>
    )
}

export default Hello
