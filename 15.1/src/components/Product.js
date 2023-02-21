import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import data from '../data'

const Product = () => {
    const params = useParams()
    const product = data.filter(element => element.id.toString() === params.id)[0]
    console.log(product);
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.price} Schmekels</h3>
            <Link to='/products'>Back</Link>
        </div>
    )
}

export default Product