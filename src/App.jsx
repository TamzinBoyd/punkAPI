import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getFilteredBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";
import Routes from "./containers/Routes";
import NoBeers from "./components/NoBeers/NoBeers";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBeers, setVisibileBeers] = useState([]);
  const [hasABV, setHasABVFilter] = useState(false);
  const [hasAge, setHasAgeFilter] = useState(false);
  const [hasPH, setHasPH] = useState(false);

  // new API request to pass in values of search box &/or filter boxes
  const updateFilteredBeerList = async () => {
    const beerList = await getFilteredBeers(hasABV, hasAge, searchTerm, hasPH);
    setVisibileBeers(beerList);
    console.log(visibleBeers.length);
  };
  useEffect(() => {
    updateFilteredBeerList();
  }, [searchTerm, hasABV, hasAge, hasPH, searchTerm]);

  return (
    <>
      <div className="App">
        <NavBar
          setSearchTerm={setSearchTerm}
          setHasABVFilter={setHasABVFilter}
          setHasAgeFilter={setHasAgeFilter}
          setHasPH={setHasPH}
          hasABV={hasABV}
          hasAge={hasAge}
          hasPH={hasPH}
        />
        {/* if state contains value then render the comp */}
        {visibleBeers && <CardList searchedBeers={visibleBeers} />}
        {visibleBeers.length < 0 ? <NoBeers /> : null}
      </div>

      <section>
        <Routes />
      </section>
    </>
  );
};

export default App;
