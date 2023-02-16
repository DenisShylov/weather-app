import options from './Constant/Options';

export const getAutocomplete = async (city) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/search.json?q=${
        city[0].toUpperCase() + city.slice(1)
      }`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
};
