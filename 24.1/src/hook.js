import React, { useState } from 'react'

const useCounter = (num) => {
    const [counter, setCounter] = useState(num)


    const addOne = () => {
        setCounter(prev => prev + 1)
    }

    const removeOne = () => {
        setCounter(prev => prev - 1)
    }

    const double = () => {
        setCounter(prev => prev * 2)
    }

    const divide = () => {
        setCounter(prev => prev / 2)
    }
    return {
        addOne,
        removeOne,
        double,
        divide,
        counter
    }
}

export default useCounter