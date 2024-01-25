import React from 'react';

function Edad({ onEdadChange }) {
  return (
    <div>
      <label htmlFor="edad">Edad:</label>
      <select id="edad" onChange={onEdadChange}>
        {Array.from({ length: 96 }, (_, index) => (
          <option key={index} value={index + 5}>
            {index + 5} años
          </option>
        ))}
      </select>
    </div>
  );
}

export default Edad;
