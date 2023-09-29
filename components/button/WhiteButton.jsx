import React from 'react';
import styles from './button.module.css';
const WhiteButton = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className={`${styles.button1}  `}>
      <span>{text}</span>
    </button>
  );
};

export default WhiteButton;
