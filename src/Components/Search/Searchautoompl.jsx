import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as stateSelector from 'redux/Weather/weather.selectors';
import * as weatherActions from '../../redux/Weather/weather.actions';
import { useDispatch, useSelector } from 'react-redux';
import { autoCompleteSearch } from 'Gateways/wetherAPI';
import CityPage from '../CityPage/CityPage';
import './Search';
import ShowSpinner from '../ShowSpinner/ShowSpinner';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Stack, Autocomplete, Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  autocompleteDB,
  geoApiOptions,
  GEO_API_URL,
  UKRAINE_COUNTRY_ID,
} from 'Gateways/geoAPI';
import { getData } from 'redux/Autocomplete/autocomplete.actions';
import { autocompleteDataSelector } from 'redux/Autocomplete/autocomplete.selectors';

const Search = () => {
  const dataRedux = useSelector((state) => stateSelector.dataSelector(state));
  const isFetching = useSelector((state) =>
    stateSelector.fetchingSelector(state)
  );
  const autocompleteData = useSelector((state) =>
    autocompleteDataSelector(state)
  );
  const dispatch = useDispatch();
  console.log('dataRedux', dataRedux);
  const [jsonResult, setJsonResult] = useState([]);
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    setData(dataRedux);
  }, [dataRedux]);
  console.log('city', city);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     return await fetch(
  //       city
  //         ? `${GEO_API_URL}/cities?countryIds=${UKRAINE_COUNTRY_ID}&minPopulation=10000&namePrefix=${city}`
  //         : `${GEO_API_URL}/cities?countryIds=${UKRAINE_COUNTRY_ID}&minPopulation=10000`,
  //       geoApiOptions
  //     )
  //       .then((response) => response.json())
  //       .then((response) => setJsonResult(response.data))
  //       .catch((err) => console.error(err));
  //   };
  //  fetchData()
  // }, [city]);

  useEffect(() => {
    dispatch(getData(city));
    setJsonResult(autocompleteData);
    console.log(jsonResult);
  }, [city]);
  const handleChange = useCallback((e) => {
    return setCity(e.target.value);
  }, []);

  const handleSearch = () => {
    dispatch(weatherActions.getWeatherData(city));
  };

  return (
    <>
      {/* <Row>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
            alignItems: 'center',
          }}
        >
          <input
            style={{
              borderRadius: '25px',
              padding: '5px',
              textAlign: 'center',
            }}
            type="text"
            value={city}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            style={{ cursor: 'pointer', marginLeft: '20px', fontSize: '20px' }}
            icon={faMagnifyingGlass}
            onClick={handleSearch}
          />
        </Col>
      </Row>

      {isFetching && <ShowSpinner />}
          {dataRedux && <CityPage data={dataRedux} />}*/}

      {jsonResult && (
        <Stack sx={{ width: 300, margin: 'auto' }}>
          <Autocomplete
            id="search_city"
            getOptionLabel={(jsonResult) => `${jsonResult.name}`}
            options={jsonResult}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={'No cities'}
            renderOption={(props, jsonResult) => (
              <Box component="li" {...props} key={jsonResult.id}>
                {jsonResult.name} {jsonResult.region}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={handleChange}
                label="Search cities"
              />
            )}
          />
          <SearchIcon onClick={handleSearch} />
        </Stack>
      )}
      {isFetching && <ShowSpinner />}
      {dataRedux && <CityPage data={dataRedux} />}
    </>
  );
};

export default Search;
