//Parte II - Funções
//Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

//EXERCICIO 1, PARTE II

//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

/*Exemplo de palíndromo: arara .
verificaPalindrome("arara") ;
Retorno esperado: true
verificaPalindrome("desenvolvimento") ;
Retorno esperado: false*/

//EXERCICIO 2, PARTE II
//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
/*Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .*/

console.log("EXERCICIO 2, PARTE II");

function maiorNumero (numeros){
  maiorI = 0;
  for (let index in numeros){
    if (numeros[maiorI] < numeros[index]) {
      maiorI = index;
    }
  }
  return maiorI;
}

console.log(maiorNumero([2, 3, 6, 7, 10, 1]));

console.log()

//EXERCICIO 3, PARTE II
//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

/*Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .*/

console.log("EXERCICIO 3, PARTE II");

function menorNumero (numero){
  menorI = 0;
  for (let indexador in numero){
    if (numero[menorI] > numero[indexador]) {
      menorI = indexador;
    }
  }
  return menorI;
}

console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));

console.log()

//EXERCICIO 4, PARTE II
//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

/*Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .*/

console.log("EXERCICIO 4, PARTE II");

function maiorNome(nomes){
  let maiorNome = nomes[0];
  for (let inomes in nomes){
    if (maiorNome.length < nomes[inomes].length){
      maiorNome = nomes[inomes];
    }
  }
  return maiorNome;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

console.log();

//EXERCICIO 5, PARTE II
//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete
/*Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2*/

function maisRepetido (numeros){
  let contador =0;
  let numero = 0;
  let 
}
