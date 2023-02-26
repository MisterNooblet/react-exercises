import React, { useContext } from 'react'
import { FamilyTree } from './FamilyTree'
import Father from './Father'

const Grandfather = () => {
    const { passGifts } = useContext(FamilyTree)

    return (
        <>
            Grandfather
            <button onClick={passGifts}>Give gifts</button>
            <Father />
        </>
    )
}

export default Grandfather