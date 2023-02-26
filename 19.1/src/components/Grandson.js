import React, { useContext } from 'react'
import { FamilyTree } from './FamilyTree'

const Grandson = () => {
    const { gifts } = useContext(FamilyTree)
    return (
        <div>Grandson
            {gifts && gifts.map(el => el)}
        </div>
    )
}

export default Grandson