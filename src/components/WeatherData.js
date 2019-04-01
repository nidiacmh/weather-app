import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = ( ) => (
  <div> Datos del clima
    <WeatherTemperature/>
    <WeatherExtraInfo humidity = {80} wind = {"10 m/s"}/>
  </div>
);

export default WeatherData;
