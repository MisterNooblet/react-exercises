import React from 'react';
import styles from './Box1.module.css'
import Box2 from './Box2';
function Box1() {
    return (
        <div className={styles.box1}>
            <Box2 />
        </div>
    );
}

export default Box1;