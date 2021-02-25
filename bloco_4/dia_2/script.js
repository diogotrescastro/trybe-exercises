// Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



//EXERCICIO 1
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

for (let index =0; index < numbers.length; index++){
  console.log("Resultado Exercício 1: " + numbers[index]);
}

//EXERCICIO 2
// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let resultado =0;

for (let index =0; index < numbers.length; index++){
  resultado = resultado + numbers[index];
}

console.log("Resultado Exercício 2: " + resultado);

//EXERCICIO 3
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.  

let soma = 0;

  for (let index =0; index < numbers.length; index++){
    soma += numbers[index];
  }

  let media = soma / numbers.length;

  console.log("Resultado Exercício 3: " + media);


//EXERCICIO 4
// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (resultado > 20){
  console.log("Resultado Exercício 4: valor maior que 20")
} else {
  console.log("Resultado Exercício 4: valor menor que 20")
}

//EXERCICIO 5
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let maiorNumero = 0

for (let index =0; index < numbers.length; index++){
  if (numbers[index] > maiorNumero){
    maiorNumero = numbers[index]
  }
}

console.log("Resultado Exercício 5: " + maiorNumero)


//EXERCICIO 6
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numerosImpares = 0;

for (let index =0; index < numbers.length; index++){
  if (numbers[index] % 2 !== 0){
    numerosImpares += 1;
  }
}

if(numerosImpares === 0){
  console.log("Resultado Exercício 6: nenhum valor ímpar encontrado");
} else {
  console.log("Resultado Exercício 6: " + numerosImpares)
}

//EXERCICIO 7
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menorNumero = 1000

for (let index =0; index < numbers.length; index++){
  if (numbers[index] < menorNumero){
    menorNumero = numbers[index]
  }
}

console.log("Resultado Exercício 7: " + menorNumero)

//EXERCICIO 8
// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;

let numeros = [];

for (let indexador = 1; indexador <= 25; indexador++){
  numeros.push(indexador);
}

console.log("Resultado Exercício 8: " + numeros);

//EXERCICIO 9
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let ind = 0; ind < numeros.length; ind++){
  console.log("Resultado Exercício 9: " + numeros[ind] / 2);
}
