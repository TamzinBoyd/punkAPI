import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>BREWDOG</h1>
    </div>
  );
};

export default NavBar;
