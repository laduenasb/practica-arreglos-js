let numeros = [1,2,6,1,2,5,9,'33','33'];
let result = numeros.filter((item,index)=>{
	return numeros.indexOf(item) === index;
})
// let y=[];
// let numerosSinRepetir=numeros.filter(x=>{if (!y.includes(x)) {y.push(x);return true;}});
let sinRepetir=[];
for(let i=0;i<numeros.length;i++){
	if(!sinRepetir.includes(numeros[i])){
		sinRepetir.push(numeros[i]);
	}
}
console.log(sinRepetir,result);