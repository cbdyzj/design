import React from 'react'

import './picture-list.css'
// @ts-ignore
import xmm from './xmm.jpeg'

interface Props { }
interface State { }

export default class extends React.Component<Props, State> {

    render() {
        return (
            <div className={'picture-list'}>
                <h1>Picture List</h1>
                <img src={xmm} alt={'小猫咪'}/>
            </div>
        )
    }
}
