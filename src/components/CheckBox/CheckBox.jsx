import React from "react";

const CheckBox = (props) => {
  const { setABVFilter } = props;
  return (
    <div>
      <input type="checkbox" onClick={setABVFilter(true)} />
    </div>
  );
};

export default CheckBox;
