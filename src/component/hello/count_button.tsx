import React, { Component } from 'react'

class CountButton extends Component<{}, { count: number }> {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    handleOnClick = () => {
        this.setState(state => ({ count: state.count + 1 }))
    }

    render() {
        return (
            <div style={{ margin: '20px 0' }}>
                <button onClick={this.handleOnClick}>
                    Clicked {this.state.count}
                </button>
            </div>
        )
    }
}

export default CountButton