// 5 Compare dois objetos (JSON) para verificar se são idênticos ou não

test('Compara se dois objetos (JSON) para verificar se são idênticos ou não', () => {
  const obj1 = {
    title: 'My Title',
    description: 'My Description',
  };
  
  const obj2 = {
    description: 'My Description',
    title: 'My Title',
  };
  
  const obj3 = {
    title: 'My Different Title',
    description: 'My Description',
  };

  expect(obj1).toEqual(obj2);
  expect(obj1).not.toEqual(obj3);
  expect(obj2).not.toEqual(obj3);
});

// implemente seus testes aqui
// assert.deepStrictEqual(obj1, obj2);
// assert.deepStrictEqual(obj1, obj3);
// assert.deepStrictEqual(obj2, obj3);

