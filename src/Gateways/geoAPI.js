const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '324f433126mshdc928de9fb9fb30p1b93e5jsncb83a7919244',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
};

export const getAutocomplete = async (city) => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/search.json?q=${city}`,
      options
    );
    return response.json();
  } catch (error) {
    alert(error.message);
  }
};
