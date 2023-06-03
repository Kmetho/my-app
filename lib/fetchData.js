import { createApi } from "unsplash-js";
import trackLocation from "@/hooks/trackLocation";

const { latLong } = trackLocation;

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const fetchImages = async () => {
  const imagesResponse = await unsplash.search.getPhotos({
    query: "flower garden",
    page: 1,
    perPage: 30,
  });
  const images = imagesResponse.response.results;
  return images.map((result) => result.urls["regular"]);
};

export const fetchData = async () => {
  const images = await fetchImages();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FSQ_API_KEY,
    },
  };

  const dataResponse = await fetch(
    getUrlForCoffeeStores(
      "55.67602764898095%2C12.560172197939625",
      "flower",
      10
    ),
    options
  );
  const data = await dataResponse.json();
  return data.results.map((result, idx) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address,
      imgUrl: images[idx],
    };
  });
};
