// Consulta ao material : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
const readline = require('readline-sync');

const Peso = readline.questionFloat("Qual seu peso?(em quilos)");
const Altura = readline.questionInt("Qual sua altura?(em centímetros)");

function imc () {
const peso = Peso;
const altura = Altura;
const result = (peso/Math.pow(altura, 2)).toFixed(2);
console.log(`IMC: ${result}`);

if (imc < 18.5) {
  console.log('Situação: Abaixo do peso (magreza)');
  return;
}

if (imc >= 18.5 && imc < 25) {
  console.log('Situação: Peso normal');
  return;
}

if (imc >= 25 && imc < 30) {
  console.log('Situação: Acima do peso (sobrepeso)');
  return;
}

if (imc >= 30 && imc < 35) {
  console.log('Situação: Obesidade grau I');
  return;
}

if (imc >= 35 && imc < 40) {
  console.log('Situação: Obesidade grau II');
  return;
}

console.log('Situação: Obesidade graus III e IV');
}

imc();