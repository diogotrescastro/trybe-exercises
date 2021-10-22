const { expect } = require('chai');

const verificaNumero = require('./verificaNumero');

describe('Executa a função verificaNumero', () => {
  describe('Se o número como parâmetro não é um número', () => {
    describe('o parâmetro', () => {
      it('é uma "string"', () => {
        const result = verificaNumero("8");
        expect(result).to.be.a('string');
      });
      it("se a resposta é 'o valor deve ser um número'", () => {
        const result = verificaNumero("8");
        expect(result).to.be.equals('o valor deve ser um número');
      })
    })
  })
  describe('Se o número como parâmentro for maior que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = verificaNumero(8);
        expect(result).to.be.a('string');
      });
      it('é um número positivo', () => {
        const result = verificaNumero(8);
        expect(result).to.be.equals('positivo');
      })
    })
  })



  describe('Se o número como parâmetro for menor que 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = verificaNumero(-8);
        expect(result).to.be.a('string');
      });
      it('é um número positivo', () => {
        const result = verificaNumero(-8);
        expect(result).to.be.equals('negativo');
      })
    })
  });

  describe('Se o número como parâmetro for igual a 0', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = verificaNumero(0);
        expect(result).to.be.a('string');
      });
      it('é um número positivo', () => {
        const result = verificaNumero(0);
        expect(result).to.be.equals('neutro');
      })
    })
  })

});
