import React from 'react'
import { Button } from 'antd'

function Antd() {

    function onClick() {
        alert('This is an antd button!')
    }

    return (
        <div>
            <Button onClick={onClick} type="primary">antd Button</Button>
        </div>
    )
}

export default Antd
