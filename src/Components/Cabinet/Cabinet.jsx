import React, { useCallback } from 'react';
import useTheme from 'Hooks/useTheme';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { switchUnitsSelector } from 'redux/Weather/weather.selectors';
import { switchUnits } from 'redux/Weather/weather.actions';
import UserData from 'Components/UserData/UserData';
import { useEffect } from 'react';

const Cabinet = () => {
  const { isDark, setIsDark } = useTheme();
  localStorage.setItem('darkTheme', JSON.stringify(isDark));

  const handleTheme = useCallback(
    () => setIsDark(!isDark),
    [setIsDark, isDark]
  );

  const dispatch = useDispatch();
  const units = useSelector(switchUnitsSelector);

  useEffect(() => {
    localStorage.setItem('metric', JSON.stringify(units));
  }, [units]);

  const handleSwitchUnits = useCallback(() => {
    dispatch(switchUnits());
  }, [dispatch]);

  return (
    <>
      <h3>Настройки</h3>
      <div className="controls">
        <FormControlLabel
          value="Dark mode off/on"
          control={
            <Switch color="primary" checked={isDark} onChange={handleTheme} />
          }
          label="Темная тема выкл/вкл"
        />
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={!units}
              onChange={handleSwitchUnits}
            />
          }
          label="Метрический/Имперский"
          labelPlacement="end"
        />
      </div>
      <UserData />
    </>
  );
};

export default Cabinet;
