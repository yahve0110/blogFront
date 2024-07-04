import { useState } from "react";
import styles from "./Sidebar.module.scss";
import ArrowIcon from "../../app/styles/assets/icons/Arrow/ArrowIcon";
import React from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("white");

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className={`${styles.sidebar} ${open && styles.open}`}>
      <button
        onClick={toggleSidebar}
        className={`${styles.arrowBtn} ${open && styles.btnRotate}`}
      >
        <span
          onMouseOver={() => setColor("#149cd7")}
          onMouseLeave={() => setColor("white")}
        >
          <ArrowIcon color={color} />
        </span>
      </button>
    </div>
  );
};

export default Sidebar;
