import React from 'react'

const Card = ({ name, image }) => {
    return (
        <div className='card'>
            <h4>{name}</h4>
            <img src={image} alt={name} />
        </div>
    )
}

export default Card