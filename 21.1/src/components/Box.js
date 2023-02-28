import React, { Component } from 'react'

class Box extends Component {
    render() {
        return (
            <div style={{ transform: `translateX(-${this.props.width}px)`, width: this.props.width + 'px', height: this.props.width + 'px' }} className={`box ${this.props.className}`}></div>
        )
    }
}



export default Box