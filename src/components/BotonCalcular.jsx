import React from 'react';

function BotonCalcular({ onCalcularClick }) {
  return (
    <div>
      <button onClick={onCalcularClick}>Calcular</button>
    </div>
  );
}

export default BotonCalcular;
