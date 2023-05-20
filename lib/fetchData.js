import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FSQ_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores("55.67602764898095%2C12.560172197939625", "flower", 10),
    options
  );
  const data = await response.json();
  return data.results;
};
