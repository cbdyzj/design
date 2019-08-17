import React, { useState, CSSProperties } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

const style: CSSProperties = {
    margin: '1% auto',
    width: '60vw',
    height: '50vh',
}

function QuillEditor() {

    const [text, setText] = useState('')

    function handleChange(value) {
        setText(value)
    }

    return (
        <div>
            <ReactQuill
                style={style}
                value={text}
                onChange={handleChange} />
        </div>
    )
}

export default QuillEditor
