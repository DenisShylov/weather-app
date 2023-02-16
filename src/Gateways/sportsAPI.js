import options from './Constant/Options';

export const fetchSportsEvents = async () => {
  try {
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/sports.json?q=London`,
      options
    );
    return response.json();
  } catch (error) {
    alert(error.message);
  }
};
