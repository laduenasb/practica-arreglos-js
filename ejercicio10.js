/* Crear un programa que me permita multiplicar cada elemento por 2 */

// Inicializamos la variable con el areglo de datos
array=[3,6,9,12,15,16];
// Inicializar la función para recorrer y multiplicar los datos del array
// El .map se encargará de recorrer el arreglo
const porDos=x=>x.map(elemento=>elemento*2);

console.log(porDos(array));