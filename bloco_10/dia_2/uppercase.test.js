const uppercase = require('./uppercase')

it(`testa se a função converte as letras para maiúsculas, 'teste' para 'TESTE'`, (done) => {
  uppercase('teste', (str) => {
    expect(str).toBe('TESTE');
    done();
  });
});