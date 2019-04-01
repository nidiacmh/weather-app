import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY,
}from './../constants/weathers';

const WeatherData = ( ) => (
  <div>
    <span>Datos del clima:</span>
    <WeatherTemperature
      temperature = {20}
      weatherState={CLOUDY}
    />
    <WeatherExtraInfo humidity = {80} wind = {"10 m/s"}/>
  </div>
);

export default WeatherData;
