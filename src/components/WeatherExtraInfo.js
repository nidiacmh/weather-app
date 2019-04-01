import React from 'react';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div>
    <span> Información extra sobre el clima: </span>
    <span> {`${humidity} % ~ `} </span>
    <span> {`${wind} viento`} </span>
  </div>
);

export default WeatherExtraInfo;
