import React, { useState } from 'react';

function Altura({ sistemaMetrico }) {
  const [altura, setAltura] = useState('');

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  return (
    <div>
      <label htmlFor="altura">Altura:</label>
      <input
        type="text"
        id="altura"
        value={altura}
        onChange={handleAlturaChange}
      />
      <label htmlFor="unidadAltura">
        {sistemaMetrico === 'metrico' ? 'cm' : 'pulg'}
      </label>
    </div>
  );
}

export default Altura;
