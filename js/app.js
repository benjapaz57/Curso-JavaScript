//Clase 6 arrays

class Pacientes {
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }

}

let datosPacientes = [];

const agregarPacientes = () => {
    let nombre = prompt('Ingrese el nombre y apellido del paciente')
    let mail = prompt('Ingrese el mail del paciente')

    let paciente = new Pacientes (nombre, mail)
    datosPacientes.push(paciente)
}

datosPacientes.sort((a, b) => {
    if (a.nombre > b.nombre){
        return 1
    }
    if (a.nombre < b.nombre){
        return -1
    }
    return 0
})

console.log(datosPacientes)