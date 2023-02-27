import React, { Component } from 'react'


class Counter extends Component {
    render() {
        const count = this.props.count
        const blackLabel = <div>{count}</div>
        const redLabel = <div className='red'>{count}</div>
        const greenLabel = <div className='green'>{count}</div>

        return count === 0 ? blackLabel : count > 0 ? greenLabel : count < 0 ? redLabel : null
    }
}

export default Counter