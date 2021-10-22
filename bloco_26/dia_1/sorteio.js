const readline = require('readline-sync');

function verificaResultado(numero, resultado) {
  if ( numero !== resultado) {
   return console.log(`Opa, não foi dessa vez. O número era ${ resultado }`)
  } return console.log("Parabéns, número correto!");
}

function sorteio () {
const numeroAleatorio = parseInt(Math.random() * 10);
const numero = readline.questionInt("Em que número (de 1 a 10) estou pensando?");
verificaResultado(numero, numeroAleatorio);
const DeNovo = readline.question("Deseja jogar novamente? (Digite 'sim', ou outra coisa para não jogar)");
if (DeNovo !== "sim") return console.log("Obrigado");
sorteio();
}

sorteio();