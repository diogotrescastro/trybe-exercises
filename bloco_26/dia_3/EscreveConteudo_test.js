const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const EscreveConteudo = require('./EscreveConteudo')

describe('Executa a função EscreveConteudo', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  describe('a resposta', () => {
    it('é uma string', () => {
      const result = EscreveConteudo('arquivo.txt, "#vqv"');
      expect(result).to.be.a('string');
    });
  });
  describe('a resposta', () => {
    it('é igual a "ok"', () => {
      const result = EscreveConteudo('arquivo.txt, "#vqv"');
      expect(result).to.be.equal('ok');
    });
  });
});



const um = "um"
const dois = 2
const tres = 3

console.log(typeof(um || dois || tres))
