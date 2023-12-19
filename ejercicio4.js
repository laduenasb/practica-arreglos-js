/* Verificar si un elemento especifico se encuentra o no en un array */

// Definir la variable con el arreglo de datos
const frutas = ["coco", "banana", "fresa", "mango"];

// Inicializar el elemento a buscar
const elementoBuscado = "banana";

// Inicializar una varibale para el estado de la busqueda

let encontrado = false;

//Inicializar el bucle
for(let i=0;i<frutas.length;i++) {
	if(frutas[i]===elementoBuscado){
		// Se cambia el dato a true, siempre y cuando se encuentre el elemento buscado
		encontrado=true;
		// Se salga del bucle una vez que encuentre el elemento buscado.
		break;
	}
}

// Imprimir el resultado

console.log(`¿${elementoBuscado} esta en el array?, ${encontrado ? "Si":"No"}`)