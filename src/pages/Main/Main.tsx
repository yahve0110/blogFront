import React from "react";
import styles from "./Main.module.scss";
import ProfileContainer from "../../widgets/ProfileContainer/ProfileContainer";

const Main = () => {
  return (
    <div className={styles.mainpage}>
      <ProfileContainer />
      <div className={styles.filters}> FILTERS</div>
    </div>
  );
};

export default Main;
