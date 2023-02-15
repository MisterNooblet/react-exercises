import React from 'react';
import styles from './Box2.module.css'
import Box3 from './Box3';
function Box2() {
    return (
        <div className={styles.box2}>
            <Box3 />
        </div>
    );
}

export default Box2;