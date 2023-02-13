import React from 'react'
import "./Balloon.css"

const Balloon = (props) => {
    return (
        <div className={`balloon ${props.color}`}></div>
    )
}

export default Balloon