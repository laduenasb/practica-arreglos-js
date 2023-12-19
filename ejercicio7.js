/** Usando operadores ternarios, realiza un ejercicio en donde me diga que el varlor es par o impar */

// Inicializar la varible

let numero = 8;

// Inicializar una variable que se utilizará cómo operador ternario

let esPar = numero % 2 === 0 ? true : false;

// Impresión en la consola de un mensaje que depende del valor de la variable esPar

console.log(esPar ? "Es un numero par":"No es un numero par");