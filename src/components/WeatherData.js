import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = ( ) => (
  <div> Datos del clima
    <WeatherTemperature/>
    <WeatherExtraInfo/>
  </div>
);

export default WeatherData;
