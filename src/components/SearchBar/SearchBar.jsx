import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { placeholder, setSearchTerm } = props;

  return (
    <div>
      <h3 className={styles.title}>Search for your favourite beer</h3>
      {/* works until you remove the text so need to see how to fix this - also can't get it to show all beers on loadin */}
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        // change searchTerm state to value of input box
        onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
      />
    </div>
  );
};

export default SearchBar;
