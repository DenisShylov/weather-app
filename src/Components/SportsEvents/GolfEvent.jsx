import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const GolfEvent = (data) => {
  return (
    <>
      {data.data.golf.map((item) => {
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

export default GolfEvent;
