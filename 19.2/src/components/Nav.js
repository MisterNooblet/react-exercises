import React, { useContext } from 'react'
import { mainContext } from './context'

const Nav = () => {
    const { setPage, setDayTheme, dayTheme } = useContext(mainContext)

    return (
        <header>
            <nav>
                <div>
                    <span onClick={() => { setPage('home') }}>HOME</span>
                    <span onClick={() => { setPage('about') }}>ABOUT</span>
                </div>
                <button onClick={() => { setDayTheme((prev) => !prev) }}>{dayTheme ? 'Night' : 'Day'} Mode</button>
            </nav>
        </header>
    )
}

export default Nav