import React, { useCallback, useState } from 'react'

function ContentRender(props) {
    const content = props.content || ''
    const split = content.split('{}')
    const elements = []

    elements.push(<span key={'span-0'}>{split[0]}</span>)

    if (split.length > 1) {
        split.slice(1).forEach((item, index) => {
            elements.push(<input key={'input-' + index}/>)
            elements.push(<span key={'span-' + (index + 1)}>{item}</span>)
        })
    }

    return (
        <div style={{ margin: '8px 0' }}>{elements}</div>
    )
}

function ReactHook(props) {
    const [content, setContent] = useState('')

    function handleInputChange(ev) {
        setContent(ev.target.value)
    }


    return (
        <div style={{ margin: '24px' }}>
            <h2>React hooks</h2>
            <input value={content}
                   onChange={handleInputChange}/>
            <ContentRender content={content}/>
        </div>
    )
}

export default ReactHook
