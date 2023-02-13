import React from 'react'
import './Wrapper.css'

const Wrapper = (props) => {
    return (
        <div className={props.flex}>{props.children}</div>
    )
}

export default Wrapper