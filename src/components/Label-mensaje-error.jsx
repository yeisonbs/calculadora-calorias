// LabelMensajeError.js
import React from 'react';

function LabelMensajeError({ mensaje }) {
  return (
    <label style={{ color: 'red', marginTop: '5px',fontSize:'0.8em' }}>
      {mensaje}
    </label>
  );
}

export default LabelMensajeError;
