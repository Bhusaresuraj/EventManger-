import React from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <h1>We Make Your Events Unforgettable!</h1>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading; 