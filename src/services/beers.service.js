const API_URL = "https://api.punkapi.com/v2/beers";

export const getBeers = () => {
  return fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((respJason) => {
      return respJason;
    })
    .catch((error) => console.error(error));
};

export const getABVBeers = () => {
  return fetch(`${API_URL}?abv_gt=6`)
    .then((response) => response.json())
    .then((respJason) => {
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
