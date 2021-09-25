//El ejemplo será de un turnero
const turnos = (nombre, dia, hora) => `El turno de ${nombre} será el ${dia} a las ${hora} horas`
let nombre = prompt('Ingrese su nombre y apellido');
let dia = prompt('Ingrese el día que desea venir');
let hora = prompt('Ingrese la hora en la que desea venir');

console.log(turnos(nombre, dia, hora))
alert('Su solicitud de un turno se guardó correctamente')
