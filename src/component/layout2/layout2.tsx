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

function MutiLinesText() {
    return (
        <div className="extract-container" >
            <p className="mlt">
                这一生产上的技能，对于人类的优越程度和支配自然的程度具有决定的意义；一切生物之中，只有人类达到了几乎绝对控制食物生产的地步。人类进步的一切大的时代，是跟生活来源扩充的各时代多少直接相符合的
                这一生产上的技能，对于人类的优越程度和支配自然的程度具有决定的意义；一切生物之中，只有人类达到了几乎绝对控制食物生产的地步。人类进步的一切大的时代，是跟生活来源扩充的各时代多少直接相符合的
                这一生产上的技能，对于人类的优越程度和支配自然的程度具有决定的意义；一切生物之中，只有人类达到了几乎绝对控制食物生产的地步。人类进步的一切大的时代，是跟生活来源扩充的各时代多少直接相符合的
            </p>
        </div>
    )
}

function Layout2() {
    return (
        <div>
            <div className={style['layout2']}>
                <Hole />
                <Extract />
                <MutiLinesText />
            </div>
        </div>
    )
}

export default Layout2
