import React, { useState, CSSProperties } from 'react'
import ReactQuill from 'react-quill'
import { Button } from 'antd'

import 'react-quill/dist/quill.snow.css'

const style: CSSProperties = {
    margin: '1%',
    width: '60vw',
    height: '60vh',
}

function QuillEditor() {

    const [text, setText] = useState('')
    const [selectionRange, setSelectionRange] = useState(null)
    const [quillRef, setQuillRef] = useState(null)

    function handleChange(value) {
        setText(value)
    }

    function changeSelection(range) {
        if (range) {
            setSelectionRange(range)
        }
    }

    function handleClick() {
        if (selectionRange) {
            const editor = quillRef.getEditor()
            const { index, length } = selectionRange
            const text = editor.getText(index, length)
            editor.deleteText(index, length)
            editor.insertText(index, `"${text}"`)
        }
    }

    return (
        <div>
            <ReactQuill
                ref={ref => setQuillRef(ref)}
                style={style}
                value={text}
                onChangeSelection={changeSelection}
                onChange={handleChange} />
            <Button style={{ marginLeft: '62vw' }} onClick={handleClick}>
                按钮
            </Button>
        </div>
    )
}

export default QuillEditor
