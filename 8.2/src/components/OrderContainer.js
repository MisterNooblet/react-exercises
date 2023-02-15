import React from 'react'

const Order = (props) => {
    return (
        <div className='orderbox'>
            <h3>Our order:</h3>
            <div className='orders'>
                {props.order.map(order => {
                    return (
                        <div className='toppingCard'>
                            <h3>{order.name}</h3>
                            <img src={order.image}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Order