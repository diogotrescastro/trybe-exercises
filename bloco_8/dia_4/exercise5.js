// 5 Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// Necessária consulta ao gabarito 
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, currentName) =>
     acc + currentName.split('').reduce((accumulator, currentLetter) => {
        if (currentLetter === 'a' || currentLetter === 'A'){
          return accumulator + 1;
        } 
        return accumulator;
     }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);