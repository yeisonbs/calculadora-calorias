import React from 'react';
import { useState } from 'react';

function Altura({ sistemaMetrico, onAlturaChange }) {

  const [alturaIngresada, setAlturaIngresada] = useState('');
  
  const handleAlturaChange = (event) => {
    const nuevaAltura = event.target.value;
    onAlturaChange(nuevaAltura);
    setAlturaIngresada(nuevaAltura);
    
  };

  return (
    <div>
      <label htmlFor="altura">Altura:</label>
      <input
        type="text"
        id="altura"
        value={alturaIngresada}
        onChange={handleAlturaChange}
      />
      
      <label >
        {sistemaMetrico === 'metrico' ? 'cm' : 'pulg'}
      </label>
      
      
    </div>
  );
}

export default Altura;
