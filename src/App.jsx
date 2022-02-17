import React, { useState, useEffect } from "react";
import "./App.module.scss";

import NavBar from "./components/NavBar/NavBar";
import { getBeers, getABVBeers } from "./services/beers.service";
import CardList from "./components/CardList/CardList";

// user enters letters, however search doesn't update as they delete letters
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

  // check searchbox isn't empty when searchTerm is edited ////////
  useEffect(() => {
    // if api results not yet returned then don't do anything
    if (!masterBeers) {
      return;
    }
    if (searchTerm.length === 0) {
      setSearchedBeers(masterBeers);
    }
  }, [searchTerm]);

  // get ABV > 6 list of beers from API - works correctly /////////////////////
  const updateABVBeers = async () => {
    if (ABVFilter === true) {
      const ABVBeerList = await getABVBeers();
      return setABVBeers(ABVBeerList);
    }
  };
  useEffect(() => {
    updateABVBeers();
  }, [ABVFilter]);

  // Generate HTML for Cards - not working ///////////////
  const renderCards = () => {
    if (searchTerm === false) {
      // return <CardList searchedBeers={masterBeers} />;
    } else if (ABVBeers) {
      console.log(ABVBeers);
      return <CardList searchedBeers={ABVBeers} />;
    } else {
      console.log(masterBeers);
    }
  };

  return (
    <div className="App">
      <NavBar setSearchTerm={setSearchTerm} setABVFilter={setABVFilter} />
      {/* if state contains value then render the comp */}
      {/* {searchedBeers && <CardList searchedBeers={searchedBeers} />} */}
      {renderCards()}
    </div>
  );
};

export default App;

// useEffect(() => {
//   if (ABVFilter === true) {
//     // only run when filter has been applied then rest searched beers to master list
//     filterByABV();
//     setSearchedBeers(masterBeers);
//   }
// }, [ABVFilter]);

// filter beers based on search entered by user
// const getFilteredBeers = () => {
//   const filteredBeers = searchedBeers.filter((beer) => {
//     return beer.name.toUpperCase().includes(searchTerm);
//   });
//   setSearchedBeers(filteredBeers);
// };

// filter beers based on radio button - NOT WORKING, JUST SHOWING RESET BEERS
// const filterByABV = () => {
//   const filteredByABVBeers = searchedBeers.filter((beer) => {
//     return beer.abv > 6;
//   });

//   setABVBeers(filteredByABVBeers);
//   // currently returns no value
//   console.log(ABVBeers);
// };

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
