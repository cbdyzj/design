import React, { useState } from 'react'

import './style.less'

const hiddenStyle: { height?: string } = {
    height: 'calc(8em + 5px)',
}

const [openText, closeText] = ['展开全部 ↓', '收起 ↑']

function Extract(props) {

    const [extraStyle, setExtraStyle] = useState(hiddenStyle)
    const [switchText, setSwitchText] = useState(openText)

    function handleSwitch() {
        if (extraStyle.height) {
            setExtraStyle({})
            setSwitchText(closeText)
        } else {
            setExtraStyle(hiddenStyle)
            setSwitchText(openText)
        }
    }

    return (
        <div className={'extract-container ' + props.className}
             style={Object.assign({}, props.style)}>
            <div className="extract" style={extraStyle}>
                <p>摩尔根是第一个具有专门知识而尝试给人类的史前史建立一个确定的系统的人；他所提出的分期法，在没有大量增加的资料认为需要改变以前，无疑依旧是有效的。</p>
                <p>在三个主要时代——蒙昧时代、野蛮时代和文明时代中，不消说，他所研究的只是前两个时代以及向第三个时代的过渡。他根据生活资料生产的进步，又把这两个时代中的每一时代分为低级阶段、中级阶段和高级阶段，因为，他说：</p>
                <p>“这一生产上的技能，对于人类的优越程度和支配自然的程度具有决定的意义；一切生物之中，只有人类达到了几乎绝对控制食物生产的地步。人类进步的一切大的时代，是跟生活来源扩充的各时代多少直接相符合的”8。</p>
                <p>家庭的发展与此并行，不过，这一发展对于时期的划分没有提供这样显著的标志罢了。</p>
            </div>
            <a className="switch" onClick={handleSwitch}>{switchText}</a>
        </div>
    )
}

export default Extract
