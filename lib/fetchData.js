export const fetchData = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.FSQ_API_KEY,
    },
  };

  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?query=flower&near=Copenhagen%2C%20Denmark",
    options
  );
  const data = await response.json();
  return data.results;
};
