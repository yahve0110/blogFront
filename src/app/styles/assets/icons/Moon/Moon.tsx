import styles from "./Moon.module.scss";
import React from 'react';

const Moon = () => {
  return (
    <svg
    className={styles.moon}
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`.cls-1{fill:#efcc00;}`}</style>
      </defs>
      <path
        className="cls-1"
        d="M44.54,41.47A23,23,0,0,1,24.49,11.73,1,1,0,0,0,23,10.59,23,23,0,1,0,54.41,42a1,1,0,0,0-1.14-1.47A23.06,23.06,0,0,1,44.54,41.47Z"
      />
    </svg>
  );
};

export default Moon;
