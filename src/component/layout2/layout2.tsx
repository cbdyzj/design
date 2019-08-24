import React from 'react'

import style from './layout2.less'

function Layout2() {

    function contentRender(text: string = '', lines: number = 10) {
        return Array.from({ length: lines })
            .map((it, index) => <p key={index}>{text.repeat(100)}</p>)
    }

    return (
        <div >
            <div className={style['layout2']}>
                <div className="container c1">
                    {contentRender('div1', 100)}
                </div>
                <div className="container c2">
                    {contentRender('div2', 100)}
                </div>
            </div>
        </div>
    )
}

export default Layout2