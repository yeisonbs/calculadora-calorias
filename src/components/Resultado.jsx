import React from 'react';

function Resultado({ resultado }) {
  return (
    <div>
      <label>Consumir al dia: </label>
      <label>{resultado} Calorias</label>
    </div>
  );
}

export default Resultado;
