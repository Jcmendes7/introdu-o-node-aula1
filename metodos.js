 multiplicar = (numero1,numero2) => {
    return numero1 * numero2
 }
 dividir = (numero1,numero2) => {
    let resposta =  numero2 == 0?`Não é Possivél dividir`: numero1 / numero2
    return resposta
 }

 somar = (numero1,numero2) => {
    return numero1 + numero2
 }

 subtrair = (numero1,numero2) => {
    return numero1 - numero2
 }

 parOuImpar = (numero) => {
    let resultado = numero % 2 == 0? `O Número ${numero} é Par`:
    `O Número ${numero} é Impar`
    return resultado
    
 }


 function calcular(numero1,numero2,callback) {
    return `Resultado -> ${callback(numero1,numero2)}`
 }

 console.log(`
 1-Multiplicar
 2-Dividir
 3-Somar
 4-Subtrair
 5-Par ou Impar`)

 console.log("-----------------------------------")

let  opercao = 7, num1=18, num2=12,parImpar=4

 switch (operacao) {
    case 1:
        console.log(calcular(num1,num2, multiplicar))
        break;
    case 2:
        console.log(calcular(num1,num2, dividir))
        break;
    case 3:
        console.log(calcular(num1,num2, somar))
        break;
    case 4:
        console.log(calcular(num1,num2, subtrair))
        break;
    case 5:
        console.log(parOuImpar(parImpar))
        break;
 
    default:
        console.log("Opção invalida.")
        break;
 }