import React from 'react'
import Card from './Card'
import "./CardContainer.css"

const CardContainer = (props) => {
    const data = props.data
    return (
        <div className='card-container'>

            {data.map(card => {
                return (
                    <Card>
                        <img className='card-img' src={card.img}></img>
                        <h1 className='card-title'>{card.title}</h1>
                        <p className='card-description'>{card.description}</p>
                        <div className='card-links'>
                            <a className='card-link' href={card.shareHref}><span>SHARE</span></a><a className='card-link' href={card.exploreHref}><span>EXPLORE</span></a>
                        </div>

                    </Card>
                )
            })}
        </div>
    )
}

export default CardContainer