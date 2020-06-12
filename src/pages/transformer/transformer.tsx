import React, { useState } from 'react'

import style from './style.less'

const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor

const TRANSFORM_DELAY = 1000

function Transformer() {
    const [origin, setOrigin] = useState('')
    const [target, setTarget] = useState('')
    const [transformer, setTransformer] = useState('return origin')
    const [timeoutHandle, setTimeoutHandle] = useState()

    function setTargetText(targetText) {
        setTarget(String(targetText))
    }

    async function transform(originText, transformerBody) {
        let result
        try {
            result = await new AsyncFunction('origin', transformerBody)(originText)
        } catch (error) {
            result = 'Error: ' + error
        }
        return result
    }

    function onTextChange(ev) {
        const originText = ev.target.value
        setOrigin(originText)
        applyTransform(async () => {
            const result = (await transform(originText, transformer)) || ''
            setTargetText(result)
        })

    }

    function onTransformerChange(ev) {
        const transformerBody = ev.target.value
        setTransformer(ev.target.value)
        applyTransform(async () => {
            const result = (await transform(origin, transformerBody)) || ''
            setTargetText(result)
        })
    }

    function applyTransform(func) {
        clearTimeout(timeoutHandle)
        const handle = setTimeout(func, TRANSFORM_DELAY)
        setTimeoutHandle(handle as any)
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
