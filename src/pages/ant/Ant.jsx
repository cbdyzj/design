import React from 'react'

import { Button, Row, message, Select, Modal } from 'antd'

import AntTable from '@/components/antd/AntTable'
import AntPagination from '@/components/antd/AntPagination'
import SuggestInput from '@/components/antd/SuggestInput'

export default function Ant() {
    function onClickButton() {
        message.info('Welcome Ant Design!')
    }

    const localeList = ['en-US', 'zh-CN', 'en-HK', 'ja-JP', 'en-UK', 'ko-KR']

    return (
        <div style={{ width: '60%', margin: 'auto' }}>

            <Row>
                <Select
                    style={{ margin: '16px', width: '200px' }}
                    placeholder={'请选择语言'}
                    mode="multiple"
                    allowClear>
                    {localeList.map(it => (
                        <Select.Option key={it} value={it}>{it}</Select.Option>
                    ))}
                </Select>
            </Row>

            <Row>
                <SuggestInput/>
            </Row>
            <Row style={{ textAlign: 'center', margin: '10px' }}>
                <Button onClick={onClickButton} style={{ width: '60%' }}>
                    antd Button
                </Button>
            </Row>
            <Row style={{ textAlign: 'center', margin: '10px' }}>
                <Button onClick={() => {
                    Modal.success({
                        className:'modal-success',
                        title: 'title',
                        content: 'content',
                        okText: 'Got it',
                        width:'600px',
                    })
                }}>modal</Button>
            </Row>
            <Row>
                <AntTable/>
            </Row>
            <Row>
                <AntPagination/>
            </Row>
        </div>
    )
}
