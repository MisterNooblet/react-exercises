import React from 'react'
import Balloon from './Balloon';
import Wrapper from './Wrapper';
const Child = (props) => {
    console.log(props.kids);
    return (
        <Wrapper flex='col'>
            <h3>{props.name}</h3>
            <Balloon color={props.color} />
        </Wrapper>
    )
}

export default Child