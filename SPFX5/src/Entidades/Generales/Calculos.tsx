import * as React from "react";
import { PersonajeArmaItem } from "../PersonajeArma/PersonajeArmaItem";
import { ArmaItem } from "../Arma/ArmaItem";

export function calcularBono(caracteristica: number): number {
    const bono = (caracteristica - 10) / 2;
    return Math.floor(bono);
}

export const CalcularAtaque: React.FC<{ item: PersonajeArmaItem }> = ({ item }) => {
    if(item.Arma === null ||item.Personaje===null){
        return <></>
    }
    let ataque = item.Arma?.Arma_Ataque;
    let text = "Ataque del arma:\t  \t" + item.Arma?.Arma_Ataque;
    if (item.Competencia) {
        const Bcomp = item.Personaje?.BCompetencia;
        ataque += Bcomp;
        text = text + "\nBono de competencia:  \t" + Bcomp;
    }
    let car = 0;
    const txtcar = item.Arma.Arma_Car
    switch (txtcar) {
        case "Fuerza":
            car = item.Personaje?.BFuerza;
            break;
        case "Destreza":
            car = item.Personaje?.BDestreza;
            break;
        case "Constitucion":
            car = item.Personaje?.BConstitucion;
            break;
        case "Inteligencia":
            car = item.Personaje?.BInteligencia;
            break;
        case "Sabiduria":
            car = item.Personaje?.BSabiduria;
            break;
        case "Carisma":
            car = item.Personaje?.BCarisma;
            break;
        default:
            console.log("Error en la caracteristica");
            break;
    }
    ataque += car;
    text = text + "\nBono de " + txtcar + ":\t\t" + car;
    ataque += item.Bonificacion;
    text = text + "\nBonificación:\t\t\t" + item.Bonificacion;
    text = text + "\nTotal:    \t\t\t\t" + ataque;
    return (
        <div title={text}>{ataque}</div>
    );
};
export const calcularDañoMaxIndividual = (daño: string): number => {
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
  
  export const SortDañoMax = (a: ArmaItem, b: ArmaItem): number => {
    const dañoA = a.Danho;
    const dañoB = b.Danho;
  
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