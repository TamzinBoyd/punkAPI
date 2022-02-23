import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  // pass in beer which is each individual beer in the array
  const { beer } = props;

  // add restrictions on word lengths
  let beerName = beer.name.toUpperCase();
  let beerTag = beer.tagline;
  if (beerName.length > 25) {
    beerName = beerName.substring(0, 25);
  }
  if (beerTag.length > 25) {
    beerTag = beerTag.substring(0, 25);
  }

  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img src={beer.image_url}></img>
      </div>
      <h1>{beerName}</h1>
      <h2>{beerTag}</h2>
      <h3>{`${beer.abv} %`}</h3>
      <h3>{`${beer.ph} ph`}</h3>
      <h3>{`First brewed in ${beer.first_brewed}`}</h3>
      <button type="submit">Add to Basket</button>
    </div>
  );
};

export default Card;
