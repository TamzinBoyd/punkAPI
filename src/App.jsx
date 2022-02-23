import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getFilteredBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";
import Routes from "./containers/Routes";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBeers, setVisibileBeers] = useState([]);
  const [ABVFilter, setABVFilter] = useState(false);
  const [ageFilter, setAgeFilter] = useState(false);
  const [PHFilter, setPH] = useState(false);

  // new API request to pass in values of search box &/or filter boxes
  const updateFilteredBeerList = async () => {
    const beerList = await getFilteredBeers(
      ABVFilter,
      ageFilter,
      searchTerm,
      PHFilter
    );
    setVisibileBeers(beerList);
  };
  useEffect(() => {
    updateFilteredBeerList();
  }, [searchTerm, ABVFilter, ageFilter, PHFilter]);

  return (
    <>
      <Routes />
      <div className="App">
        <NavBar
          setSearchTerm={setSearchTerm}
          setABVFilter={setABVFilter}
          setAgeFilter={setAgeFilter}
          setPH={setPH}
          ABVFilter={ABVFilter}
          ageFilter={ageFilter}
          PHFilter={PHFilter}
        />
        {/* if state contains value then render the comp */}
        {visibleBeers && <CardList searchedBeers={visibleBeers} />}
      </div>{" "}
    </>
  );
};

export default App;
