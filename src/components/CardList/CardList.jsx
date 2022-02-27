import React from "react";
import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {
  const { searchedBeers } = props;

  const getCardJsx = (beer) => (
    <div>
      <Card beer={beer} key={beer.id} />
    </div>
  );

  // map over masterBeets state (array) & for each beer carry out the function to render a card
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

export default CardList;
