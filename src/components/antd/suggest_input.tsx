import {Select} from "antd";
import React, {useRef, useState} from "react";


const fakeData = [
    {id: 1, name: '上海'},
    {id: 2, name: '南京'},
    {id: 3, name: '南昌'},
    {id: 4, name: '上饶'},
]


export default function SuggestInput(props) {

    const [data, setData] = useState([])

    const options = data.map(it => {
        return (
            <Select.Option key={it.id} value={it.id}>
                {it.name}
            </Select.Option>
        )
    })

    const fetchContext = useRef({} as any).current

    function fetch(value, callback) {
        if (fetchContext.timeout) {
            clearTimeout(fetchContext.timeout);
            fetchContext.timeout = null;
        }
        fetchContext.currentValue = value;

        function fetchTask() {
            console.log('fetchTask', fetchContext.currentValue, value)

            // 这里执行
            if (fetchContext.currentValue === value) {
                const filteredData = fakeData
                    .filter(it => it.name.includes(value));
                callback(filteredData)
            }
        }

        fetchContext.timeout = setTimeout(fetchTask, 300);
    }

    function handleSearch(value) {
        console.log('onSearch', value)
        if (value) {
            fetch(value, filteredData => setData(filteredData))
        } else {
            setData([])
        }
    }

    function handleChange(value) {
        console.log(value)
    }

    return (
        <Select
            allowClear
            showSearch
            showArrow={false}
            filterOption={false}
            defaultActiveFirstOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
            style={{marginLeft: '16px', width: '200px'}}
            placeholder="请输入一些东西"
        >
            {options}
        </Select>
    )
}
