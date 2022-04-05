const API_URL = "https://api.punkapi.com/v2/beers";
let filteredURL = "";
const ABV_URL = `&abv_gt=6`;
const age_URL = `&brewed_before=1-2010`;
// push into array then join with & mauybe to get around if there's not a seach term

export const getFilteredBeers = (abv, age, searchTerm, PHFilter) => {
  // if (searchTerm) {
  //   filteredURL += `&beer_name=${searchTerm}`;
  //   console.log(search term);
  // }

  if (PHFilter) {
    console.log("hi");
    return fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((respJason) => {
        const beersArr = respJason.map((beer) => {
          return beer;
        });
        return beersArr.filter((beer) => beer.ph < 4);
      })
      .catch((error) => console.error(error));
  }

  // if there is only a search term
  if (searchTerm && !abv && !age) {
    filteredURL = `?beer_name=${searchTerm}`;
    // if all selected
  } else if (searchTerm && abv && age) {
    filteredURL = `?${ABV_URL}${age_URL}&beer_name=${searchTerm}`;

    // if ABV filter ticked only
  } else if (!searchTerm && abv && !age) {
    filteredURL = `?${ABV_URL}`;

    // if age filter ticked only
  } else if (!searchTerm && !abv && age) {
    filteredURL = `?${age_URL}`;

    // search term & abv
  } else if (searchTerm && abv && !age) {
    filteredURL = `?${ABV_URL}&beer_name=${searchTerm}`;

    // search term & age
  } else if (searchTerm && !abv && age) {
    filteredURL = `?${age_URL}&beer_name=${searchTerm}`;
  }
  // if search is reset
  else if (!searchTerm && !abv && !age) {
    filteredURL = ``;
  }

  return fetch(`${API_URL}${filteredURL}`)
    .then((response) => response.json())
    .then((respJason) => {
      return respJason;
    })
    .catch((error) => console.error(error));
};
