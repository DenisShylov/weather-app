export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '324f433126mshdc928de9fb9fb30p1b93e5jsncb83a7919244',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const UKRAINE_COUNTRY_ID = 'Q212';

export const autocompleteDB = async (inputValue) => {
  return await fetch(
    `${GEO_API_URL}/cities?countryIds=${UKRAINE_COUNTRY_ID}&minPopulation=100000&namePrefix=${inputValue}`,
    geoApiOptions
  );
};

export const fetchGeoData = async (city) => {
  return await fetch(
    city
      ? `${GEO_API_URL}/cities?countryIds=${UKRAINE_COUNTRY_ID}&minPopulation=10000&namePrefix=${city}`
      : `${GEO_API_URL}/cities?countryIds=${UKRAINE_COUNTRY_ID}&minPopulation=10000`,
    geoApiOptions
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => console.error(err));
};
