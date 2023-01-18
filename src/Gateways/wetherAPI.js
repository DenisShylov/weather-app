// const API_KEY = '6b6531c979dc967a8047a5168926dd1b';
// const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?`;

import { async } from '@firebase/util';

// export const getWeatherData = async (city) => {
//   return await fetch(
//     `${BASE_URL}q=${city}&appid=${API_KEY}&units=metric&lang=ru`
//   )
//     .then((response) => response.json())
//     .then((data) => data);
// };

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '324f433126mshdc928de9fb9fb30p1b93e5jsncb83a7919244',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const weatherData = async (city) => {
  return await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
