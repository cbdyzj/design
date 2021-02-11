import React from 'react'

import style from './style.module.less'

export default function Hello(props) {

    return (
        <div className={style.hello}>
            <h2>Hello Design</h2>
            <p>{navigator.userAgent}</p>
            <button>Hello</button>
        </div>
    )
}
