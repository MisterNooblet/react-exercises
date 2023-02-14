import React from 'react'

const Button = (props) => {
    const clickHandler = () => {
        props.onClickColorButton(props.color)
    }
    return (
        <button onClick={clickHandler} className={props.color}>{props.color}</button>
    )
}

export default Button