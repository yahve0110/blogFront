import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: string;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large'; // Define size prop
};

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'medium' }) => {
  const getSizeClassName = () => {
    switch (size) {
      case 'small':
        return styles.small;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <button className={`${styles.btn} ${getSizeClassName()}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
