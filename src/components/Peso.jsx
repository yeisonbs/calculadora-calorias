import React from 'react';
import { useState } from 'react';
import '../stylesheets/Formulario.css';

function Peso({ sistemaMetrico, peso, onPesoChange }) {
  const [mensajeError, setMensajeError] = useState('');

  const handlePesoChange = (event) => {
    const nuevoPeso = event.target.value;

    // Verificar que el nuevo peso sea un número y no sea negativo
    const pesoNumerico = parseFloat(nuevoPeso);

    if (isNaN(pesoNumerico) || pesoNumerico < 0) {
      setMensajeError('Por favor, ingrese un valor numérico positivo.');
    } else {
      let pesoMinimo = 40.5;
      let pesoMaximo = 300;

      if (sistemaMetrico === 'metrico') {
        pesoMinimo = 40.5;
        pesoMaximo = 300;
      } else {
        pesoMinimo = 89.29; // 40.5 kg convertido a libras
        pesoMaximo = 661.39; // 300 kg convertido a libras
      }

      if (pesoNumerico >= pesoMinimo && pesoNumerico <= pesoMaximo) {
        setMensajeError(''); // Limpiar el mensaje de error si el peso es válido
        onPesoChange(nuevoPeso);
      } else {
        setMensajeError('El peso ingresado no está dentro del rango permitido.');
      }
    }
  };

  return (
    <div>
      <label htmlFor="peso">Peso:</label>
      <input className='input-formulario'
        type="text"
        id="peso"
        value={peso}
        onChange={handlePesoChange}
      />
      <label>
        {sistemaMetrico === 'metrico' ? 'Kg' : 'Lb'}
      </label>
      <div className="error-mensaje">
        {mensajeError && mensajeError.split('\n').map((error, index) => (
          <span key={index}>{error}<br /></span>
        ))}
      </div>
    </div>
  );
}

export default Peso;
