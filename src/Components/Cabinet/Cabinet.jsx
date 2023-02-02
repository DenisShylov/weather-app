import React, { useCallback } from 'react';
import useTheme from 'Hooks/useTheme';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { switchUnitsSelector } from 'redux/Weather/weather.selectors';
import { switchUnits } from 'redux/Weather/weather.actions';
import UserData from 'Components/UserData/UserData';

const Cabinet = () => {
  const { isDark, setIsDark } = useTheme();

  const handleTheme = useCallback(
    () => setIsDark(!isDark),
    [setIsDark, isDark]
  );

  const units = useSelector(switchUnitsSelector);
  const dispatch = useDispatch();

  const handleSwitchUnits = useCallback(() => {
    dispatch(switchUnits());
  }, [dispatch]);

  return (
    <>
      <h3>Settings</h3>
      <div className="controls">
        <FormControlLabel
          value="Dark mode off/on"
          control={
            <Switch
              color="primary"
              checked={isDark !== true}
              onChange={handleTheme}
            />
          }
          label="Dark mode off/on"
        />
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={units !== true}
              onChange={handleSwitchUnits}
            />
          }
          label="Metric/Imperial"
          labelPlacement="end"
        />
      </div>
      <UserData />
    </>
  );
};

export default Cabinet;
