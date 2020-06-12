import React, { useState } from 'react'

import style from './style.less'

function Transformer() {
    const [origin, setOrigin] = useState('')
    const [target, setTarget] = useState('')
    const [transformer, setTransformer] = useState('return origin')

    function setTargetText(targetText) {
        setTarget(String(targetText))
    }

    function transform(originText, transformerBody) {
        let result
        try {
            result = new Function('origin', transformerBody)(originText)
        } catch (error) {
            result = 'Error: ' + error
        }
        return result
    }

    function onTextChange(ev) {
        const originText = ev.target.value
        setOrigin(originText)
        const result = transform(originText, transformer)
        setTargetText(result)
    }

    function onTransformerChange(ev) {
        const transformerBody = ev.target.value
        setTransformer(ev.target.value)
        const result = transform(origin, transformerBody) || ''
        setTargetText(result)
    }

    return (
        <div>
            <textarea
                className={style['text-box']}
                onChange={onTextChange}
                value={origin}/>
            <textarea readOnly className={style['text-box']} value={target}/>
            <textarea
                className={style['transformer-box']}
                onChange={onTransformerChange}
                value={transformer}
            />
        </div>
    )
}

export default Transformer
