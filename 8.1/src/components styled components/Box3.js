import React from 'react';
import styles from './Box3.module.css'
import Box4 from './Box4';
function Box3() {
    return (
        <div className={styles.box3}>
            <Box4 />
            <Box4 />
        </div>
    );
}

export default Box3;