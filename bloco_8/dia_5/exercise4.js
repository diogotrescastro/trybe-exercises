// 4 Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

// Foi necessário consulta ao gabarito : https://app.betrybe.com/course/fundamentals/arrays-and-hof/hof-part-5/solutions

const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (array) => array.filter(
    ({ nationality, bornIn }) =>
        nationality === 'Australian'
        && bornIn > 1900 && bornIn <= 2000,
    );

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(
  filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
);
assert.deepStrictEqual(
  filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' },
);