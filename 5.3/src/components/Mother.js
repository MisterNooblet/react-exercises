import React from 'react'
import Child from './Child'
import Wrapper from './Wrapper'
import "./Mother.css"

const Mother = () => {
    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ]

    return (
        <Wrapper flex='col'>
            <h1>A Tale of Five Balloons</h1>
            <div className='row'>

                {kids.map((kid) => {
                    return (
                        <Child name={kid.name} color={kid.color} />
                    );
                })}
            </div>

        </Wrapper>
    )
}

export default Mother