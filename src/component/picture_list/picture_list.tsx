import React from 'react'

import style from './picture_list.css'
import xmm from './xmm.jpeg'

function PictureList() {
    return (
        <div className={style['picture-list']}>
            <h1>Picture List</h1>
            <img src={xmm} alt={'小猫咪'} />
        </div>
    )
}

export default PictureList
