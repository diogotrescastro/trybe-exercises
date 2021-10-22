const readline = require('readline-sync');

const Distancia = readline.questionInt("Qual a distância?(em metros)");
const Tempo= readline.questionInt("Qual o tempo?(em segundos)");

function velocidade () {
const distancia = Distancia;
const tempo = Tempo;
const result = (distancia/tempo).toFixed(2);
console.log(`A velocidade média é de ${result} metros/segundos`)
}

velocidade();