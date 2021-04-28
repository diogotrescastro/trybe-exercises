// 3 Escreva a função sumAllNumbers para passar nos testes já implementados.

const assert = require('assert');
// escreva a função sumAllNumbers aqui
// consulta em https://app.betrybe.com/course/fundamentals/js-unit-tests/js-unit-tests-solutions
const sumAllNumbers = (array) => {
  let sum = 0;
  for (const number in array) {
    sum += array[number];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);