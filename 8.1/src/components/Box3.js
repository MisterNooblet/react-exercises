import React from 'react';
import Box4 from './Box4';
function Box3() {
    return (
        <div style={{
            backgroundColor: 'pink',
            width: '80%',
            height: '80%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Box4 />
            <Box4 />
        </div>
    );
}

export default Box3;