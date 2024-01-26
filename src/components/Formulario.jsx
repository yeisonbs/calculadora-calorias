import React from "react";
import { useState } from "react";
import "../stylesheets/Formulario.css";
import Edad from "./Edad";
import SistemaMetrico from "./SistemaMetrico";
import Altura from "./Altura";
import Peso from "./Peso";
import Resultado from "./Resultado";
//import BotonCalcular from "./BotonCalcular";
import LabelMensajeError from "./Label-mensaje-error";
import CalculadoraCalorias from "../Logica-negocio/CalculadoraCalorias";

function Formulario() {
    // Estado para almacenar la edad seleccionada
    const [edad, setEdad] = useState(5);
    const [sistemaMetrico, setSistemaMetrico] = useState("metrico");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [resultado, setResultado] = useState(null);
    const [mensajeError, setMensajeError] = useState("");
    //const [alturaCm, setAlturaCm] = useState(0);
    //const [pesoLibras, setPesoLibras] = useState(0);

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
        const calculadora = new CalculadoraCalorias();

        if (
            Number.isFinite(alturaNumero) &&
            Number.isFinite(pesoNumero) &&
            alturaNumero >= 0 &&
            pesoNumero >= 0
        ) {
            //let resultadoCalculo;
            let calorias;
            if (sistemaMetrico === "metrico") {
                // Sumar altura y peso
                //resultadoCalculo = alturaNumero + pesoNumero;
                const alturaPulgadas = calculadora.convertirCmAPulgadas(alturaNumero);
                const pesoLibras = calculadora.convertirKgALibras(pesoNumero);
                calorias = calculadora.calcularCalorias(pesoLibras,alturaPulgadas,parseInt(edad, 10));
                console.log("pulg "+alturaPulgadas);
                console.log("libara"+pesoLibras);
               
            } else {
                calorias = calculadora.calcularCalorias(pesoNumero, alturaNumero, parseInt(edad, 10));
                //console.log((resultadoCalculo = alturaNumero - pesoNumero));
                console.log(edad);
                console.log("las calorias son"+ calorias);
            }

            if (calorias >= 0) {
                setResultado(calorias);
                setMensajeError("");
            } else {
                setMensajeError("corregir los datos ingresados");
                //onResultadoChange(resultadoCalculo); // Pasar el resultado al componente padre (App.js)
            }
        } else {
            setMensajeError("Por favor, corrija los errores antes de calcular.");
        }

        console.log("¡Clic realizado!");
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

                    <Altura
                        sistemaMetrico={sistemaMetrico}
                        onAlturaChange={handleAlturaChange}
                    />
                    {mensajeError && <LabelMensajeError mensaje={mensajeError} />}

                    {/* Integrar el componente Peso y pasar la función de manejo como prop */}
                    <Peso
                        sistemaMetrico={sistemaMetrico}
                        onPesoChange={handlePesoChange}
                    />
                    {mensajeError && <LabelMensajeError mensaje={mensajeError} />}

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
