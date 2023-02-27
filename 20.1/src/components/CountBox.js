import React, { Component } from 'react'
import Counter from './Counter'

class CountBox extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }

    }

    increment() {
        this.state.count < 10 && this.setState(prev => {
            return { count: prev.count + 1 }
        })
    }

    decrement() {
        this.state.count > -10 && this.setState(prev => {
            return { count: prev.count - 1 }
        })
    }

    render() {
        return (
            <div className='counter-box'>
                <button onClick={this.decrement.bind(this)}>-</button>
                <Counter count={this.state.count} />
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }
}





// const CountBox = () => {
//     const [count, setCount] = useState(0)
//     const increment = () => {
//         count < 10 && setCount(count => count + 1)
//     }
//     const decrement = () => {
//         count > -10 && setCount(count => count - 1)
//     }
//     return (
//         <div className='counter-box'>
//             <button onClick={decrement}>-</button>
//             <Counter count={count} />
//             <button onClick={increment}>+</button>
//         </div>
//     )
// }

export default CountBox