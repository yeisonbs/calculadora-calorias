import "./App.css";
import { useState } from "react";
import Formulario from "./components/Formulario";
//import Resultado from "./components/Resultado";



function App() {

  const [resultadoTotal, setResultadoTotal] = useState(null);
  const handleResultadoChange = (nuevoResultado) => {
    setResultadoTotal(nuevoResultado);
  };

  return (
    <div className="App">
      <h1>Calculadora de Calorias</h1>
      <Formulario onResultadoChange={handleResultadoChange} />
      {resultadoTotal !== null &&  {resultadoTotal}}

    </div>
  );
}

export default App;
