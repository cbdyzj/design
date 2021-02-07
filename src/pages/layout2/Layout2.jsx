import React from 'react'

import Extract from '@/components/extract/extract'
import style from './style.module.less'

export default function Layout2() {
    return (
        <div className={style.layout2}>
            <div className={style.hole}>
                <p>{'1 '.repeat(20)}</p>
                <p>{'2 '.repeat(20)}</p>
                <p>{'3 '.repeat(20)}</p>
                <p>{'4 '.repeat(20)}</p>
                <p>{'5 '.repeat(20)}</p>
                <p>{'6 '.repeat(20)}</p>
                <p>{'7 '.repeat(20)}</p>
            </div>
            <Extract className={style.extract}/>
        </div>
    )
}
