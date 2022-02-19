import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers, getFilteredBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";

// on page load - call API &  render initial beer list
// When user enters something in search bar, re-render the list, passing in the value to the API call
// Maybe do filter as a separate API call?

const App = () => {
  const [masterBeers, setMasterBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleBeers, setVisibileBeers] = useState([]);

  // pass value of input box into api list & update state to results
  const updateBeerList = async () => {
    const beerList = await getBeers();
    setMasterBeers(beerList);
    setVisibileBeers(beerList);
    // console.log(visibleBeers);
  };

  useEffect(() => {
    updateBeerList();
  }, []);

  const updateFilteredBeerList = async () => {
    const beerList = await getFilteredBeers("6", "10-2020", "t");
    setVisibileBeers(beerList);
    console.log(visibleBeers);
  };

  // check searchbox isn't empty when searchTerm is edited ////////
  useEffect(() => {
    // if api results not yet returned then don't do anything
    if (!masterBeers) {
      return;
    }
    if (searchTerm.length === 0) {
      setVisibileBeers(masterBeers);
    }
    updateFilteredBeerList();
  }, [searchTerm]);

  return (
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} />
      {/* if state contains value then render the comp */}
      {visibleBeers && <CardList searchedBeers={visibleBeers} />}
      {/* {renderCards()} */}
    </div>
  );
};

export default App;
