export const getBeers = () => {
  return fetch(`https://api.punkapi.com/v2/beers`)
    .then((response) => response.json())
    .then((respJason) => {
      return respJason;
    })
    .catch((error) => console.error(error));
};
