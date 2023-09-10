import React from 'react';
import styles from './button.module.css';
const CustomButton = ({ text }) => {
  return <button className={`${styles.button}`}>{text}</button>;
};

export default CustomButton;
