//Ejemplo act complementaria funciones
function solicitarMonto (){
    let monto = Number(prompt('Ingrese el monto.'))
    let porcentaje = Number(prompt('Ingrese el % a ganar'))
    
    operacion (monto, porcentaje);

}

function operacion (a, b){
    let multiplicacion = a * b
    let division = multiplicacion / 100
    let suma = division + a
    resultado (suma)
}

function resultado (a){
    console.log(a)
    alert (a + " Es el monto final")
}

solicitarMonto();
