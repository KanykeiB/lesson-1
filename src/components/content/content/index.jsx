import React from 'react';
import styles from './index.module.css'

const Posts = (props) => {
    return (
        <div className={styles.blockWrap}>
            <p className={styles.idText}>{props.id}</p>
            <p className={styles.titleText}>{props.title}</p>
            <span className={styles.bodyText}>{props.body}</span>
        </div>
    );
};

export default Posts;