import React, { useState } from 'react';

function SistemaMetrico({ onSistemaMetricoChange }) {
  const [sistemaMetrico, setSistemaMetrico] = useState('metrico');

  const handleSistemaMetricoChange = (event) => {
    const nuevoSistemaMetrico = event.target.value;
    setSistemaMetrico(nuevoSistemaMetrico);
    onSistemaMetricoChange(nuevoSistemaMetrico);
  };

  return (
    <div>
      <label htmlFor="sistemaMetrico">Sistema Métrico:</label>
      <select
        id="sistemaMetrico"
        value={sistemaMetrico}
        onChange={handleSistemaMetricoChange}
      >
        <option value="metrico">Métrico</option>
        <option value="imperial">Imperial</option>
      </select>
    </div>
  );
}

export default SistemaMetrico;
