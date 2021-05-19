// 4 A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./myFizzBuzz');
// implemente seus testes aqui

describe('myFizzBuss', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 (30) e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
  });

  test('Faça uma chamada com um número divisível por 3 (9)e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('Faça uma chamada com um número divisível por 5 (25)e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  test('Faça uma chamada com um número que não é divisível por 3 ou 5  (11) e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  test('Faça uma chamada com um parâmetro (string) que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('5')).toBe(false);
  });

})