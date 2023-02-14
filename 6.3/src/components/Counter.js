import React from 'react'

const Counter = (props) => {
    const count = props.count
    const blackLabel = <div>{props.count}</div>
    const redLabel = <div className='red'>{props.count}</div>
    const greenLabel = <div className='green'>{props.count}</div>

    return count === 0 ? blackLabel : count > 0 ? greenLabel : count < 0 ? redLabel : null
}

export default Counter