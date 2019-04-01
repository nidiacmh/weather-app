import React from 'react';
/*
const Location = (props) => {
  console.log(props);
  //debugger;  sirve como punto de interrupción para saber que paso en esta parte de nuestro código

  //Destructuring: Cuando tenemos una propiedad con un nombre y la queremos para igual podemos usar esta tecnica
  const {city} = props; //aqui paso parametros
  return (<div> <h1> {city} </h1></div>);
};

esta función y la que esta acontinuación funcionan igual
*/

const Location = ({city}) => (<div> <h1> {city} </h1></div>);

export default Location;
