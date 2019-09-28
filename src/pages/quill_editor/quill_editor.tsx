import React, { useState, CSSProperties, useRef } from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import { Button } from 'antd'

const style: CSSProperties = {
    margin: '1%',
    width: '60vw',
    height: '60vh',
}

function QuillEditor() {
    const [text, setText] = useState('')
    const selectionRange = useRef(null)
    const quillRef = useRef(null as ReactQuill)

    function handleChange(value) {
        setText(value)
    }

    function changeSelection(range) {
        selectionRange.current = range
    }

    function handleClick() {
        if (selectionRange.current) {
            const editor = quillRef.current.getEditor()
            const { index, length } = selectionRange.current
            const text = editor.getText(index, length)
            editor.deleteText(index, length)
            editor.insertText(index, `"${text}"`)
        }
    }

    return (
        <div>
            <ReactQuill
                ref={quillRef}
                style={style}
                value={text}
                onChangeSelection={changeSelection}
                onChange={handleChange}
            />
            <Button style={{ marginLeft: '62vw' }} onClick={handleClick}>
                按钮
            </Button>
        </div>
    )
}

export default QuillEditor
