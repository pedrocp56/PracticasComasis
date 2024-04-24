import { ArmaItem } from "../ArmaItem";

export const CalcularDañoMax = (item: ArmaItem): number => {
  const daño =item.Daño;
  // Verificar si damage es una cadena
  if (typeof daño !== 'string') {
    return 0; // Si no es una cadena, devolver 0
  }
  // Eliminar espacios en blanco
  const dañoLimpio = daño.replace(/\s/g, '');

  // Comprobar si la cadena contiene solo letras
  if (/^[a-zA-Z]+$/.test(dañoLimpio)) {
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

  // Calcular el total del daño
  const dañoTotal = diceValues.reduce((acc, val) => acc + val, 0);
  return dañoTotal;
};
