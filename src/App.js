import "./App.css";
import Testimonio from "./components/Formulario";


function App() {
  return (
    <div className="App">
      <h1>Calculadora de Calorias</h1>
      <Testimonio
      nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'/>
       
    </div>
  );
}

export default App;
