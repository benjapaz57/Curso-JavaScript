//El ejemplo serían las mesas de un bar
let numMesa = Number(prompt('Ingrese cantidad de mesas ocupadas'))
let i = 1
do{
    switch (numMesa){
        case 2:
            console.log('Poca gente')
            break
        case 5: 
            console.log('Mitad del bar lleno')
            break
        case 8: 
            console.log('Casi casi lleno')
            break
        case 10:
            console.log('Bar lleno')
    }
    i++
} while (i<=10)
let resultado = alert('Hay ' + numMesa + ' mesas ocupadas')