import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const { setABVFilter, setAgeFilter, ABVFilter, ageFilter, setPH, PHFilter } =
    props;

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

  const handleClickPH = (e) => {
    if (PHFilter === true) {
      setPH(false);
    } else if (PHFilter === false) {
      setPH(true);
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
        <span>Over 6% ABV</span>
      </label>

      <label className={styles.boxes}>
        <input
          type="checkbox"
          onClick={(e) => {
            handleClickAge(e.target.value);
          }}
        />
        <span>Brewed before 2010</span>
      </label>
      <label className={styles.boxes}>
        <input
          type="checkbox"
          onClick={(e) => {
            handleClickPH(e.target.value);
          }}
        />
        <span>PH below 4</span>
      </label>
    </form>
  );
};

export default CheckBox;
