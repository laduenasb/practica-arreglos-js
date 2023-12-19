/* Filtrar los números pares de un array usando el arrow functions (función flecha) */
/*
const paresArray = array => array.filter();
const duplicarArray = array => array.map();
*/

// Definir la variable con el arreglo de datos
const array3 = [10,15,20,25,30];

// Inicializar la función
const paresArray = array => array.filter(num=>num%2===0);

// Imprimir el resultado del filtro
console.log(paresArray(array3))