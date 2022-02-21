import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const { setABVFilter, setAgeFilter, ABVFilter, ageFilter } = props;

  const handleClickABV = (e) => {
    if (ABVFilter === true) {
      setABVFilter(false);
    } else if (ABVFilter === false) {
      setABVFilter(true);
    }
  };

  const handleClickAge = (e) => {
    if (ageFilter === true) {
      setAgeFilter(false);
    } else if (ageFilter === false) {
      setAgeFilter(true);
    }
  };

  return (
    <form className={styles.container}>
      <label className={styles.boxes}>
        <input
          type="checkbox"
          onClick={(e) => {
            handleClickABV(e.target.value);
          }}
        />
        <span>Filter for beers over 6% ABV</span>
      </label>

      <label className={styles.boxes}>
        <input
          type="checkbox"
          onClick={(e) => {
            handleClickAge(e.target.value);
          }}
        />
        <span className={styles.test}>Filter for beers brewed before 2010</span>
      </label>
      <input
        type="checkbox"

        // onClick={(e) => {
        //   handleClick(e.target.value);
        // }}
      />
    </form>
  );
};

export default CheckBox;
