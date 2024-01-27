import React from 'react';

function Edad({ onEdadChange }) {
  return (
    <div>
      <label htmlFor="edad">Edad:</label>
      <select id="edad" onChange={onEdadChange}>
        {Array.from({ length: 90 }, (_, index) => (
          <option key={index} value={index + 16}>
            {index + 16} años
          </option>
        ))}
      </select>
    </div>
  );
}

export default Edad;
