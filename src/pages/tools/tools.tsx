import React, { useEffect, useRef } from 'react'
import Tooltip from 'tooltip.js'

import style from './style.less'

function Tools() {

    const buttonRef = useRef()

    useEffect(() => {
        const tooltip = new Tooltip(buttonRef.current, {
            trigger: 'hover focus',
            placement: 'top',
            title: 'hello tooltip!',
            arrowSelector: '.tooltip-arrow'
        })
    }, [])

    return (
        <div>
            <a className={style['tooltip-ref']} ref={buttonRef}>
                tooltip
            </a>
        </div>
    )
}

export default Tools
