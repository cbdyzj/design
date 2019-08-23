import React from 'react'

import style from './layout2.css'

function Layout2() {
    return (
        <div>
            <div className={style['div1']}>
                {Array.from({ length: 10 }).map(it => <p>div1</p>)}
            </div>
            <div className={style['div2']}>
                {Array.from({ length: 10 }).map(it => <p>div2</p>)}
            </div>
        </div>
    )
}

export default Layout2