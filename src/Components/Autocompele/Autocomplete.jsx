import { getAutocomplete } from 'Gateways/geoAPI';
import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Autocomplete.css';

const AutocompleteField = ({ search, city, setCity }) => {
  const [searchCity, setSearchCity] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '324f433126mshdc928de9fb9fb30p1b93e5jsncb83a7919244',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    const fetching = async (city) => {
      if (!city || city === ' ') return;

      try {
        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/search.json?q=${
            city[0].toUpperCase() + city.slice(1)
          }`,
          options
        );
        const data = await response.json();
        setSearchCity(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetching(city);
  }, [city]);

  const handleAddCityAutocomplete = useCallback(
    (e) => {
      setCity(e.target.textContent);
      search(searchCity);
    },
    [search, searchCity, setCity]
  );

  return (
    <>
      <div className="autocomplete-container">
        {searchCity === ''
          ? null
          : searchCity.map((item) => {
              return (
                <span
                  key={uuidv4()}
                  onClick={handleAddCityAutocomplete}
                >{`${item?.name}, ${item?.country}`}</span>
              );
            })}
      </div>
    </>
  );
};

export default AutocompleteField;
