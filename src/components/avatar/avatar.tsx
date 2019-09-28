import React from 'react'

import style from './style.less'

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
