import React, { useState } from 'react'

import style from './style.less'

function transform(origin: string) {
    return origin
}

function Transformer() {
    const [origin, setOrigin] = useState('')
    const [target, setTarget] = useState('')

    function onTextChange(ev) {
        const originText = ev.target.value
        setOrigin(originText)
        setTarget(transform(originText))
    }

    return (
        <div>
            <textarea
                className={style['text-box']}
                onChange={onTextChange}
                value={origin}/>
            <textarea readOnly className={style['text-box']} value={target}/>
        </div>
    )
}

export default Transformer
