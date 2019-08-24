import React from 'react'

import style from './layout2.less'

function Layout2() {
    return (
        <div className={style['layout2']}>
            <div className="div1">
                {Array.from({ length: 10 }).map((it,i) => <p key={i}>div1</p>)}
            </div>
            <div className="div2">
                {Array.from({ length: 10 }).map((it,i) => <p key={i}>div2</p>)}
            </div>
        </div>
    )
}

export default Layout2