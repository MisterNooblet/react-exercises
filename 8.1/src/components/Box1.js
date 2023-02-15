import React from 'react';
import Box2 from './Box2';
function Box1() {
    return (
        <div style={{
            backgroundColor: 'greenyellow',
            width: '80vw',
            height: '80vh',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box2 />
        </div>
    );
}

export default Box1;