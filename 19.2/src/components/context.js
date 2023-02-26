import React, { useState } from 'react'

const mainContext = React.createContext()

const MainContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home')
    const [dayTheme, setDayTheme] = useState(true)

    const setPage = (page) => {
        switch (page) {
            case 'about':
                setCurrentPage('about')
                break;
            default:
                setCurrentPage('home')
                break;
        }
    }

    return <mainContext.Provider value={{ dayTheme, currentPage, setPage, setDayTheme }}>{children}</mainContext.Provider>
}


export { mainContext, MainContextProvider }
