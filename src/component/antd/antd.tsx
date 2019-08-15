import React from 'react'
import { Button, Row, message } from 'antd'

import AntTable from './ant_table'
import AntPagination from './ant_pagination'

function Antd() {

    function onClickButton() {
        message.info('Welcome Ant Design!')
    }

    return (
        <div style={{ width: '60%', margin: 'auto' }}>
            <Row style={{ textAlign: 'center', margin: '1rem' }}>
                <Button
                    onClick={onClickButton}
                    style={{ width: '60%' }}>
                    antd Button
                </Button>
            </Row>
            <Row><AntTable /></Row>
            <Row><AntPagination /></Row>
        </div>
    )
}

export default Antd
