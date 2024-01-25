import React, { useState } from 'react';

function Peso({ sistemaMetrico }) {
  const [peso, setPeso] = useState('');

  const handlePesoChange = (event) => {
    setPeso(event.target.value);
  };

  return (
    <div>
      <label htmlFor="peso">Peso:</label>
      <input
        type="text"
        id="peso"
        value={peso}
        onChange={handlePesoChange}
      />
      <label htmlFor="unidadPeso">
        {sistemaMetrico === 'metrico' ? 'Kg' : 'Lb'}
      </label>
    </div>
  );
}

export default Peso;
