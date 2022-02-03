import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";

import SearchBar from "./components/SearchBar";

const App = () => {
  const [masterBeers, setMasterBeers] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchedBeers, setSearchedBeers] = useState(false);

  // pass value of input box into api list & update state to results
  const updateBeerList = async () => {
    const beerList = await getBeers();
    setMasterBeers(beerList);
    setSearchedBeers(beerList);
  };

  useEffect(() => {
    updateBeerList();
  }, []);

  useEffect(() => {
    // if equal to false, don't do anything, otherwise run the function
    if (!masterBeers) {
      return;
    }
    if (searchTerm.length == 0) {
      setSearchedBeers(masterBeers);
      return;
    }
    getFilteredBeers();
    // only run when searchTerm exists
  }, [searchTerm]);

  // filter beers based on search entered by user
  const getFilteredBeers = () => {
    console.log(searchedBeers);
    const filteredBeers = searchedBeers.filter((beer) => {
      return beer.name.toUpperCase().includes(searchTerm);
    });
    setSearchedBeers(filteredBeers);
    console.log(filteredBeers);
  };

  return (
    <div className="App">
      <NavBar />
      <SearchBar
        placeholder={"Search our extensive range of beers"}
        setSearchTerm={setSearchTerm}
      />
      {/* if state contains value then render the comp */}
      {searchedBeers && <CardList searchedBeers={searchedBeers} />}
    </div>
  );
};

export default App;
