/* Encontrar el número mayor en un array de números */

// Definir la variable con el array

const numeros = [24,31, 180000, 1, 2];
// Asignar el elementos a una variable

let mayor = numeros[0];
for(i=1; i<numeros.length; i++) {
	if(numeros[i]>mayor){
		mayor=numeros[i];
	}
}

console.log("El numero mayor es:",mayor);