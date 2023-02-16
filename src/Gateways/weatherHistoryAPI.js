import options from './Constant/Options';

export const getWeatherHistory = async (city, dateTo, dateEnd) => {
  return await fetch(
    `https://weatherapi-com.p.rapidapi.com/history.json?q=${city}&dt=${dateTo}&end_dt=${dateEnd}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
