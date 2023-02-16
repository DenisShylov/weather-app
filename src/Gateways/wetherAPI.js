import options from './Constant/Options';

export const weatherData = async (city) => {
  return await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
