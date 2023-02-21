import React from 'react'

import { Link } from 'react-router-dom';
import data from "../data"

const Products = () => {
    const datas = data

    console.log(data);
    return (
        <>
            <div>Products</div>
            <div className='productlinks'>{datas.map(element => {
                return (
                    <div><Link to={element.id.toString()}>{element.title}</Link></div>
                )
            })}</div>
        </>

    )
}

export default Products