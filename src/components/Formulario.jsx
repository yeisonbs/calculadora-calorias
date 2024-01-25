import React from "react";
import { useState } from "react";
import "../stylesheets/Formulario.css";
import Edad from "./Edad";
import SistemaMetrico from "./SistemaMetrico";
import Altura from "./Altura";
import Peso from "./Peso";
import BotonCalcular from "./BotonCalcular";

function Formulario() {
    // Estado para almacenar la edad seleccionada
    const [edad, setEdad] = useState(5);
    const [sistemaMetrico, setSistemaMetrico] = useState("metrico");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    // Manejador de cambios en el menú edad
    const handleEdadChange = (event) => {
        setEdad(parseInt(event.target.value, 10));
    };

    //manejador de cambios en el menú sistema métrico
    const handleSistemaMetricoChange = (nuevoSistemaMetrico) => {
        setSistemaMetrico(nuevoSistemaMetrico);
    };

    const handleAlturaChange = (nuevaAltura) => {
        setAltura(nuevaAltura);
      };

      const handlePesoChange = (nuevoPeso) => {
        setPeso(nuevoPeso);
      };

    const handleCalcularClick = () => {
        // Convertir la altura y peso a números y realizar la operación de suma
        const alturaNumero = parseFloat(altura);
        const pesoNumero = parseFloat(peso);
    
        if (!isNaN(alturaNumero) && !isNaN(pesoNumero)) {
          const resultado = alturaNumero + pesoNumero;
          console.log('Resultado de la suma:', resultado);
        } else {
          console.error('Por favor, ingrese valores numéricos válidos para altura y peso.');
        }
      };

    return (
        <div className="contenedor-Formulario">
            <img
                className="imagen-Formulario"
                src={require(`../imagenes/calculadoraCalorias.jpg`)}
                alt="imagen como calcular calorias"
            />

            <div className="contenedor-texto-Formulario">
                <form className="formulario">
                    {/*seccion para seleccionar la edad */}
                    <Edad onEdadChange={handleEdadChange} />

                    {/*sección para el sistema métrico */}
                    <SistemaMetrico onSistemaMetricoChange={handleSistemaMetricoChange} />

                    {/* Integrar los componentes Altura y Peso */}
                    <Altura sistemaMetrico={sistemaMetrico} onAlturaChange={handleAlturaChange} />
                    <Peso sistemaMetrico={sistemaMetrico} onPesoChange={handlePesoChange} />

                    {/* Integrar el componente BotonCalcular */}
                    <BotonCalcular onCalcularClick={handleCalcularClick} />
                </form>
            </div>
        </div>
    );
}

export default Formulario;
