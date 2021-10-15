const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Busca um filme no BD', () => {
  describe('quando não existe nenhum filme com o ID informado', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getById')
        .resolves(null);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um null', async () => {
      const response = await MoviesService.getById();

      expect(response).to.be.a('null');
    });
  });

  describe('quando existe um filmes com o ID', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getById')
        .resolves([
          {
            id: '604cb554311d68f491ba5781',
            title: 'Example Movie',
            directedBy: 'Jane Dow',
            releaseYear: 1999,
          }
        ]);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.getById();

      expect(response).to.be.a('object');
    });

    it('tal item possui as propriedades: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MoviesService.getById();

      expect(response).to.include.all.keys('id', 'title', 'releaseYear', 'directedBy')
    });

  });
});