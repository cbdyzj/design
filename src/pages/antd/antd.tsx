import React, { useEffect } from 'react'

import { Button, Row, message } from 'antd'

import AntTable from '../../components/antd/ant_table'
import AntPagination from '../../components/antd/ant_pagination'
import SuggestInput from '../../components/antd/suggest_input'
import { sleep } from '../../util/schedule'

async function countNumber(n) {
    for (let i = 1; i <= n; i++) {
        await sleep(i * 1000)
        message.info(`--- ${i} ---`)
    }
}

function Antd() {
    function onClickButton() {
        message.info('Welcome Ant Design!')
    }

    useEffect(() => {
        countNumber(7)
    }, [])

    return (
        <div style={{ width: '60%', margin: 'auto' }}>
            <Row>
                <SuggestInput />
            </Row>
            <Row style={{ textAlign: 'center', margin: '10px' }}>
                <Button onClick={onClickButton} style={{ width: '60%' }}>
                    antd Button
                </Button>
            </Row>
            <Row>
                <AntTable />
            </Row>
            <Row>
                <AntPagination />
            </Row>

        </div>
    )
}

export default Antd
