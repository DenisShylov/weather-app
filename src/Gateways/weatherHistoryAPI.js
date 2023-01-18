const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '324f433126mshdc928de9fb9fb30p1b93e5jsncb83a7919244',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const getWeatherHistory = async (city, dateTo, dateEnd) => {
  console.log(city, dateTo, dateEnd);
  return await fetch(
    `https://weatherapi-com.p.rapidapi.com/history.json?q=${city}&dt=${dateTo}&end_dt=${dateEnd}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

// console.log(getWeatherHistory('poltava', '2023-01-08', ' 2023-01-10'));
