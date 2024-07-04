// Button.tsx

import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: string;
  onClick?:()=>void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
