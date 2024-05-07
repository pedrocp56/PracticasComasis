/* eslint-disable @rushstack/no-new-null*/
import * as React from "react";

/*
export function fechaAString(fecha: Date): string {
    const dia = ('0' + fecha.getDate()).slice(-2); // Obtener el día y asegurarse de que tenga 2 dígitos
    const mes = ('0' + (fecha.getMonth() + 1)).slice(-2); // Obtener el mes y asegurarse de que tenga 2 dígitos
    const anio = fecha.getFullYear(); // Obtener el año
    const hora = ('0' + fecha.getHours()).slice(-2); // Obtener la hora y asegurarse de que tenga 2 dígitos
    const minutos = ('0' + fecha.getMinutes()).slice(-2); // Obtener los minutos y asegurarse de que tenga 2 dígitos

    return `${dia}/${mes}/${anio} ${hora}:${minutos}`; // Devolver la cadena en el formato deseado sin segundos
}
*/
/*
export function stringAFecha(fechaComoString: string): Date | null {
    const partes = fechaComoString.split(' '); // Dividir la cadena en fecha y hora
    if (partes.length !== 2) {
        console.error('La cadena de fecha no está en el formato esperado.');
        return null;
    }

    const fechaPartes = partes[0].split('/'); // Dividir la parte de la fecha en día, mes y año
    if (fechaPartes.length !== 3) {
        console.error('La parte de la fecha no está en el formato esperado.');
        return null;
    }

    const horaPartes = partes[1].split(':'); // Dividir la parte de la hora en hora y minutos
    if (horaPartes.length !== 2) {
        console.error('La parte de la hora no está en el formato esperado.');
        return null;
    }

    const dia = parseInt(fechaPartes[0], 10); // Obtener el día como número entero
    const mes = parseInt(fechaPartes[1], 10) - 1; // Obtener el mes como número entero (restamos 1 ya que los meses son indexados desde 0)
    const anio = parseInt(fechaPartes[2], 10); // Obtener el año como número entero
    const hora = parseInt(horaPartes[0], 10); // Obtener la hora como número entero
    const minutos = parseInt(horaPartes[1], 10); // Obtener los minutos como número entero

    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || isNaN(hora) || isNaN(minutos)) {
        console.error('Alguno de los componentes de la fecha no es un número válido.');
        return null;
    }

    return new Date(anio, mes, dia, hora, minutos); // Devolver el objeto Date creado con los componentes de la cadena
}
*/

const UsarFecha: React.FC<{ fecha: Date }> = ({ fecha }) => {
    if (!fecha) {
        return <div>Sin fecha</div>;
    }
    return (
        <span>{fecha.toLocaleDateString()} {fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    );
};
export default UsarFecha;

/*
export function filtroFecha() {
    return "aaaaaaaaaaaaaaaaaaaa";
}
*/

/* eslint-enable */

