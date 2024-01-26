class CalculadoraCalorias {
    calcularCalorias(peso, altura, edad) {
      // Definir los valores de la fórmula
      const factorMenos165 = 1.6;
      const factorEntre165y200 = 1.4;
      const factorEntre201y220 = 1.2;
      const factorMas220 = 1;
  
      // Calcular el factor según el peso
      let factor;
      if (peso < 165) {
        factor = factorMenos165;
      } else if (peso >= 165 && peso <= 200) {
        factor = factorEntre165y200;
      } else if (peso > 200 && peso <= 220) {
        factor = factorEntre201y220;
      } else {
        factor = factorMas220;
      }
  
      // Calcular las calorías según la fórmula
      const calorias = (10 * peso + 6.25 * altura - 10 * edad + 5) * factor;
  
      return calorias;
    }

    convertirCmAPulgadas(cm) {
      // 1 cm = 0.393701 pulgadas
      return cm * 0.393701;
    }

    convertirKgALibras(kg) {
      // 1 kg = 2.20462 libras
      return kg * 2.20462;
    }

  }
  
  export default CalculadoraCalorias;
  