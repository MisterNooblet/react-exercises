import React, { useState } from 'react'
import Counter from './Counter'

const CountBox = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        count < 10 && setCount(count => count + 1)
    }
    const decrement = () => {
        count > -10 && setCount(count => count - 1)
    }
    return (
        <div className='counter-box'>
            <button onClick={decrement}>-</button>
            <Counter count={count} />
            <button onClick={increment}>+</button>
        </div>
    )
}

export default CountBox