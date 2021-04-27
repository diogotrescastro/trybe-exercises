const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

addTurno(lesson2, 'turno', 'manhã');

console.log(`Resultado do exercicio 1: ${Object.entries(lesson2)}`)

// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKey = (objeto) => Object.keys(objeto);

console.log(`Resultado do exercicio 2: ${listKey(lesson1)}`);


// 3 Crie uma função para mostrar o tamanho de um objeto.
const TamanhoObjeto = (objeto) =>  Object.keys(objeto).length;
console.log(`Resultado do exercicio 3: ${TamanhoObjeto(lesson1)}`);

// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listaValores = (objeto) =>  Object.values(objeto);
console.log(`Resultado do exercicio 3: ${listValues(lesson1)}`);