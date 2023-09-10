import React from 'react';
import styles from './style.module.css';
const HyperOne = ({ value }) => {
  return <h1 className={`${styles.h1}`}>{value}</h1>;
};

export default HyperOne;
