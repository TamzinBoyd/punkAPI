const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = () => {
  return fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((respJason) => {
      return respJason;
    })
    .catch((error) => console.error(error));
};

// Focus on building that queryString and sending the request off to Punk API to handle your searching/filtering for you :)
export const getFilteredBeers = (abv, age, searchTerm, PHFilter) => {
  // if there is only a search term
  if (searchTerm && abv === false && age === false) {
    return fetch(`${API_URL}?beer_name=${searchTerm}`)
      .then((response) => response.json())
      .then((respJason) => {
        console.log("search term only");
        return respJason;
      })
      .catch((error) => console.error(error));

    // if all selected
  } else if (searchTerm && abv === true && age === true) {
    return fetch(
      `${API_URL}?abv_gt=6&brewed_before=1-2010&beer_name=${searchTerm}`
    )
      .then((response) => response.json())
      .then((respJason) => {
        console.log("full info");
        return respJason;
      })
      .catch((error) => console.error(error));

    // if ABV filter ticked only
  } else if (!searchTerm && abv === true && age === false) {
    return fetch(`${API_URL}?abv_gt=6`)
      .then((response) => response.json())
      .then((respJason) => {
        console.log("abv only");
        return respJason;
      })
      .catch((error) => console.error(error));

    // if age filter ticked only
  } else if (!searchTerm && abv === false && age === true) {
    return fetch(`${API_URL}?brewed_before=1-2010`)
      .then((response) => response.json())
      .then((respJason) => {
        console.log("age only");
        return respJason;
      })
      .catch((error) => console.error(error));

    // search term & abv
  } else if (searchTerm && abv === true && age === false) {
    return fetch(`${API_URL}?abv_gt=6&beer_name=${searchTerm}`)
      .then((response) => response.json())
      .then((respJason) => {
        console.log("abv & search");
        return respJason;
      })
      .catch((error) => console.error(error));

    // search term & age
  } else if (searchTerm && abv === false && age === true) {
    return fetch(`${API_URL}?brewed_before=1-2010&beer_name=${searchTerm}`)
      .then((response) => response.json())
      .then((respJason) => {
        console.log("age & search");
        return respJason;
      })
      .catch((error) => console.error(error));
  }
  // if search is reset
  else if (!searchTerm && (abv === false) & (age === false)) {
    return fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((respJason) => {
        return respJason;
      })
      .catch((error) => console.error(error));
  }

  // if ph filter ticked
  else if (PHFilter === true) {
    return fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((respJason) => {
        console.log(respJason);
      })
      .catch((error) => console.error(error));
  }
};
