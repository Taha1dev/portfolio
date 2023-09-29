import React from 'react';
import styles from './button.module.css';
const CustomButton = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className={`${styles.button}  `}>
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
