import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers, getFilteredBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";

// WHAT I WANT TO ACHIEVE
// on page load - call API &  render initial beer list
// When user enters something in search bar, re-render the list, passing in the value to the API call
// When user ticks a filter box, apply the filter criteria to api call & re-render
// needs to be able to take both values

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBeers, setVisibileBeers] = useState([]);
  const [ABVFilter, setABVFilter] = useState(false);
  const [ageFilter, setAgeFilter] = useState(false);
  const [PHFilter, setPH] = useState(false);
  const [test, setTest] = useState([]);

  // Challenge #1 - If there's no searchTerm, then don't have beer_name in the url
  // Challenge #2 - If there's no brewed before selected, then don't include brewed_before in the url
  // Challenge #3 - Same for abv

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
    if (visibleBeers.length === 0) {
    }
  }, [searchTerm, ABVFilter, ageFilter, PHFilter]);

  return (
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
    </div>
  );
};

export default App;
