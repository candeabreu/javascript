//CICLOS E INTERACIONES
// FOR (DESDE; HASTA; ACTUALIZACION) {}
/*
for (let index = 0; index <= 10; index= index + 1){
  console.log (index)
} */

let ingreso = prompt("Ingresar numero")
ingreso = parseInt(ingreso)
let limite = prompt("Ingrese hasta donde")
limite = parseInt(limite)

if (isNaN(ingreso) || isNaN(limite)) {
    console.log("El valor ingresado no es un numero")
} else {
    for (let index = 1; index <= limite; index = index + 1) {
        let result = ingreso * index;
        console.log(ingreso + "x" + index + "=" + result);
    }
}

//BUCLES POR CONDICION WHILE

let ingresoDeProducto = prompt("Ingrese un producto \n Para finalizar ingresa salir")

while (ingresoDeProducto != "salir") {
    console.log("Ingresaste el producto" + ingresoDeProducto)
    //ACTUALIZAR PARA QUE EN ALGUN MOMENTO SEA FALSO
    ingresoDeProducto = prompt("Ingrese un nuevo producto \n Para finalizar ingresa salir")
}

//DO WHILE
/*let ingresoDeProducto2 = ""

do {
    ingresoDeProducto2 = prompt("Ingrese un producto \n Para finalizar ingresa salir");
    console.log("Ingresaste el producto" + ingresoDeProducto2)
} while (ingresoDeProducto2 != "salir")*/

//SWITCH 

let ingresoPagos = prompt("Ingresa una opcion \n 1-Pago en efectivo \n 2-Pago con debito \n 3-Pago con tarjeta \n 4-Pago por transferencia");

switch (ingresoPagos) {
    case "1":
        console.log("Seleccionaste pago en efectivo");
        break;

    case "2":
        console.log("Seleccionaste pago con debito");
        break;

    case "3":
        console.log("Seleccionaste pago con tarjeta");
        break;

    case "4":
        console.log("Seleccionaste pago por transferencia");
        break;

    default:
        console.log("Dato Invalido")
        break;
        
}if (ingresoPagos == "0") {
    alert("¡Gracias, que tengas un buen dia!");
}