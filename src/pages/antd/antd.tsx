import React from 'react'

import { Button, Row, message } from 'antd'

import AntTable from '../../components/antd/ant_table'
import AntPagination from '../../components/antd/ant_pagination'
import SuggestInput from '../../components/antd/suggest_input'

function Antd() {
    function onClickButton() {
        message.info('Welcome Ant Design!')
    }

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
