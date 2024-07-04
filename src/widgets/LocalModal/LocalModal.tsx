import React, { ReactNode } from 'react';
import styles from "./LocalModal.module.scss";

type LocalModalProps = {
  children: ReactNode;
  show: boolean;
};

export const LocalModal: React.FC<LocalModalProps> = ({ children, show }) => {
  return (
    <div className={`${styles.localModal} ${show ? styles.show : styles.hide }`}>
      {children}
    </div>
  );
};
