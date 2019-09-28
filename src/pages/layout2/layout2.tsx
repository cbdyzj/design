import React from 'react'

import Extract from '../../components/extract/extract'
import style from './style.less'

function Layout2() {
    return (
        <div>
            <div className={style.hole}>
                <pre>
                    {`${'div '.repeat(20)}\n`.repeat(20)}
                </pre>
            </div>
            <Extract/>
        </div>
    )
}

export default Layout2
