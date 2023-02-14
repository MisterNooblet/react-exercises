import React, { useState } from 'react'

const ShowHide = () => {
    const [visibility, setVisibility] = useState(false)
    const clickHandler = () => {
        visibility === false ? setVisibility(visibility => visibility = true) : setVisibility(visibility => visibility = false)
    }

    if (visibility === false) {
        return (
            <div>
                <button onClick={clickHandler}>Show/Hide</button>
            </div>
        )
    } else if (visibility === true) {
        return (
            <div>
                <button onClick={clickHandler}>Show/Hide</button>
                <div className='box'></div>
            </div>
        )
    }

}

export default ShowHide