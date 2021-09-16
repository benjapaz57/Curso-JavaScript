let edad = prompt('Ingrese su edad')
let edadPareja = prompt('Ingrese la edad de su pareja')
if (edad > edadPareja){
    console.log('Usted es mayor que su pareja.')
} else if (edad < edadPareja){
    console.log('Su pareja es mayor que usted')
} else{
    console.log('Tienen la misma edad')
}