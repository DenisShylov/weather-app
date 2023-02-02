import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSportData } from 'redux/SportEvents/sportEvents.actions';
import { sportDataSelector } from 'redux/SportEvents/sportEvents.selectors';

import CricketEvent from './CricketEvent';
import FootbalEvent from './FootbalEvent';
import GolfEvent from './GolfEvent';

import './SportEvents.css';

const SportsEvents = () => {
  const dispatch = useDispatch();

  const [event, setEvent] = useState('');

  useEffect(() => {
    dispatch(getSportData());
  }, [dispatch]);

  const data = useSelector(sportDataSelector);

  const handleEvents = (e) => {
    if (e.target.textContent === 'Football') {
      setEvent('Football');
    }
    if (e.target.textContent === 'Golf') {
      setEvent('Golf');
    }
    if (e.target.textContent === 'Cricket') {
      setEvent('Cricket');
    }
  };
  return (
    <>
      <div className="sport-events-title">World Sport Events</div>
      <div className="sport-events-button" onClick={handleEvents}>
        <button className="sport-events-button-group">Cricket</button>
        <button className="sport-events-button-group">Football</button>
        <button className="sport-events-button-group">Golf</button>
      </div>
      {event === 'Football' && (
        <div className="container-sport-events">
          <FootbalEvent data={data} />
        </div>
      )}
      {event === 'Golf' && (
        <div className="container-sport-events">
          <GolfEvent data={data} />
        </div>
      )}
      {event === 'Cricket' && (
        <div className="container-sport-events">
          <CricketEvent data={data} />
        </div>
      )}
    </>
  );
};

export default SportsEvents;
