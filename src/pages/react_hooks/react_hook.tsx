import React, { useState } from 'react'

function ContentRender(props) {
    const content = props.content || ''
    let values = {}
    try {
        values = JSON.parse(props.values || '')
    } catch (error) {

    }
    const split = content.split(/{(.*?)}/)
    const elements = []

    split.forEach((item, index) => {
        if (index % 2 === 0) {
            elements.push(<span key={'span-' + index}>{item || ''}</span>)
        } else {
            elements.push(<input readOnly key={'input-' + index} value={values[item] || ''}/>)
        }
    })

    return (
        <div style={{ margin: '8px 0' }}>{elements}</div>
    )
}

function ReactHook(props) {
    const [content, setContent] = useState('')
    const [values, setValues] = useState('{}')

    return (
        <div style={{ margin: '24px' }}>
            <h2>React hooks</h2>
            <p>
                <span>Template: </span>
                <input value={content}
                       onChange={ev => setContent(ev.target.value)}/>
            </p>
            <p>
                <span>Values: </span>
                <input value={values}
                       onChange={ev => setValues(ev.target.value)}/>
            </p>
            <ContentRender content={content} values={values}/>
        </div>
    )
}

export default ReactHook
