//declaracion de variables
/*let nombre;
let apellido;
let nombreCompleto;

/* 
//asignacion de valores

nombre = "Candelaria";
apellido = "Abreu";
nombreCompleto = nombre + "" + apellido;

//declarar variable e inicializarla a la vez en una sola linea
let numero = 8;
let numero2 = 21;
let resultado = numero + numero2; //resultado seria igual a 29

//constantes con mayuscula, se declaran y se inician
const PI= 3.141516;

*/

/*let nombre2 = prompt("ingrese su nombre");
let apellido2 = prompt("ingresar su apellido");
let numero1 = 8;
let numero2 = 21;
let resultado = numero1 + numero2;


//console=salida de datos
/*
console.log(nombre2)
console.log(apellido2)
console.log("el resultado de la sema es:" + resultado)

let numero3 = 16;
//condicionales
/* condicion entre () y adentro de las llaves {} la caja de ejecucion */
/*if (numero3 == 14) {

    console.log ("Este bloque se va a ejecutar")
}

console.log ("Este es un bloque posterior")*/

// operador de comparacion
//asignacion: =
//comparacion: == compara valores / === compara valores y tipo de dato / < > mayor o menor

/*
let color = prompt ("ingresa un color");

if (color == "verde") {
    console.log ("El color que elegiste es verde")
} else {
    console.log ("el color que elegiste NO es verde" + "es:" + color)
}

let user = prompt ("ingresa tu usuario")

if (user == "") {
    console.log ("campo requerido")

} else {
    let pass = prompt ("ingrese tu password");
    if (pass== "") {
        console.log ("campo requerido");
    } else {
        console.log ("Bienvenido" + user)
    }
} */

/*/Variables booleanas

let valorNumerico = 34;

let esValido = valorNumerico > 20;

console.log (esValido);

if (esValido) {
    console.log ("La variable esValido es verdadera");

} else {
    console.log ("la variable esValido es falsa")
}
*/

//OPERADORES LOGICOS

/* == ES IGUAL
=== ES ESTRICTAMENTE IGUAL
!= ES DISTINTO
!== ES ESTRICTAMENTE DISTINTO
>,<,<=,>= MENOR, MENOR O IGUAL, MAYOR, MAYOR O IGUAL
&& OPERADOR AND (Y)
|| OPERADOR OR (O)
! OPERADOR NOT (NO)*/

/*

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

//AND La primera y la segunda tienen que ser verdaderas
/*if ((nombreIngresado != "") && (apellidoIngresado != "")) {

    console.log("Nombre: " + nombreIngresado + "'\n Apellido: " + apellidoIngresado);
} else {
    console.log("Error: Ingresar nombre y apellido")
}*/
//OR la primera o la segunda tienen que ser verdaderas
/*
let primeraComparacion = nombreIngresado == "Alejandra"
let segundaComparacion = nombreIngresado == "ALEJANDRA"

if (primeraComparacion || segundaComparacion){

    console.log("BIENVENIDA ALEJANDRA, QUE BUENO VERTE");
} else {
    console.log("HOLA" + "" + nombreIngresado +"" + "MUCHO GUSTO");
} */

//Combinados , primero evalua AND y despues OR
/*
if (nombreIngresado !="" && (nombreIngresado == "EMA" || nombreIngresado == "ema")) {
    console.log ("Hola Ema")
} else {
    console.log ("Hola"+ "" + nombreIngresado +"" + "mucho gusto")
} */

//USUARIO Y CONTRASEÑA
/*let usuario = "candelaria";
let password = 12345;

let user = prompt ("Ingrese su usuario");
let pass = prompt ("Ingrese su password");

if (user == usuario  && pass == password) {
    console.log ("Bienvenido" + user)
} else {
    console.log ("Campos incorrectos")
} */

//COMPARANDO NUMEROS 

/*let numeroIngresado = parseInt(prompt("Ingresa un numero"))

if (numeroIngresado < 30) {
    console.log("El precio ingresado es menor a 30")
} else if (numeroIngresado < 50) {
    console.log("El precio ingresado es menor a 70")
} else if (numeroIngresado < 100) {
    console.log("El precio ingresado es menor a 100")
}*/

// CICLOS E INTERACIONES
// FOR (DESDE; HASTA; ACTUALIZACION) {}

/* 
for (let index = 0; index <= 10; index= index + 1){
  console.log (index)
} 


let ingreso =  prompt("Ingresar numero")
ingreso = parseInt (ingreso)
let limite = prompt ("Ingrese hasta donde")
limite = parseInt (limite)

if (isNaN (ingreso) || isNaN (limite)) {
    console.log ("El valor ingresado no es un numero")
} else {
    for (let index = 1; index <= limite; index= index + 1){
        let result = ingreso * index;
        console.log (ingreso + "x" + index + "=" + result);
      } 
}
*/
//BREAK = CORTA EL BUCLE
/*for (let index = 0; index <= 10; index ++) {

    if (index == 6) {
        break;
    }
    console.log (index);
}*/

//CONTINUE = HACE UN SALTO DE BUCLE
for (let index = 0; index <= 10; index++) {

    if (index == 6) {
        continue;
    }
    console.log(index);
}