import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

const style = {
    width: '60%',
    height: '30%'
}

function QuillEditor() {

    const [text, setText] = useState('')

    function handleChange(value) {
        setText(value)
    }

    return (
        <div style={style}>
            <ReactQuill
                value={text}
                onChange={handleChange} />
        </div>
    )
}

export default QuillEditor
