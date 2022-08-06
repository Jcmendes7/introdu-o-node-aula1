 multiplicar = (numero1,numero2) => {
    return numero1 * numero2;
 }
 dividir = (numero1,numero2) => {
    let resposta =  numero2 == 0?`Não é Possivél dividir`: numero1 / numero2;
    return resposta;
 }

 somar = (numero1,numero2) => {
    return numero1 + numero2;
 }

 subtrair = (numero1,numero2) => {
    return numero1 - numero2;
 }

 parOuImpar = (numero) => {
    let resultado = numero % 2 == 0? `O Número ${numero} é Par`:
    `O Número ${numero} é Impar`;
    return resultado;
    
 }

//função que recebe um callback
 function calcular(numero1,numero2,callback) {
    return `Resultado -> ${callback(numero1,numero2)}`;
 }
//Munu de escolhas 
 console.log(`
 1-Multiplicar
 2-Dividir
 3-Somar
 4-Subtrair
 5-Par ou Impar`);

 console.log("-----------------------------------");

let  operacao = 5, num1=18, num2=12,parImpar=4
//Estrutura de decisão Switch
 switch (operacao) {
    case 1:
        console.log(calcular(num1,num2, multiplicar));
        break;
    case 2:
        console.log(calcular(num1,num2, dividir));
        break;
    case 3:
        console.log(calcular(num1,num2, somar));
        break;
    case 4:
        console.log(calcular(num1,num2, subtrair));
        break;
    case 5:
        console.log(parOuImpar(parImpar));
        break;
 
    default:
        console.log("Opção invalida.");
        break;
 }

 console.log("--------------------");

 /*metodo Filter, recebe um parametro como callback,retorna um novo aray baseado na condição passada pelo callback */

 let arr = [1,2,3,4,5,6,7,8,9,10];

 let arrFilter = arr.filter((valor,) => {
   
   return  valor > 20;
 })


// metodo ForEach, percorre o Array

arr.forEach((valor,index) =>{
   console.log(`${valor} na posição ${index}`);
});

//metodo .map

let arrMap = arr.map((valor) =>{
   return valor * 3
});
console.log(`ArrayMap = ${arrMap}`);