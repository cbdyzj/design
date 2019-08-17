import React, { Component, CSSProperties } from 'react'

const style: CSSProperties = {
    background: '#FFFFFF',
    border: '1px solid #9ECFFF',
    borderRadius: '4px',
    width: '32px',
    height: '32px',
    color: '#247DFF',
    fontSize: '14px',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: '30px',
    margin: '1px'
}

interface Props {
    character?: string
    style?: CSSProperties
}

class Avatar extends Component<Props, { count: number }> {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    logLifecycle(lifecycle) {
        console.log(lifecycle, this.props.character, this.state.count)
    }

    componentDidMount() {
        this.logLifecycle('componentDidMount')
    }

    componentDidUpdate(prevProps) {
        this.logLifecycle('componentDidUpdate')
    }

    componentWillUnmount() {
        this.logLifecycle('componentWillUnmount')
    }

    handleClick = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        const avatarStyle = Object.assign({}, style, this.props.style)
        return (
            <span style={avatarStyle} onClick={this.handleClick}>
                {this.props.character || '?'}
            </span>
        )
    }
}

export default Avatar