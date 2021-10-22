const fs = require('fs').promises;

// Necessária consulta ao gabarito para resolução das questões

// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function calculate(a, b,c) {
  return new Promise((resolve,reject) => {
    if (typeof a !== "number" || typeof b !== "number" || typeof b !== "number"  ) return reject("Informe apenas números");
    const result = (a + b)* c;
    if( result < 50 ) { reject("Valor muito baixo")};
    resolve(result);
  });
}

// calculate(10,10,10)
// .then( resolve => console.log(resolve))
// .catch(error => console.log(error))

// calculate(1,1,"a")
// .then( resolve => console.log(resolve))
// .catch(error => console.log(error))

// calculate(1,1,1)
// .then( resolve => console.log(resolve))
// .catch(error => console.log(error))

// ------------------------------

// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

// Minha versão
/* calculate(randomNumber(),randomNumber(),randomNumber())
.then( resolve => console.log(resolve))
.catch(error => console.log(error))*/

// Versão Trybe
function callDoMath() {
  /* Criamos um novo array de 3 posições e utilizamos o `map` para gerar um número aleatório para cada posição do Array */
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);

doMath(...randomNumbers)
.then(result => console.log(result))
.catch(err => console.error(err.message))
}

// ------------------------------------------------------------------------------
// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

async function callDoMathAsync() {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);
  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}


// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

fs.readFile('./simpsons.json', 'utf-8')
  .then((fileContent) => {
    return JSON.parse(fileContent);
  })
  .then((simpsons) => {
    return simpsons.map(({ id, name }) => `${id} - ${name}`);
  })
  .then((strings) => {
    strings.forEach((string) => console.log(string));
  });

  // Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
  

