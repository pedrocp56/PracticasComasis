export function GeneradorDeNumeroHexadecimal():string {
    // Generar un número aleatorio entre 0 y 16777215
    const randomNumber = Math.floor(Math.random() * 16777216);

    // Convertir el número aleatorio a hexadecimal de 6 dígitos
    let hexString = randomNumber.toString(16);

    // Asegurarse de que tenga 6 dígitos, agregando ceros a la izquierda si es necesario
    while (hexString.length < 6) {
        hexString = "0" + hexString;
    }

    // Agregar el símbolo "#" al principio y convertir a mayúsculas
    return "#" + hexString.toUpperCase();
}