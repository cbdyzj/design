import React, {useEffect, useRef} from 'react'
import Tooltip from 'tooltip.js'
import {Upload, Icon, message} from 'antd'

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

    return (
        <div>
            <a className={style['tooltip-ref']} ref={buttonRef}>
                tooltip
            </a>
            <hr/>
            <div style={{width: '20vw'}}>
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
        </div>
    )
}

export default Tools
