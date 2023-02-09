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
    if (e.target.textContent === 'Футбол') {
      setEvent('Football');
    }
    if (e.target.textContent === 'Гольф') {
      setEvent('Golf');
    }
    if (e.target.textContent === 'Крикет') {
      setEvent('Cricket');
    }
  };
  return (
    <>
      <div className="sport-events-title">Мировые спортивные события</div>
      <div className="sport-events-button" onClick={handleEvents}>
        <button className="sport-events-button-group">Крикет</button>
        <button className="sport-events-button-group">Футбол</button>
        <button className="sport-events-button-group">Гольф</button>
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
