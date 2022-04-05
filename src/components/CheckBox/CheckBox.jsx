import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = (props) => {
  const { setHasABVFilter, setHasAgeFilter, hasABV, hasAge, setHasPH, hasPH } =
    props;

  const handleClickABV = (e) => {
    // if value is equal to false, which it starts as then switch it
    !hasABV ? setHasABVFilter(!hasABV) : setHasABVFilter(!hasABV);
  };

  const handleClickAge = (e) => {
    !hasAge ? setHasAgeFilter(!hasAge) : setHasAgeFilter(!hasAge);
  };

  const handleClickPH = (e) => {
    !hasPH ? setHasPH(!hasPH) : setHasPH(!hasPH);
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
