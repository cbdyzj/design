import React from 'react'

import style from './layout2.less'
import Extract from './extract'

function Hole() {
    return (
        <div className="hole">
            {`${'div1'.repeat(20)}\n`.repeat(20)}
        </div>
    )
}

function Layout2() {
    return (
        <div>
            <div className={style['layout2']}>
                <Hole />
                <Extract />
            </div>
        </div>
    )
}

export default Layout2
