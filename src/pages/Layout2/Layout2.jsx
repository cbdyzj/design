import React from 'react'

import Extract from '@/components/Extract/Extract'
import style from './style.module.less'

export default function Layout2() {
    return (
        <div className={style.layout2}>
            <div className={style.box}>A Box</div>
            <Extract className={style.extract} />
        </div>
    )
}
