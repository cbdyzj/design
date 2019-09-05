import React, { CSSProperties } from 'react'

const style: CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid #9ECFFF',
    borderRadius: '4px',
    width: '32px',
    height: '32px',
    color: '#247DFF',
    fontSize: '14px',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '30px',
    margin: '1px',
}

interface Props {
    character?: string
    style?: CSSProperties
}

function Avatar(props: Props) {
    const avatarStyle = Object.assign({}, style, props.style)
    return <span style={avatarStyle}>{props.character || '?'}</span>
}

export default Avatar
