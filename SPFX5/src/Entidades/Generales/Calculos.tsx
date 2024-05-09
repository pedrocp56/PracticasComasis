import * as React from "react";
import { PersonajeArmaItem } from "../PersonajeArma/PersonajeArmaItem";

export function calcularBono(caracteristica: number): number {
    const bono = (caracteristica - 10) / 2;
    return Math.floor(bono);
}

export const CalcularAtaque: React.FC<{ item: PersonajeArmaItem }> = ({ item }) => {
console.log(item);

    if(item.Arma === null ||item.Personaje===null){
        return <></>
    }
    let ataque = item.Arma?.Arma_Ataque;
    let text = "Ataque del arma:\t\t" + item.Arma?.Arma_Ataque;
    if (item.Competencia) {
        const Bcomp = item.Personaje?.BCompetencia;
        ataque += Bcomp;
        text = text + "\nBono de competencia:\t" + Bcomp;
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
    text = text + "\nTotal:    \t\t\t\t" + ataque;
    return (
        <div title={text}>{ataque}</div>
    );
};