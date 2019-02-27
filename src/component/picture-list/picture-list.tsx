import React from 'react'

import style from './picture-list.css'
import xmm from './xmm.jpeg'

interface Props { }
interface State { }

export default class extends React.Component<Props, State> {

    render() {
        return (
            <div className={style['picture-list']}>
                <h1>Picture List</h1>
                <img src={xmm} alt={'小猫咪'} />
            </div>
        )
    }
}
