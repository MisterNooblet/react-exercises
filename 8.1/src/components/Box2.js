import React from 'react';
import Box3 from './Box3';
function Box2() {
    return (
        <div style={{
            backgroundColor: 'blue',
            width: '80%',
            height: '80%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box3 />
        </div>
    );
}

export default Box2;