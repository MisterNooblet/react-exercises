import React, { useRef, useState } from 'react'

const Input = React.forwardRef((props, ref) => {

    return (
        <div>
            <input ref={ref} type='text' name='text' autoFocus />
        </div>
    )
})

export default Input