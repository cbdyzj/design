import React, { useState } from 'react'

import { Upload, message, Checkbox } from 'antd'
import { InboxOutlined } from '@ant-design/icons'

import Avatar from '@/components/Avatar/Avatar'

const { Dragger } = Upload

import { importExcelFile } from '@/utils/excel'
import SlowInput from '@/components/SlowInput/SlowInput'

export default function Tools() {

    const draggerConfig = {
        accept: '.xlsx',
        beforeUpload(file, fileList) {
            importExcelFile(file)
                .then((sheetsData) => {
                    for (const sheet of sheetsData) {
                        message.info('导入成功: ' + sheet.name)
                        console.log(sheet.name, sheet.data)
                    }
                })
                .catch(error => {
                    console.error(error)
                })
            return false
        },
    }

    const [checked, setChecked] = useState([])

    function handleCheckboxChange(ev) {
        setChecked(ev)
    }

    function includeItem(items) {
        return items.some(it => checked.includes(it))
    }

    return (
        <div style={{ width: '60%', margin: 'auto' }}>
            <div style={{ maxWidth: '320px', margin: '32px 0 0 24px' }}>
                <Dragger {...draggerConfig}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                    </p>
                </Dragger>
            </div>
            <Checkbox.Group
                style={{ margin: '32px 0 0 24px' }}
                onChange={handleCheckboxChange}>
                <Checkbox disabled={includeItem(['C', 'D'])} value={'A'}>A</Checkbox>
                <Checkbox disabled={includeItem(['C', 'D'])} value={'B'}>B</Checkbox>
                <Checkbox disabled={includeItem(['A', 'B'])} value={'C'}>C</Checkbox>
                <Checkbox disabled={includeItem(['A', 'B'])} value={'D'}>D</Checkbox>
            </Checkbox.Group>
            <div style={{ margin: '24px' }}>
                <SlowInput slow />
            </div>
            <div style={{ margin: '24px' }}>
                <Avatar character="A" />
            </div>
        </div>
    )
}