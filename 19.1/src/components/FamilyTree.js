import React, { useState } from 'react'

const FamilyTree = React.createContext()

const initialState = []
const FamilyTreeProvider = ({ children }) => {
    const [gifts, setGifts] = useState(initialState)

    const passGifts = () => {
        setGifts(prev => [' Toys ', 'Books ', 'Money ', 'Lighter ', ' Pack of smokes'])
    }
    return <FamilyTree.Provider value={{ gifts, passGifts }}>{children}</FamilyTree.Provider>
}

export { FamilyTree, FamilyTreeProvider }