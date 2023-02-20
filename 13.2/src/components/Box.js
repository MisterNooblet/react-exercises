import React from 'react'

const Box = ({ width, className }) => {
    return (
        <div style={{ transform: `translateX(-${width}px)`, width: width + 'px', height: width + 'px' }} className={`box ${className}`}></div>
    )
}

export default Box