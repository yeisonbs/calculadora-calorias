import React from 'react';
import { useState } from 'react';
import '../stylesheets/Formulario.css';

function Altura({ sistemaMetrico, altura, onAlturaChange }) {
  const [mensajeError, setMensajeError] = useState('');

  const handleAlturaChange = (event) => {
    const nuevaAltura = event.target.value;

    // Verificar que la nueva altura sea un número y no sea negativa
    const alturaNumerica = parseFloat(nuevaAltura);

    if (isNaN(alturaNumerica) || alturaNumerica < 0) {
      setMensajeError('Por favor, ingrese un valor numérico positivo.');
    } else {
      
      let alturaMinima, alturaMaxima;

      if (sistemaMetrico === 'metrico') {
        alturaMinima = 140;
        alturaMaxima = 225;
      } else {
        alturaMinima = 55.12; // 140 cm convertido a pulgadas
        alturaMaxima = 88.58; // 225 cm convertido a pulgadas
      }


      if (alturaNumerica >= alturaMinima && alturaNumerica <= alturaMaxima) {
        setMensajeError(''); // Limpiar el mensaje de error si la altura es válida
        onAlturaChange(nuevaAltura);
      } else {
        setMensajeError('la altura ingresada no está dentro del rango permitido.');
      }
    }
  };

  return (
    <div>
      <label htmlFor="altura">Altura:</label>
      <input className='input-formulario'
        type="text"
        id="altura"
        value={altura}
        onChange={handleAlturaChange}
      />
      <label>
        {sistemaMetrico === 'metrico' ? 'cm' : 'pulg'}
      </label>
      <div className="error-mensaje">
        {mensajeError && mensajeError.split('\n').map((error, index) => (
          <span key={index}>{error}<br /></span>
        ))}
      </div>
    </div>
  );
}

export default Altura;
