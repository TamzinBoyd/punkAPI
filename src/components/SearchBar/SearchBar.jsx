import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { placeholder, setSearchTerm } = props;

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
      />
    </div>
  );
};

export default SearchBar;
