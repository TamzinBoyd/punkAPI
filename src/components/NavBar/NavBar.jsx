import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import CheckBox from "../CheckBox/CheckBox";

const NavBar = (props) => {
  const {
    setSearchTerm,
    setHasABVFilter,
    setHasAgeFilter,
    hasABV,
    hasAge,
    setHasPH,
    hasPH,
  } = props;
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>BREWDOG</h1>

      <SearchBar
        placeholder={"Search our extensive range of beers"}
        setSearchTerm={setSearchTerm}
      />

      <CheckBox
        setHasABVFilter={setHasABVFilter}
        setHasAgeFilter={setHasAgeFilter}
        hasABV={hasABV}
        hasAge={hasAge}
        hasPH={hasPH}
        setHasPH={setHasPH}
      />
    </div>
  );
};

export default NavBar;
