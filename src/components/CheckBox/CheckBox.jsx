import React from "react";

const CheckBox = (props) => {
  const { setABVFilter } = props;

  const handleClick = (e) => {
    setABVFilter(true);
  };

  return (
    <div>
      <input
        type="radio"
        name="filter"
        value="abv"
        onClick={(e) => {
          handleClick(e.target.value);
        }}
      />

      <input
        type="radio"
        name="filter"
        value="tbc"
        onClick={(e) => {
          handleClick(e.target.value);
        }}
      />
      <input
        type="radio"
        name="filter"
        value="tbc"
        onClick={(e) => {
          handleClick(e.target.value);
        }}
      />
    </div>
  );
};

export default CheckBox;
