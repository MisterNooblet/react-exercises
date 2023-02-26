import React, { useContext } from 'react'
import { mainContext } from './context'

const Wrapper = ({ children }) => {
    const { dayTheme } = useContext(mainContext)
    return (
        <main className={dayTheme ? 'day' : 'night'}>{children}</main>
    )
}

export default Wrapper