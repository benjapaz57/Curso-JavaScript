class Pacientes {
constructor(nombre, edad, inicio, mail, frecuencia) {
    (this.nombre = nombre),
    (this.edad = edad),
    (this.inicio = inicio),
    (this.mail = mail),
    (this.frecuencia = frecuencia);
}
turnos(turno) {
    if (turno <= this.frecuencia) {
    console.log("No puedes guardar un turno");
    alert("No puedes guardar un turno");
    } else {
    console.log("Guardaste un turno correctamente");
    alert("Guardaste un turno correctamente");
    }
}
}
const pacienteUno = new Pacientes(
"Benjamin Paz",
"26 años",
"Mayo 2020",
"pacienteUno@mail.com",
"15 dias"
);
const pacienteDos = new Pacientes(
"Juan Perez",
"30 años",
"Enero 2019",
"pacienteDos@mail.com",
"30 dias"
);
const pacienteTres = new Pacientes(
"María Diaz",
"19 años",
"Marzo 2021",
"pacienteTres@mail.com",
"7 dias"
);
let turnero = prompt("¿Dentro de cuantos dias es su turno?");
console.log(pacienteUno);
console.log(pacienteDos.frecuencia);
pacienteDos.turnos(turnero);