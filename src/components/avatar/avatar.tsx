import React from 'react'

import style from './style.less'
import ReactDOM from "react-dom";

interface Props {
    character?: string
}

function Avatar(props: Props) {
    return (
        <span className={style.avatar}>
            {props.character || '?'}
        </span>
    )
}

export default Avatar

// Not React App
window['TC'] = {
    Avatar(container, options = {}, callback?) {
        ReactDOM.render(<Avatar {...options}/>, container, callback)
    }
}
