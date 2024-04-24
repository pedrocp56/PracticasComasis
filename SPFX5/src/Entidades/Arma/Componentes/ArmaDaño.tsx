import { ArmaItem } from "../ArmaItem";

export const CalcularDañoMax = (a: ArmaItem, b: ArmaItem): number => {
  const dañoA = a.Daño;
  const dañoB = b.Daño;

  // Realizar el cálculo del daño máximo para ambos elementos
  const dañoMaxA = calcularDañoMaxIndividual(dañoA);
  const dañoMaxB = calcularDañoMaxIndividual(dañoB);

  // Comparar los valores de daño máximo y devolver el resultado de la comparación
  if (dañoMaxA < dañoMaxB) {
    return -1;
  }
  if (dañoMaxA > dañoMaxB) {
    return 1;
  }
  return 0; // En caso de que los valores sean iguales
};

const calcularDañoMaxIndividual = (daño: string): number => {
  console.log("Daño original:", daño);

  // Verificar si el daño es una cadena
  if (typeof daño !== 'string') {
    console.log("No es una cadena");
    return 0; // Si no es una cadena, devolver 0
  }

  // Eliminar espacios en blanco
  const dañoLimpio = daño.replace(/\s/g, '');
  console.log("Daño limpio:", dañoLimpio);

  // Comprobar si la cadena contiene solo números
  if (/^\d+$/.test(dañoLimpio)) {
    console.log("Solo números:", parseInt(dañoLimpio, 10));
    return parseInt(dañoLimpio, 10); // Si solo hay números, devolver el número como entero
  }

  // Comprobar si la cadena contiene solo letras
  if (/^[a-zA-Z]+$/.test(dañoLimpio)) {
    console.log("Solo letras:", dañoLimpio);
    return 0; // Si solo hay letras, devolver 0
  }

  // Extraer los valores de dados y sumarlos
  const diceValues = dañoLimpio.split('+').map((part) => {
    if (part.indexOf('d') !== -1) {
      const [diceCount, diceValue] = part.split('d').map(Number);
      return diceCount * diceValue;
    }
    return Number(part);
  });
  console.log("Valores de dados:", diceValues);

  // Calcular el total del daño
  const dañoTotal = diceValues.reduce((acc, val) => acc + val, 0);
  console.log("Daño total:", dañoTotal);
  return dañoTotal;
};
