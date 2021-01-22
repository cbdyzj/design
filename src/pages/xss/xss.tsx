import React, { useRef } from 'react'
import { Button } from 'antd'

import style from './style.less'

function Xss(props) {
    const xss1Ref = useRef() as React.MutableRefObject<HTMLDivElement>

    function xss1() {
        const divRef = xss1Ref.current
        const script = document.createElement('script')
        script.innerHTML = `
        alert('hello')
        `
        if(divRef.firstChild){
            divRef.removeChild(divRef.firstChild)
        }
        divRef.appendChild(script)
    }

    function xss2() {
        const link = document.getElementById('link') as HTMLAnchorElement
        link.href ='https://www.google.com'
    }

    return (
        <div className={style.box}>
            <h2>几个Web安全的例子</h2>

            <h4>XSS1</h4>
            <Button onClick={xss1}>xss1</Button>
            <div ref={xss1Ref}/>
            <br/>

            <h4>XSS2</h4>
            <Button onClick={xss2}>xss1</Button>
            <p>
                <a id="link" target="_blank">一个超链接</a>
            </p>
            <div ref={xss1Ref}/>
        </div>
    )
}

export default Xss
