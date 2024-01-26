import React from 'react';

function Peso({ sistemaMetrico, peso, onPesoChange }) {
  const handlePesoChange = (event) => {
    const nuevoPeso = event.target.value;
    onPesoChange(nuevoPeso);
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

      
        <label>
          {sistemaMetrico === 'metrico' ? 'Kg' : 'Lb'}
        </label>
     
      
    </div>
  );
}

export default Peso;
