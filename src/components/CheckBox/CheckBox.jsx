import React from "react";

const CheckBox = (props) => {
  const { setABVFilter, setAgedFilter } = props;

  const handleClickABV = (e) => {
    setABVFilter(true);
  };

  // const handleClickAged = (e) => {
  //   setAgedFilter(true);
  // };

  return (
    <div>
      <input
        type="radio"
        name="filter"
        value="abv"
        onClick={(e) => {
          handleClickABV(e.target.value);
        }}
      />

      <input
        type="radio"
        name="filter"
        value="tbc"
        // onClick={(e) => {
        //   handleClickAged(e.target.value);
        // }}
      />
      <input
        type="radio"
        name="filter"
        value="tbc"
        // onClick={(e) => {
        //   handleClick(e.target.value);
        // }}
      />
    </div>
  );
};

export default CheckBox;
