import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const FootbalEvent = ({ data }) => {
  const footballEventsData = data.football;

  return footballEventsData.length === 0 ? (
    <div>Событий не найдено</div>
  ) : (
    <>
      {data.football.map((item) => {
        return (
          <div className="sport-events" key={uuidv4()}>
            <span>Country: {item.country};</span>
            <span>Tournament: {item.tournament};</span>
            <span>Stadium: {item.stadium};</span>
            <span>Start: {item.start};</span>
          </div>
        );
      })}
    </>
  );
};

export default FootbalEvent;
