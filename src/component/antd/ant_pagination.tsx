import React, { useState } from 'react'

import { Typography, Pagination } from 'antd'

const { Text, Paragraph } = Typography

function AntPagination() {

    const [mark, setMark] = useState('分页器')

    function onChangePagination(page, pageSize) {
        setMark(`分页器：Page ${page}，Page size ${pageSize}`)
    }

    return (
        <div>
            <Paragraph>
                <Text>{mark}</Text>
            </Paragraph>
            <Pagination
                onChange={onChangePagination}
                defaultCurrent={1}
                showSizeChanger
                pageSizeOptions={['7', '17', '27']}
                defaultPageSize={7}
                size={'small'}
                total={70} />
        </div>
    )
}

export default AntPagination