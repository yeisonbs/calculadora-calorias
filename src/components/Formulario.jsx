import React from "react";
import { useState } from "react";
import "../stylesheets/Formulario.css";
import Edad from "./Edad";
import SistemaMetrico from "./SistemaMetrico";
import Altura from "./Altura";
import Peso from "./Peso";
import Resultado from "./Resultado";
import BotonCalcular from "./BotonCalcular";

function Formulario() {
    // Estado para almacenar la edad seleccionada
    const [edad, setEdad] = useState(5);
    const [sistemaMetrico, setSistemaMetrico] = useState("metrico");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);


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

    const handleCalcularClick = (event) => {
        event.preventDefault();
        const alturaNumero = parseFloat(altura);
        const pesoNumero = parseFloat(peso);

        if (Number.isFinite(alturaNumero) && Number.isFinite(pesoNumero) && alturaNumero >= 0 && pesoNumero >= 0) {
            let resultadoCalculo;

            if (sistemaMetrico === 'metrico') {
                // Sumar altura y peso
                resultadoCalculo = alturaNumero + pesoNumero;
            } else {
                // Restar altura y peso
                resultadoCalculo = alturaNumero - pesoNumero;
                console.log('Resultado resta:', resultadoCalculo);
            }
            setResultado(resultadoCalculo);
            //onResultadoChange(resultadoCalculo); // Pasar el resultado al componente padre (App.js)
        } else {
            console.error('Por favor, ingrese valores numéricos válidos para altura y peso.');
        }

        console.log('¡Clic realizado!');
        
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

                    {/* Integrar el componente Altura y pasar la función de manejo como prop */}

                    <Altura sistemaMetrico={sistemaMetrico} onAlturaChange={handleAlturaChange} />
                    <label>Altura ingresada: {altura} </label>



                    {/* Integrar el componente Peso y pasar la función de manejo como prop */}
                    <Peso sistemaMetrico={sistemaMetrico} onPesoChange={handlePesoChange} />
                    <label>Peso ingresado: {peso} </label>

                    {/* Integrar el componente BotonCalcular */}
                    <button onClick={handleCalcularClick}>Calcular</button>

                    {/* <BotonCalcular onCalcularClick={handleCalcularClick} /> */}
                    <label htmlFor=""> { } </label>

                    {resultado !== null && <Resultado resultado={resultado} />}
                </form>
            </div>
        </div>
    );
}

export default Formulario;
