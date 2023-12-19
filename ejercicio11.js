/* Crear un programa que me permita encontrar el número máximo en un array */

// Definir la variable con el arreglo de datos

const array1 = [8,25,40,80,101];

// Inicilizar la función que buscará el numero máximo del array
// los (...) hace referencia al spread operator (copiar datos)
const maximoArray = array => Math.max(...array);
// Imprimir resultado del # máximo
console.log(maximoArray(array1));