import React, {useRef, useState} from 'react'

import {Button, Table, Modal, InputNumber, Popconfirm, message} from 'antd'

import style from './style.less'

const defaultTableData = Array.from({length: 7}).map((_, i) => ({
    id: i,
    content: `内容${i}`,
    sort: i,
}))

// 生效延迟
const DELAY = 1500

function AntTable() {

    const [data, setData] = useState(defaultTableData)
    const changeQueue = useRef(new Map())

    function renderOpButton(text, record) {
        const infoContent = () => Modal.info({content: record.content})
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

    function applySort(id, sort) {
        return () => {
            setData(data => {
                changeQueue.current.clear()
                return data.map(it => {
                    if (it.id === id) {
                        it.sort = sort
                    }
                    return it
                })
            })
        }
    }

    function changeOrder(id, ev) {
        const sortTask = applySort(id, ev)
        const taskHandle = setTimeout(sortTask, DELAY)
        const theItem = changeQueue.current.get(id);
        if (theItem !== (void 0)) {
            clearTimeout(theItem.taskHandle)
        }
        changeQueue.current.set(id, {
            taskHandle,
            sortTask,
        })
    }

    function handleSortInputBlur(id) {
        const theItem = changeQueue.current.get(id);
        if (theItem !== (void 0)) {
            clearTimeout(theItem.taskHandle)
            theItem.sortTask()
        }
    }

    function renderSortInput(text, record) {
        return (
            <InputNumber defaultValue={text.sort}
                         onBlur={() => handleSortInputBlur(text.id)}
                         onChange={(ev) => changeOrder(text.id, ev)}/>
        )
    }

    const tableColumns: any = [
        {title: 'ID', dataIndex: 'id', key: 'id', width: '20%', align: 'center'},
        {title: '内容', dataIndex: 'content', key: 'content', width: '35%'},
        {title: '操作', key: 'operation', render: renderOpButton, width: '20%', align: 'center'},
        {title: '排序', key: 'sort', render: renderSortInput, width: '25%', align: 'center'},
    ]

    data.sort((a, b) => a.sort - b.sort)

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
        alert(JSON.stringify(selectedTableRows))
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
                style={{margin: '1rem'}}
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
