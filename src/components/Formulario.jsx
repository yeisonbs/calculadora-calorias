import React from "react";
import { useState, useEffect } from "react";
import "../stylesheets/Formulario.css";
import Edad from "./Edad";
import SistemaMetrico from "./SistemaMetrico";
import Altura from "./Altura";
import Peso from "./Peso";
import Resultado from "./Resultado";
import { useMemo } from "react";

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

    // Manejador de cambios en el menú edad
    const handleEdadChange = (event) => {
        setEdad(parseInt(event.target.value, 10));
    };

    //manejador de cambios en el menú sistema métrico
    const handleSistemaMetricoChange = (nuevoSistemaMetrico) => {
        // Reiniciar los valores de peso y altura si se cambia el sistema métrico
        if (nuevoSistemaMetrico !== sistemaMetrico) {
            setAltura("");
            setPeso("");
        }

        setSistemaMetrico(nuevoSistemaMetrico);
        setMensajeError(""); // Limpiar el mensaje de error en caso de éxito
    };

    const handleAlturaChange = (nuevaAltura) => {
        setAltura(nuevaAltura);
    };

    const handlePesoChange = (nuevoPeso) => {
        setPeso(nuevoPeso);
    };

    // const calculadora = new CalculadoraCalorias();
    const calculadora = useMemo(() => new CalculadoraCalorias(), []); // Asegúrate de importar useMemo


    useEffect(() => {
        //event.preventDefault();
        const alturaNumero = parseFloat(altura);
        const pesoNumero = parseFloat(peso);
        console.log(pesoNumero);
        console.log("peso formulario : " + typeof peso);

        let calorias;
        if (sistemaMetrico === "metrico") {
            const alturaPulgadas = calculadora.convertirCmAPulgadas(alturaNumero);
            const pesoLibras = calculadora.convertirKgALibras(pesoNumero);
            calorias = calculadora.calcularCalorias(pesoLibras, alturaPulgadas, parseInt(edad, 10));
        } else {
            calorias = calculadora.calcularCalorias(pesoNumero, alturaNumero, parseInt(edad, 10));
        }

        if (calorias >= 0) {
            setResultado(calorias);
            setMensajeError("");
        } else {
            setMensajeError("");
        }


    }, [altura, peso, edad, sistemaMetrico, calculadora]);



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
                    {mensajeError && <LabelMensajeError mensaje={mensajeError} />}

                    {/* Integrar el componente Peso y pasar la función de manejo como prop */}
                    <Peso sistemaMetrico={sistemaMetrico} onPesoChange={handlePesoChange} />
                    {mensajeError && <LabelMensajeError mensaje={mensajeError} />}


                    {mensajeError ? <Resultado mensaje={""} /> : resultado !== null && <Resultado resultado={resultado.toFixed(2)} />}

                </form>
            </div>
        </div>
    );
}

export default Formulario;
