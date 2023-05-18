export const fetchData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FSQ_API_KEY,
    },
  };

  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?query=flower&ll=55.67602764898095%2C12.560172197939625",
    options
  );
  const data = await response.json();
  return data.results;
};
