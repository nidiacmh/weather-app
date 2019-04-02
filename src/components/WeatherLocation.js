import React from 'react';//Se importa el paquete de react
//import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData'

const WeatherLocation = () => (//arrow function

  <div>
      <Location city={"México - Puebla"}/>
      <WeatherData/>
  </div>
); //Este codigo se ejecuta con la ayuda de babel, es el cuerpo del componente



export default WeatherLocation;
