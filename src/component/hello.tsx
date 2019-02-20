import React from 'react'

interface Props {
    name: string
}

interface State { }

export default class extends React.Component<Props, State> {

    render() {
        return (
            <div>
                <h1>你好哇：{this.props.name}!</h1>
            </div>
        )
    }
}
