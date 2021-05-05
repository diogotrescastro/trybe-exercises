// 1 Dada uma matriz de matrizes, transforme em uma única matriz.
// Necessário consulta em https://app.betrybe.com/course/fundamentals/arrays-and-hof/hof-part-4/solutions e https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat


const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() { 
  return arrays.reduce((acc , array) => acc.concat(array), [])
  
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);