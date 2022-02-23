const API_URL = "https://api.punkapi.com/v2/beers";

// export const getBeers = () => {
//   return fetch(`${API_URL}`)
//     .then((response) => response.json())
//     .then((respJason) => {
//       return respJason;
//     })
//     .catch((error) => console.error(error));
// };

export const getFilteredBeers = (abv, age, searchTerm, PHFilter) => {
  let filteredURL = "";
  // if there is only a search term
  if (searchTerm && abv === false && age === false) {
    filteredURL = `${API_URL}?beer_name=${searchTerm}`;
    // if all selected
  } else if (searchTerm && abv === true && age === true) {
    filteredURL = `${API_URL}?abv_gt=6&brewed_before=1-2010&beer_name=${searchTerm}`;

    // if ABV filter ticked only
  } else if (!searchTerm && abv === true && age === false) {
    filteredURL = `${API_URL}?abv_gt=6`;

    // if age filter ticked only
  } else if (!searchTerm && abv === false && age === true) {
    filteredURL = `${API_URL}?brewed_before=1-2010`;

    // search term & abv
  } else if (searchTerm && abv === true && age === false) {
    filteredURL = `${API_URL}?abv_gt=6&beer_name=${searchTerm}`;

    // search term & age
  } else if (searchTerm && abv === false && age === true) {
    filteredURL = `${API_URL}?brewed_before=1-2010&beer_name=${searchTerm}`;
  }
  // if search is reset
  else if (!searchTerm && (abv === false) & (age === false)) {
    filteredURL = `${API_URL}`;
  }

  // if ph filter ticked
  if (PHFilter === true) {
    return fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((respJason) => {
        const beersArr = respJason.map((beer) => {
          return beer;
        });
        const acidFilteredBeers = beersArr.filter((beer) => beer.ph < 4);
        return acidFilteredBeers;
      })
      .catch((error) => console.error(error));
  }
  return fetch(`${filteredURL}`)
    .then((response) => response.json())
    .then((respJason) => {
      return respJason;
    })
    .catch((error) => console.error(error));
};
