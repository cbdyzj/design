import React from 'react'

import { Button, Table, Modal } from 'antd'

function AntTable() {
    function opButtonrender(text, record) {
        const infoContent = () => Modal.info({ content: record.content })
        return <Button onClick={infoContent}>操作</Button>
    }

    function dumb() {
        // do nothing
    }

    const tableColumns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '内容', dataIndex: 'content', key: 'content' },
        { title: '操作', key: 'operation', render: opButtonrender },
    ]

    const tableData = Array.from({ length: 4 }).map((_, i) => ({ id: i, content: `内容${i}` }))

    return (
        <Table
            pagination={false}
            style={{ margin: '1rem' }}
            dataSource={tableData}
            onChange={dumb}
            columns={tableColumns}
            size="small"
            rowKey="id"
        />
    )
}

export default AntTable
