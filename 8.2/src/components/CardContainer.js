import React from 'react'
import data from '../data'
import Card from './Card'



const CardContainer = (props) => {
    const clickToppingHandler = (e, img) => {
        props.orderName(e, img)
    }
    return (
        <div className='cardcontainer'>
            {data.map(tutrle => {
                return (
                    <Card name={tutrle.name} image={tutrle.img} toppings={tutrle.pizzaToppings} handler={clickToppingHandler} />
                )
            })}
        </div>
    )
}

export default CardContainer