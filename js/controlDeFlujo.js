console.log ("Quiz de futbol")
let = nombreUsuario = (prompt("Ingrese su nombre"));
alert("¡Bienvenido " + nombreUsuario + "! \n Hoy conoceremos tu nivel de conocimiento de futbol" );

let = puntuacion = 0
let errores = 0
do{
    let = resp1 = Number(prompt("¿Cuántos balones de oro tiene Lionel Messi?"))
    if (resp1===7){
        alert("Correcto")
        puntuacion = puntuacion + 1
        console.log(puntuacion)
        errores = 0
    } else if (resp1>=0 && resp1<=6 || resp1>7){
        alert("Incorrecto")
        console.log(puntuacion)
        errores = 0
    } else{
        alert("Por favor, ingrese un número")
        errores = errores + 1
        console.log(errores)
    }
} while(errores > 0)


let = resp2 = confirm("¿Ronaldo Nazario es el máximo goleador de la copa mundial de futbol")
if (resp2){
    alert("Incorrecto")
    console.log(puntuacion)
} else{
    alert("Correcto")
    puntuacion = puntuacion + 1
    console.log(puntuacion)
}   

let erroresDos = 0
do{
    let = resp3 = prompt("¿Cuál fue el primer equipo de Cristiano Ronaldo? \n a.- Manchester United \n b.- Sporting Lisboa \n c.- Real Madrid \n d.- Benfica") 
.toLocaleLowerCase()
    if (resp3==="b"){
        alert("Correcto")
        puntuacion = puntuacion + 1
        console.log(puntuacion)
        erroresDos = 0
    } else if (resp3==="a" || resp3==="c" || resp3==="d"){
        alert("Incorrecto")
        console.log(puntuacion)
        erroresDos = 0
    } else {
        alert("Ingrese una opción valida")
        erroresDos = erroresDos + 1
        console.log(erroresDos)
    }
} while(erroresDos > 0)

let erroresTres = 0
do{
let = resp4 = prompt("¿Cuál fue la primer selección en ser campeona del mundo \n a.- Argentina \n b.- Brasil \n c.- Uruguay \n d.- Alemania")
.toLocaleLowerCase()
if (resp4==="c"){
    alert("Correcto")
    puntuacion = puntuacion + 1
    console.log(puntuacion)
    erroresTres = 0
} else if (resp4==="a" || resp4==="b" || resp4==="d"){
    alert("Incorrecto")
    console.log(puntuacion)
    erroresTres = 0
} else {
    alert("Ingrese una opción valida")
    erroresTres = erroresTres + 1
    console.log(erroresTres)
}
} while(erroresTres > 0)

let erroresCuatro = 0
do{
let = resp5 = Number(prompt("¿Cuántas Champions League tiene el Real Madrid?"))
if (resp5===13){
    alert("Correcto")
    puntuacion = puntuacion + 1
    console.log(puntuacion)
    erroresCuatro = 0
} else if (resp5>=0 && resp1<=12 || resp1>13){
    alert("Incorrecto")
    console.log(puntuacion)
    erroresCuatro = 0
} else{
    alert("Por favor, ingrese un número")
    erroresCuatro = erroresCuatro + 1
    console.log(erroresCuatro)
}
} while(erroresCuatro > 0)

console.log (puntuacion)

function promedioPorcentaje (puntuacion){
    return (puntuacion/5)*100;
}

const porcentajeFinal = promedioPorcentaje(puntuacion)
console.log (porcentajeFinal)

switch(puntuacion){
    case 5:
        alert(`${nombreUsuario} tu puntuación es de 5 puntos de 5 \n ¡Felicidades usted es un experto de futbol! ⚽💯 \n Obtuvo un promedio del ${porcentajeFinal}%`)
        break
    case 4:
        alert(`${nombreUsuario} tu puntuación es de 4 puntos de 5 \n ¡Felicidades usted es un gran fan de futbol! ⚽ \n Obtuvo un promedio del ${porcentajeFinal}%`)
        break
    case 3:
        alert(`${nombreUsuario} tu puntuación es de 3 puntos de 5 \n Usted es fanatico del futbol \n Obtuvo un promedio del ${porcentajeFinal}%`)
        break
    case 2:
        alert(`${nombreUsuario} tu puntuación es de 2 puntos de 5 \n Usted ve casualmente futbol \n Obtuvo un promedio del ${porcentajeFinal}%`)
        break
    case 1:
        alert(`${nombreUsuario} tu puntuación es de 1 puntos de 5 \n Usted deberia ver más futbol \n Obtuvo un promedio del ${porcentajeFinal}%`)
        break
    case 0:
        alert(`${nombreUsuario} tu puntuación es de 0 puntos de 5 \n ¿Sabe lo que es el futbol? \n Obtuvo un promedio del ${porcentajeFinal}%`)
        break
    default: 
    alert("¡Gracias por jugar!")
}
