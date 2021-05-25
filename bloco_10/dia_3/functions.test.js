// 1 // 1 Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const functions = require('./functions');

test("Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () =>{
  functions.numCreator = jest.fn().mockReturnValue(9);

  expect(functions.numCreator()).toBe(9);
  expect(functions.numCreator).toHaveBeenCalled();
  expect(functions.numCreator).toHaveBeenCalledTimes(1);
});

// 2 Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test("Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.", () =>{
  functions.numCreator = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(functions.numCreator(20/5)).toBe(4);
  expect(functions.numCreator).toHaveBeenCalled();
  expect(functions.numCreator).toHaveBeenCalledTimes(1);
  expect(functions.numCreator).toHaveBeenCalled(10, 2);
});