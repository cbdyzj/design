import React, { useRef, useState } from 'react'

import { Button, Table, Modal, InputNumber, Popconfirm, message, Input } from 'antd'

import style from './style.less'
import { exportExcelFile } from '../../util/excel'

const defaultTableData = Array.from({ length: 7 }).map((_, i) => {
    const val = i + 1
    return {
        id: val,
        content: `内容${val}`,
        sort: val,
    }
})

function AntTable() {

    const [data, setData] = useState(defaultTableData)

    function renderOpButton(text, record) {
        const infoContent = () => Modal.info({ content: record.content })
        return (
            <Popconfirm
                onConfirm={infoContent}
                okText="确认"
                cancelText="取消"
                title="确认操作？">
                <Button
                    type="link">操作
                </Button>
            </Popconfirm>
        )
    }

    function renderSortInput(text, record) {
        return (
            <Input type="text" defaultValue={text.sort}/>
        )
    }

    const tableColumns: any = [
        { title: 'ID', dataIndex: 'id', key: 'id', width: '20%', align: 'center' },
        { title: '内容', dataIndex: 'content', key: 'content', width: '35%' },
        { title: '操作', key: 'operation', render: renderOpButton, width: '20%', align: 'center' },
        { title: '排序', key: 'sort', render: renderSortInput, width: '25%', align: 'center' },
    ]

    const [selectedTableRowKeys, setSelectedTableRowKeys] = useState([])
    const [selectedTableRows, setSelectedTableRows] = useState([])

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedTableRowKeys(selectedRowKeys)
            setSelectedTableRows(selectedRows)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        selectedRowKeys: selectedTableRowKeys,
        columnTitle: ' ',
    }

    function exportFile() {
        const exportData = [['ID', '内容', '排序']]
        selectedTableRows.forEach(it => {
            exportData.push([it.id, it.content, it.sort])
        })
        exportExcelFile([{ name: 'test', data: exportData }])
        setSelectedTableRowKeys([])
        setSelectedTableRows([])
    }

    return (
        <div>
            <Button
                onClick={exportFile}
                className={style.export}>导出</Button>
            <Table
                rowSelection={rowSelection}
                className={style['ant-table']}
                pagination={false}
                style={{ margin: '1rem' }}
                dataSource={data}
                onChange={() => {
                }}
                columns={tableColumns}
                size="small"
                rowKey="id"
            />
        </div>
    )
}

export default AntTable
