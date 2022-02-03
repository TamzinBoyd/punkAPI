import React from "react";
import Card from "../Card";
import styles from "./SearchedBeers.module.scss";

const SearchedBeers = (props) => {
  const { searchedBeers } = props;

  // render Card, pass in beer
  const getCardJsx = (beer) => (
    <div>
      <Card beer={beer} />
    </div>
  );

  // map over beers state (array) & for each beer carry out the function to render a card
  return (
    <>
      <section className={styles.container}>
        {searchedBeers.map((beer) => {
          return getCardJsx(beer);
        })}
      </section>
    </>
  );
};

export default SearchedBeers;
