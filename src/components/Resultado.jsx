import React from 'react';

function Resultado({ resultado }) {
  return (
    <div>
      <label>Resultado del cálculo:</label>
      <label>{resultado}</label>
    </div>
  );
}

export default Resultado;
