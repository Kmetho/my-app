import { createApi } from "unsplash-js";

import NextCors from "nextjs-cors";

async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
}

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

const getUrlFoursquare = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const fetchImages = async () => {
  const imagesResponse = await unsplash.search.getPhotos({
    query: "flower shop",
    // page: 1,
    perPage: 30,
  });
  const images = imagesResponse.response?.results || [];
  return images.map((result) => result.urls["regular"]);
};

export const fetchData = async (
  latLong = "55.67602764898095,12.560172197939625",
  limit = 10
) => {
  const images = await fetchImages();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FSQ_API_KEY,
    },
  };
  const dataResponse = await fetch(
    getUrlFoursquare(latLong, "flower", limit),
    options
  );
  const data = await dataResponse.json();

  return data.results.map((result, idx) => {
    return {
      id: result.fsq_id,
      name: result.name,
      address: result.location.address,
      imgUrl: images.length > 0 ? images[idx] : null,
    };
  });
};
