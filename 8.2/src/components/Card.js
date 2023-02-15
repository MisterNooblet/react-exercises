import React from 'react'

const Card = (props) => {

    return (
        <div className='card'>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}></img>
            <h3>Toppings:</h3>
            <div>
                {props.toppings.map(topping => {
                    return (
                        <button onClick={(e) => props.handler(e.target.innerHTML, topping.img)}>{topping.name}</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Card