import { getAutocomplete } from 'Gateways/geoAPI';
import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import './Autocomplete.css';

const AutocompleteField = ({ search, city, setCity }) => {
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    const fetching = async (city) => {
      if (!city || city === '') return;
      const data = await getAutocomplete(city);
      setSearchCity(data);
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
        {searchCity === '' || searchCity === []
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

AutocompleteField.propTypes = {
  search: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};

export default AutocompleteField;
