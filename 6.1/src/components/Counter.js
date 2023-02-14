import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setCount(count => count + 1)
    }

    return (
        <div>
            <button onClick={clickHandler}>increment</button> <span>{count}</span>
        </div>
    )
}

export default Counter