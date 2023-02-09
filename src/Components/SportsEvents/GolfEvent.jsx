import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const GolfEvent = ({ data }) => {
  const golfEventsData = data.golf;

  return golfEventsData.length === 0 ? (
    <div>Событий не найдено</div>
  ) : (
    golfEventsData.map((item) => {
      return (
        <div className="sport-events" key={uuidv4()}>
          <span>Страна: {item.country};</span>
          <span>Турнир: {item.tournament};</span>
          <span>Стадион: {item.stadium};</span>
          <span>Начало: {item.start};</span>
        </div>
      );
    })
  );
};

export default GolfEvent;
