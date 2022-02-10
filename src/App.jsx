import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";

import SearchBar from "./components/SearchBar";

// user enters letters, if user used backspace or delete - and state changes, need it to re-check and look for new beers - so expand on current array of beers to amtch search term

//at the minute the search term is updating ocrrectly, but the card list isn'r changing to reflect this

const App = () => {
  const [masterBeers, setMasterBeers] = useState(false);
  const [searchTerm, setSearchTerm] = useState(false);
  const [searchedBeers, setSearchedBeers] = useState(false);
  const [ABVFilter, setABVFilter] = useState(false);
  const [ABVBeers, setABVBeers] = useState("");

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
    // only run if searchTerm doesn't have a value
    if (searchTerm.length == 0) {
      setSearchedBeers(masterBeers);
      return;
    }

    getFilteredBeers();
    // only run when searchTerm exists
  }, [searchTerm]);

  useEffect(() => {
    if (ABVFilter === true) {
      // only run when filter has been applied then rest searched beers to master list
      filterByABV();
      setSearchedBeers(masterBeers);
    }
  }, [ABVFilter]);

  // filter beers based on search entered by user
  const getFilteredBeers = () => {
    const filteredBeers = searchedBeers.filter((beer) => {
      return beer.name.toUpperCase().includes(searchTerm);
    });
    setSearchedBeers(filteredBeers);
  };

  // filter beers based on radio button - NOT WORKING, JUST SHOWING RESET BEERS
  const filterByABV = () => {
    const filteredByABVBeers = searchedBeers.filter((beer) => {
      return beer.abv > 6;
    });

    setABVBeers(filteredByABVBeers);
    // currently returns no value
    console.log(ABVBeers);
  };

  // const filterByABV = () => {
  //   const filteredByABVBeers = [];
  //   searchedBeers.forEach((beer) => {
  //     if (beer.abv > 6) {
  //       filteredByABVBeers.push(beer);
  //     } else {
  //       return;
  //     }
  //   });

  // };

  return (
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} setABVFilter={setABVFilter} />

      {/* if state contains value then render the comp */}
      {searchedBeers && <CardList searchedBeers={searchedBeers} />}
    </div>
  );
};

export default App;
