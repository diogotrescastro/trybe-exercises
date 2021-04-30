// 1 Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// Consulta em https://app.betrybe.com/course/fundamentals/arrays-and-hof/hof-part-1/solutions
// Consulta em https://www.w3schools.com/jsref/jsref_join.asp

const newWorker = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com`};
}

const newEmployees = () => {
  const employees = {
    id1: newWorker('Pedro Guerra'),
    id2: newWorker('Luiza Drumond'),
    id3: newWorker('Carla Paiva'),
  }
  return employees;
};

// 2 Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// Consulta em http://devfuria.com.br/javascript/numeros-aleatorios/
// Consulta em https://app.betrybe.com/course/fundamentals/higher-order-functions-do-javascript-es6/javascript-es6-introducao-a-higher-order-functions/1f03dcec-91e1-411b-b296-820a8106e0ef/exercicios/949eaeb9-263b-41c3-aae5-f15a6e494e2d/agora-a-pratica/2aecb6e0-4a8a-4d08-a8f3-77937548f6ce?use_case=side_bar

const betChecker = (bet, result) => {
  return bet === result;
};

const gainOrLose = (bet, block) => {
  const result = Math.floor((Math.random() * 5) + 1);
  console.log(result);
  return block(bet, result) ? 'Parabéns você ganhou!' : 'Tente novamente.';
};

console.log(gainOrLose(3, betChecker));
