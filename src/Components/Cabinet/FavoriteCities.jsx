import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCiti } from 'redux/Weather/weather.actions';
import {
  favoriteCitiesSelector,
  setCitiSelector,
} from 'redux/Weather/weather.selectors';
import { v4 as uuidv4 } from 'uuid';

import './FavoriteCities.css';

const FavoriteCities = ({ setCity }) => {
  const favoriteCities = useSelector(favoriteCitiesSelector);
  const dispatch = useDispatch();
  const city = useSelector(setCitiSelector);

  const handleAddSearchCiti = useCallback(
    (index) => {
      dispatch(setCiti(favoriteCities[index]));
      setCity(city);
    },
    [dispatch, favoriteCities, setCity, city]
  );
  return (
    <>
      <div className="list-cities">
        {favoriteCities.map((city, index) => {
          return (
            <span
              className="list-cities__item"
              onClick={() => handleAddSearchCiti(index)}
              key={uuidv4()}
            >
              {city}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default FavoriteCities;
