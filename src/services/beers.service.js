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
export const getFilteredBeers = (abv, age, searchTerm) => {
  return fetch(
    `${API_URL}?abv_gt=${abv}&brewed_before=${age}&beer_name=${searchTerm}`
  )
    .then((response) => response.json())
    .then((respJason) => {
      console.log(respJason);
      return respJason;
    })
    .catch((error) => console.error(error));
};

export const getBrewedBeers = () => {
  return fetch(`${API_URL}?brewed_before=01-2010`)
    .then((response) => response.json())
    .then((respJason) => {
      return respJason;
    })
    .catch((error) => console.error(error));
};
