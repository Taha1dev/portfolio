import React from 'react';
import styles from './style.module.css';
const HyperOne = ({ value }) => {
  return <p className={`${styles.h1}`}>{value}</p>;
};

export default HyperOne;
