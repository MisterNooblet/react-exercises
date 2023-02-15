import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div className='card'>
            <h3>{props.name}</h3>
            <p>Birthday: {props.bday}</p>
            <h4>Favourite Foods</h4>
            <p>Meats: {props.meats}</p>
            <p>Fish: {props.fish}</p>
        </div>
    )
}

export default Card