import React from "react";
import "../stylesheets/Formulario.css";

function Formulario(props) {
  return (
    <div className="contenedor-Formulario">
      <img
        className="imagen-Formulario"
        src={require(`../imagenes/calculadoraCalorias.jpg`)}
        alt="imagen como calcular calorias"
      />

      <div className="contenedor-texto-Formulario">
        
        <p className="cargo-Formulario">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-Formulario">"{props.Formulario}"</p>
      </div>
    </div>
  );
}

export default Formulario;
