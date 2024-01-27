class CalculadoraCalorias {
  calcularCalorias(peso, altura, edad) {
    // Definir los valores de la fórmula
    const factorMenos165 = 1.6;
    const factorEntre165y200 = 1.4;
    const factorEntre201y220 = 1.2;
    const factorMas220 = 1;

    // Calcular el factor según el peso
    let factor =
      peso < 165 ? factorMenos165 :
        peso <= 200 ? factorEntre165y200 :
          peso <= 220 ? factorEntre201y220 :
            factorMas220;

    // Calcular las calorías según la fórmula
    const calorias = (10 * peso + 6.25 * altura - 10 * edad + 5) * factor;

    return calorias;
  }

  // 1 cm = 0.393701 pulgadas
  convertirCmAPulgadas(cm) { return cm * 0.393701; }

  // 1 kg = 2.20462 libras
  convertirKgALibras(kg) { return kg * 2.20462; }

}

export default CalculadoraCalorias;
