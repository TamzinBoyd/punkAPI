import React from "react";
import styles from "./NavBar.module.scss";
import SearchBar from "../SearchBar";
import CheckBox from "../CheckBox/CheckBox";

const NavBar = (props) => {
  const { setSearchTerm, setABVFilter, setAgeFilter, ABVFilter, ageFilter } =
    props;
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>BREWDOG</h1>

      <SearchBar
        placeholder={"Search our extensive range of beers"}
        setSearchTerm={setSearchTerm}
      />

      <CheckBox
        setABVFilter={setABVFilter}
        setAgeFilter={setAgeFilter}
        ABVFilter={ABVFilter}
        ageFilter={ageFilter}
      />
    </div>
  );
};

export default NavBar;
