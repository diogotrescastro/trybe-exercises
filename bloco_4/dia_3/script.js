// EXERCÍCIO 1
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5
let asterisco = "*"
let resultado= '';

for (let i =0; i < n; i += 1){
  resultado += asterisco;
}

for (let i =0; i <= n; i += 1){
  console.log("RESULTADO DO EXERCÍCIO 1:" +resultado);
}

// EXERCÍCIO 2
// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****

let resolucao =""

for (let index =0; index <= n; index += 1){
  console.log("RESULTADO DO EXERCÍCIO 2:" +resolucao);
  resolucao += asterisco;
}

// EXERCÍCIO 3
// Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

let result = '';
let posicao = n;

for (let indexador =0; indexador < n; indexador += 1){
  for (let colunai =0; colunai <= n; colunai += 1){
    if (colunai < posicao){
      result = result + " ";
    } else {
      result = result + asterisco;
    }
  }
  console.log("RESULTADO DO EXERCÍCIO 3:" + result);
  result = '';
  posicao -= 1;
}
// + 

// EXERCÍCIO 4
// Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****

let linhai;
let linhaColuna;
let linhaEspaco = '';

let meioPiramide = (n + 1) / 2;
let esquerda = meioPiramide;
let direita= meioPiramide;

for (linhai = 0; linhai <= meioPiramide; linhai += 1) {
  for (linhaColuna = 1; linhaColuna <= n; linhaColuna += 1) {
    if (linhaColuna > direita && linhaColuna < esquerda) {
      linhaEspaco = linhaEspaco + asterisco;
    } else {
      linhaEspaco = linhaEspaco + ' ';
    }
  }
  console.log("RESULTADO DO EXERCÍCIO 4:" +linhaEspaco);
  linhaEspaco = '';
  direita -= 1;
  esquerda += 1;
};