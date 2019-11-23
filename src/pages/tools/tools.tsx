import React, {useEffect, useRef, useState} from 'react'
import Tooltip from 'tooltip.js'
import {Upload, Icon, message, Checkbox} from 'antd'

const {Dragger} = Upload

import style from './style.less'
import {importExcelFile} from '../../util/excel'

function Tools() {

    const buttonRef = useRef()

    useEffect(() => {
        const tooltip = new Tooltip(buttonRef.current, {
            trigger: 'hover focus',
            placement: 'top',
            title: 'hello tooltip!',
            arrowSelector: '.tooltip-arrow'
        })
    }, [])


    const draggerConfig = {
        accept: '.xlsx',
        beforeUpload(file, fileList) {
            importExcelFile(file)
                .then((sheetsData: any) => {
                    for (const sheet of sheetsData) {
                        message.info('导入成功: ' + sheet.name)
                        console.log(sheet.name, sheet.data)
                    }
                }).catch(error => {
                console.error(error)
            })
            return false
        },
    }

    const [checked, setChecked] = useState([])

    function handleCheckboxChange(ev) {
        setChecked(ev)
    }

    return (
        <div>
            <a className={style['tooltip-ref']} ref={buttonRef}>
                tooltip
            </a>
            <hr/>
            <div style={{width: '20vw', margin: '32px 0 0 24px'}}>
                <Dragger {...draggerConfig}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox"/>
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                        band files
                    </p>
                </Dragger>
            </div>
            <Checkbox.Group
                style={{margin: '32px 0 0 24px'}}
                onChange={handleCheckboxChange}>
                <Checkbox disabled={checked.includes('C') || checked.includes('D')} value={'A'}>A</Checkbox>
                <Checkbox disabled={checked.includes('C') || checked.includes('D')} value={'B'}>B</Checkbox>
                <Checkbox disabled={checked.includes('A') || checked.includes('B')} value={'C'}>C</Checkbox>
                <Checkbox disabled={checked.includes('A') || checked.includes('B')} value={'D'}>D</Checkbox>
            </Checkbox.Group>
        </div>
    )
}

export default Tools
